const Channel = ({ name, selected, whenClicked }) => {

	return (
		<label>
			<input type="radio"
				checked={selected}
				onChange={() => whenClicked(name)}
				/> {name}
		</label>
	)
}

export default Channel
