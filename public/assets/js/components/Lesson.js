import { renderComponent } from "../utils/renderComponent.js";

function render(parent, props) {
	const component = renderComponent("lesson", parent);

	const title = component.element.querySelector(".title");
	title.innerText = props.title;

	return component;
}

const Lesson = { render };
export default Lesson;
