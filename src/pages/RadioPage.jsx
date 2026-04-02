import { useState } from 'react'
import Channel from '../components/radio/Channel'
import NowPlaying from '../components/radio/NowPlaying'
import './RadioPage.css'
import { channelData } from '../data/radioData.js'

const RadioPage = () => {
	const [channel, setChannel] = useState('P3')

	// Vi behöver inte någon ny funktion för whenClicked - den gör samma sak som setChannel

	return (
		<div className="radio-page">
			<h2> Välj radiokanal </h2>
			<section className="channels">
				{channelData.map(c => (
					<Channel key={c.id}
						name={c.name}
						selected={c.name === channel}
						whenClicked={setChannel}
						/>
				))}
			</section>
			<NowPlaying channelName={channel} />
		</div>
	)
}

export default RadioPage
