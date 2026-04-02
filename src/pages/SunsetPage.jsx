import './SunsetPage.css'
import { fetchSunTimes } from '../data/fetchSunTimes.js'
import { useEffect, useState } from 'react'

const SunsetPage = () => {
	const [data, setData] = useState(null)

	// Detta görs när komponenten renderas första gången
	useEffect(() => {
		const lat = 48.85666666666667, lng = 2.3508333333333336  // Paris
		fetchSunTimes(lat, lng, setData)
	}, [])


	return (
		<div className="sunset-sunrise">
			<h2> Sunrise and sunset API </h2>
			<p> Ska vi se när solen gick upp i Paris idag? </p>

			{data ? (
				<>
				<p> Solen gick upp idag klockan {data.sunrise}.</p>
				<p> Och ner igen klockan {data.sunset}. </p>
				</>
			) : (
				<p> Datan kommer snart... </p>
			)}

			<p> Övning: lägg till input-fält och en button så användaren kan skriva in sina egna koordinater! </p>

		</div>
	)
}

export default SunsetPage
