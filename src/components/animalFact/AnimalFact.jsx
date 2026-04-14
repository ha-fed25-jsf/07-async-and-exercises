import { useContext } from "react"
import ZoomContext from "../../data/ZoomContext.js"


const AnimalFact = ({ fact }) => {
	const { zoomed } = useContext(ZoomContext)
	// console.log('AnimalFact zoomed:', zoomed)
	return (
		<section key={fact.id} className={zoomed ? 'zoom' : ''}>
			<h3> {fact.name} </h3>
			<p> {fact.fact} </p>
		</section>
	)
}
export default AnimalFact
