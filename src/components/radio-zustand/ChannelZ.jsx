import { useRadioStore } from "../../data/radioStore.js"

const ChannelZ = ({ name }) => {
	const selectedChannel = useRadioStore(state => state.channel)
	const setChannel = useRadioStore(state => state.setChannel)

	const selected = name === selectedChannel

	return (
		<label>
			<input type="radio"
				checked={selected}
				onChange={() => setChannel(name)}
				/> {name}
		</label>
	)
}

export default ChannelZ
