window.addEventListener('load', () => getNavigationList())

var components = [
	{ label: 'Afbeeldingen', link: './componenten/afbeeldingen/afbeeldingen.html', assignedTo: 'Celine' },
	{ label: 'Berichtgeving', link: './componenten/berichtgeving/berichtgeving.html', assignedTo: 'Fatih' },
	{ label: 'Blokken', link: './componenten/blokken/blokken.html', assignedTo: 'Luciano' },
	{ label: 'Formulieren', link: './componenten/formulieren/formulieren.html', assignedTo: 'Thomas' },
	{ label: 'Globals', link: './componenten/globals/globals.html', assignedTo: 'Mokhtar' },
	{ label: 'Headings', link: './componenten/headings/headings.html', assignedTo: 'Milan' },
	{ label: 'Iconen', link: './componenten/iconen/iconen.html', assignedTo: 'Milan' },
	{ label: 'Interactieve-componenten', link: './componenten/interactieve-componenten/interactieve-componenten.html', assignedTo: 'Stefan' },
	{ label: 'Kleuren', link: './componenten/kleuren/kleuren.html', assignedTo: 'Cathelijne' },
	{ label: 'Knoppen', link: './componenten/knoppen/knoppen.html', assignedTo: 'Thomas' },
	{ label: 'Lijsten', link: './componenten/lijsten/lijsten.html', assignedTo: 'Romer' },
	{ label: 'Media', link: './componenten/media/media.html', assignedTo: 'Demi' },
]

function getNavigationList() {
	const list = document.getElementById('navigation-list')
	components.forEach((component) => {
		const ancor = document.createElement('a')
		ancor.innerHTML = `${component.label} <small>(${component.assignedTo})</small>`
		ancor.href = component.link
		list.appendChild(ancor)
	})
}