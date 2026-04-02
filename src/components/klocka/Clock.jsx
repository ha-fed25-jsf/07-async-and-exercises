import { useState } from "react"

const Clock = () => {
	const [message, setMessage] = useState('Ingen tid har gått...')
	const [enabled, setEnabled] = useState(true)

	const handleClick = () => {
		console.log('handleClick före')
		setMessage('... tiden går...')
		setEnabled(false)

		setTimeout(() => {
			console.log('handleClick efter')
			setMessage('Nu är det dags! Sekunden är klar!')
			setEnabled(true)
		}, 2000)
		// använd clearTimeout eller clearInterval för att avbryta timeouts och intervall
	}

	return (
		<>
			<button onClick={handleClick} disabled={!enabled}> Vänta 1 sekund </button>
			<p> {message} </p>
		</>
	)
}

export default Clock
