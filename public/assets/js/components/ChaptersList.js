import ChapterService from "../services/chapter.js";
import { renderComponent } from "../utils/renderComponent.js";
import Chapter from "./chapter.js";
import LessonsList from "./LessonssList.js";

function render(parent) {
	const loadingComponent = renderComponent("loading", parent);

	const renderedLessons = {};

	ChapterService.findAll().then((chapters) => {
		const { element: listElement } = renderComponent("chapters-list", parent);

		console.log(chapters);
		chapters.sort((first, sec) => first.sequenceNO - sec.sequenceNO);
		chapters.forEach((chapter, chapterIndex) => {
			const { element } = Chapter.render(listElement, { chapter });

			element.addEventListener("click", () => {
				if (!renderedLessons[chapterIndex]) {
					renderedLessons[chapterIndex] = LessonsList.render(element, {
						chapterId: chapter.id,
					});
					element.classList.add("active");
				} else {
					const { component } = renderedLessons[chapterIndex];
					renderedLessons[chapterIndex] = false;
					element.classList.remove("active");
					component.remove();
				}
			});
		});

		loadingComponent.remove();
	});
}

const ChaptersList = { render };
export default ChaptersList;
