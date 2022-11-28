const items = [
	{ label: 'Home', hash: '#home', directory: './components/home' },
	{ label: 'Voorbeeld', hash: '#voorbeeld', directory: './components/voorbeeld' },
	{ label: 'Afbeeldingen', hash: '#afbeeldingen', directory: './components/afbeeldingen' },
	{ label: 'animatie', alias: 'animatie', hash: '#animatie', directory: './components/animatie' },
	{ label: 'berichtgeving', alias: 'berichtgeving', hash: '#berichtgeving', directory: './components/berichtgeving' },
	{ label: 'blokken', alias: 'blokken', hash: '#blokken', directory: './components/blokken' },
	{ label: 'formulieren', alias: 'formulieren', hash: '#formulieren', directory: './components/formulieren' },
	{ label: 'globals', alias: 'globals', hash: '#globals', directory: './components/globals' },
	{ label: 'headings', alias: 'headings', hash: '#headings', directory: './components/headings' },
	{ label: 'iconen', alias: 'iconen', hash: '#iconen', directory: './components/iconen' },
	{ label: 'interactieve-componenten', alias: 'interactieve-componenten', hash: '#interactieve-componenten', directory: './components/interactieve-componenten' },
	{ label: 'kleuren', alias: 'kleuren', hash: '#kleuren', directory: './components/kleuren' },
	{ label: 'Knoppen', alias: 'knoppen', hash: '#knoppen', directory: './components/knoppen' },
	{ label: 'lijsten', alias: 'lijsten', hash: '#lijsten', directory: './components/lijsten' },
	{ label: 'media', alias: 'media', hash: '#media', directory: './components/media' },
	{ label: 'navigatie', alias: 'navigatie', hash: '#navigatie', directory: './components/navigatie' },
	{ label: 'reclame', alias: 'reclame', hash: '#reclame', directory: './components/reclame' }
]

function getNavigationList() {
	const list = document.getElementById('main-nav-items')
	items.forEach((item) => {
		const ancor = document.createElement('a')
		ancor.id = `menu-item-${item.hash}`
		ancor.innerHTML = `${item.label}`
		ancor.href = item.hash
		ancor.onclick = toggleMenu
		list.appendChild(ancor)
	})
}

function toggleMenu() {
	const element = document.getElementById('main-nav')
	element.classList.toggle('visible')

	// const activeItem =  document.getElementsByClassName('active')[0]
	// activeItem.scrollIntoView()
}

window.toggleMenu = toggleMenu
getNavigationList()