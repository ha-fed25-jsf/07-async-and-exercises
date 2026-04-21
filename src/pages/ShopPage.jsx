import './ShopPage.css'
import { useReducer, useState } from 'react'
import { dogs as defaultDogs } from '../data/dogs.js'
import { dogsReducer } from '../data/dogsReducer.js'

const ShopPage = () => {
	const [dogs, dispatchDogs] = useReducer(dogsReducer, defaultDogs)
	const [newDog, setNewDog] = useState({
		name: ''
	})

	const handleAddDog = () => {
		const action = { type: 'add dog', value: newDog }
		dispatchDogs(action)
	}

	return (
		<div className="shop-page">
			<h2> Hundaffär </h2>

			<p> Här är våra fina hundar. </p>

			<div>
				<label htmlFor="dogName"> Namn </label>
				<input id="dogName" type="text"
					value={newDog.name}
					onChange={event => setNewDog({ ...newDog, name: event.target.value })}
					/>

				<button onClick={handleAddDog}> Lägg till </button>
			</div>

			<div className="shop-list">
				{dogs.map(d => (
					<section key={d.id} className="shop-item">
						<h3> {d.name} </h3>
						<p> {d.description} </p>
						<p> {d.price} kr </p>
					</section>
				))}
				{/* <section className="shop-item">
					<h3> Karo </h3>
					<p> Beskrivning </p>
					<p> Pris kr </p>
				</section> */}
			</div>
		</div>
	)
}
export default ShopPage
