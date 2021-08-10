export function renderComponent(name, parent) {
	const template = document.querySelector(`template[data-name=${name}]`);
	const child = template.content.firstElementChild.cloneNode(true);
	parent.appendChild(child);

	return {
		remove() {
			parent.removeChild(child);
		},

		element: child,
	};
}
