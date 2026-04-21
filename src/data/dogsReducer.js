// default dogs: [ { id, name, description, price } ]

function dogsReducer(state, action ) {
	if( action.type === 'add dog' ) {
		// action.value innehåller { name }
		const newDog = {
			...action.value,  // name
			id: state.length+1,  // ett unikt värde, funkar bara när vi inte kan ta bort hundar
			description: 'TODO beskrivning',
			price: 27000
		}
		return [ ...state, newDog ]
	}
	return state
}

export { dogsReducer }
