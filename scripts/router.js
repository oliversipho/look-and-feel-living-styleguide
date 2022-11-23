const routes = [
	{ title: '404', alias: '404', hash: '#404', directory: './components/404' },
	{ title: 'Home', alias: 'home', hash: '#home', directory: './components/home' },
	{ title: 'Afbeeldingen', alias: 'afbeeldingen', hash: '#afbeeldingen', directory: './components/afbeeldingen' },
	{ title: 'Knoppen', alias: 'knoppen', hash: '#knoppen', directory: './components/knoppen' },
	{ title: 'Voorbeeld', alias: 'voorbeeld', hash: '#voorbeeld', directory: './components/voorbeeld' },
]

const locationHandler = async () => {
	window.location.hash = window.location.hash ? window.location.hash : '#home'
	const hash = window.location.hash
	let route = routes.find((item) => item.hash === hash)
	if (!route) {
		route = routes[0]
		window.location.hash = route.hash
	}

	const html = await fetch(`${route.directory}/${route.alias}.html`).then((data) => data.text())
	document.getElementById('main-content').innerHTML = html
	document.title = route.title

	const link = document.getElementById('component-styles')
	link.href = `${route.directory}/${route.alias}.css`

	const script = document.getElementById('component-script')
	script.src = `${route.directory}/${route.alias}.js`
}

window.addEventListener('hashchange', locationHandler)
locationHandler()