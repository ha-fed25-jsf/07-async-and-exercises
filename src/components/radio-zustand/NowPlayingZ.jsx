import { useRadioStore } from "../../data/radioStore.js"

const NowPlaying = () => {
	const channelName = useRadioStore(state => state.channel)
	return (
		<p>
			Du lyssnar på {channelName}.
		</p>
	)
}

export default NowPlaying
