import { renderComponent } from "../utils/renderComponent.js";

function render(parent, props) {
	const component = renderComponent("chapter", parent);

	const { title, completeCount, childrenCount, status } = props.chapter;
	const titleElement = component.element.querySelector(".title");
	titleElement.innerText = title;

	const progress = component.element.querySelector(".progress");
	progress.innerText = status ? status : `${completeCount}/${childrenCount}`;

	return component;
}

const Chapter = { render };
export default Chapter;
