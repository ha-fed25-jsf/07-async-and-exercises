import { produce } from 'immer'

// default dogs: [ { id, name, description, price } ]
// Första state är default-listan

function dogsReducer(state, action) {
	if( action.type === 'add dog' ) {
		// hitta största id i listan
		const max = state.reduce((accumulator, current) => current.id > accumulator ? current.id : accumulator, 0)

		// action.value innehåller { name }
		const newDog = {
			...action.value,  // name
			id: max + 1,  // ett unikt värde
			description: 'TODO beskrivning',
			price: 27000
		}
		// Gamla sättet: göra en kopia
		// return [ ...state, newDog ]

		// Med immer kan vi använda enklare JavaScript
		return produce(state, draft => {
			draft.push(newDog)
		})
	}

	else if( action.type === 'buy dog' ) {
		// action.value innehåller dog-objekt { id, name, description, price }
		// Gamla sättet: filter
		// return state.filter(dog => dog.id !== action.value.id)

		// Med immer använder vi splice
		return produce(state, draft => {
			const startIndex = draft.findIndex(dog => dog.id === action.value.id)
			draft.splice(startIndex, 1)
		})
	}

	else if( action.type === 'edit dog' ) {
		// action.value är ett dog-objekt { id, name, description, price }

		// Utan immer behöver vi kopiera och använda map

		// Med immer: indexera normalt
		return produce(state, draft => {
			const index = draft.findIndex(dog => dog.id === action.value.id)
			draft[index].price += 500
		})
	}

	return state
}

export { dogsReducer }
