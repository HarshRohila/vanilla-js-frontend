import { renderComponent } from "../utils/renderComponent.js";

function render(parent, props) {
	const component = renderComponent("chapter", parent);

	const { title, completeCount, childrenCount, status, sequenceNO } =
		props.chapter;

	if (status === "COMPLETE") {
		component.element.classList.add("disable");
	}

	const titleElement = component.element.querySelector(".title");
	titleElement.innerText = `${sequenceNO}. ${title}`;

	const progress = component.element.querySelector(".progress");
	progress.innerText = status ? status : `${completeCount}/${childrenCount}`;

	return component;
}

const Chapter = { render };
export default Chapter;
