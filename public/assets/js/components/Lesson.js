import { renderComponent } from "../utils/renderComponent.js";

function render(parent, props) {
	const { chapter, lesson } = props;
	const component = renderComponent("lesson", parent);

	const title = component.element.querySelector(".title");
	title.innerText = `${chapter.sequenceNO}.${lesson.sequenceNO} ${lesson.title}`;

	const status = component.element.querySelector(".status");
	status.innerText = lesson.status;

	return component;
}

const Lesson = { render };
export default Lesson;
