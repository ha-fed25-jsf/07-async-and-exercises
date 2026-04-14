import { useContext } from 'react'
import ZoomContext from '../../data/ZoomContext.js'

const ZoomButton = () => {
	const { setZoomed } = useContext(ZoomContext)
	
	return (
		<button onClick={() => {
			setZoomed(z => !z)
			// console.log('Zoombutton onclick')
		}}> Zooma </button>
	)
}
export default ZoomButton
