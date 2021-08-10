import ChapterService from "../services/chapter.js";
import { renderComponent } from "../utils/renderComponent.js";
import Lesson from "./Lesson.js";

function render(parent, props) {
	let renderedComponent = { component: renderComponent("loading", parent) };

	ChapterService.getSectionForChapter(props.chapterId).then((lessons) => {
		renderedComponent.component.remove();

		const lessonsList = renderComponent("lessons-list", parent);
		renderedComponent.component = lessonsList;

		lessons.forEach((lesson, lessonIndex) => {
			Lesson.render(lessonsList.element, { title: lesson.title });
		});
	});

	return renderedComponent;
}

const LessonsList = { render };
export default LessonsList;
