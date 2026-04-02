import RadioPage from "./pages/RadioPage.jsx";
import RadioZPage from "./pages/RadioZPage.jsx";
import Root from "./pages/Root.jsx";
import StartPage from "./pages/StartPage.jsx";

export const routeConfig = [
	{
		path: '/',  // i stället kan man skriva index: true
		Component: Root,
		children: [

			{
				path: '/',
				Component: StartPage
			},

			{
				path: '/radio',
				Component: RadioPage
			},

			{
				path: '/radio-z',
				Component: RadioZPage
			},

		]
	}
]
