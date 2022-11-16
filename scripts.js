window.addEventListener('load', () => getNavigationList())

var components = [
	{ label: 'Afbeeldingen', link: './componenten/afbeeldingen/', assignedTo: 'Celine' },
	{ label: 'Animatie', link: './componenten/animatie/', assignedTo: '-' },
	{ label: 'Berichtgeving', link: './componenten/berichtgeving/', assignedTo: 'Fatih' },
	{ label: 'Blokken', link: './componenten/blokken/', assignedTo: 'Luciano' },
	{ label: 'Formulieren', link: './componenten/formulieren/', assignedTo: 'Thomas' },
	{ label: 'Globals', link: './componenten/globals/', assignedTo: 'Mokhtar' },
	{ label: 'Headings', link: './componenten/headings/', assignedTo: 'Milan' },
	{ label: 'Iconen', link: './componenten/iconen/', assignedTo: 'Milan' },
	{ label: 'Interactieve-componenten', link: './componenten/interactieve-componenten/', assignedTo: 'Stefan' },
	{ label: 'Kleuren', link: './componenten/kleuren/', assignedTo: 'Cathelijne' },
	{ label: 'Knoppen', link: './componenten/knoppen/', assignedTo: 'Thomas' },
	{ label: 'Lijsten', link: './componenten/lijsten/', assignedTo: 'Romer' },
	{ label: 'Media', link: './componenten/media/', assignedTo: '-' },
	{ label: 'Navigatie', link: './componenten/navigatie/', assignedTo: 'Mokhtar' },
	{ label: 'Reclame', link: './componenten/reclame/', assignedTo: '-' }
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