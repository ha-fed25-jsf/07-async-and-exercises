import { useRadioStore } from '../data/radioStore.js'
import ChannelZ from '../components/radio-zustand/ChannelZ.jsx'
import NowPlayingZ from '../components/radio-zustand/NowPlayingZ.jsx'
import './RadioPage.css'
import { channelData } from '../data/radioData.js'

const RadioZPage = () => {
	const channel = useRadioStore(state => state.channel)
	const setChannel = useRadioStore(state => state.setChannel)

	return (
		<div className="radio-page">
			<h2> Välj radiokanal </h2>
			<section className="channels">
				{channelData.map(c => (
					<ChannelZ key={c.id}
						name={c.name}
						/>
				))}
			</section>
			<NowPlayingZ />
		</div>
	)
}

export default RadioZPage
