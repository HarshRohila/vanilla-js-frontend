import ChapterService from "../services/chapter.js";
import { renderComponent } from "../utils/renderComponent.js";
import Lesson from "./Lesson.js";

function render(parent, props) {
	let renderedComponent = { component: renderComponent("loading", parent) };
	const { chapter } = props;

	ChapterService.getSectionForChapter(chapter.id).then((lessons) => {
		renderedComponent.component.remove();

		const lessonsList = renderComponent("lessons-list", parent);
		renderedComponent.component = lessonsList;

		lessons.sort((first, sec) => first.sequenceNO - sec.sequenceNO);
		lessons.forEach((lesson, lessonIndex) => {
			Lesson.render(lessonsList.element, { lesson, chapter });
		});
	});

	return renderedComponent;
}

const LessonsList = { render };
export default LessonsList;
