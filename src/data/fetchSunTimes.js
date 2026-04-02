
async function fetchSunTimes(lat, lng, saveData) {
	const settings = {
		method: 'GET'  // denna är default, vi kan egentligen hoppa över den
	}
	const baseUrl = 'https://api.sunrise-sunset.org/json'
	const url = `${baseUrl}?lat=${lat}&lng=${lng}`

	try {
		// response-objektet innehåller meta-information om svaret
		// till exempel response.status (som bör vara 200)
		const response = await fetch(url, settings)
		const data = await response.json()
		console.log('fetchSunTimes fick data från API:', data)

		saveData({
			sunrise: data.results.sunrise,
			sunset: data.results.sunset
		})

	} catch(error) {
		console.error('Ett fel inträffade i fetchSunTimes: ', error.message)
	}
}

export { fetchSunTimes }
