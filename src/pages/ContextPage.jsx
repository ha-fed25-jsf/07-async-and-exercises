import { facts } from '../data/facts.js'
import './ContextPage.css'
import ZoomContext from '../data/ZoomContext.js'
import AnimalFact from '../components/animalFact/AnimalFact.jsx'
import { useState } from 'react'
import ZoomButton from '../components/animalFact/ZoomButton.jsx'
import Framed from '../components/animalFact/Framed.jsx'

const ContextPage = () => {
	const [zoomed, setZoomed] = useState(false)
	const zoomPackage = { zoomed, setZoomed }


	return (
		<ZoomContext.Provider value={zoomPackage}>
		<div className="context-page">
			<h2> Djurfakta </h2>

			<Framed><Framed><Framed>
				<ZoomButton />
			</Framed></Framed></Framed>

			{facts.map(fact => (
				<Framed key={fact.id}>
					<AnimalFact fact={fact} />
				</Framed>
			))}
		</div>
		</ZoomContext.Provider>
	)
}
export default ContextPage
