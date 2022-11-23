const items = [
	{ label: 'Home', hash: '#home' },
	{ label: 'Afbeeldingen', hash: '#afbeeldingen' },
	{ label: 'Knoppen', hash: '#knoppen' },
	{ label: 'Voorbeeld', hash: '#voorbeeld' }
]

function getNavigationList() {
	const list = document.getElementById('main-nav-items')
	items.forEach((item) => {
		const ancor = document.createElement('a')
		ancor.innerHTML = `${item.label}`
		ancor.href = item.hash
		ancor.onclick = toggleMenu
		list.appendChild(ancor)
	})
}

function toggleMenu() {
	const list = document.getElementById('main-nav-items')
	list.classList.toggle('visible')

	const item = document.getElementById('main-nav-item')
	item.classList.toggle('visible')
}

window.toggleMenu = toggleMenu
getNavigationList()