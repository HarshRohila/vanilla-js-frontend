import ChapterService from "../services/chapter.js";
import { renderComponent } from "../utils/renderComponent.js";
import Chapter from "./chapter.js";
import LessonsList from "./LessonssList.js";

function render(parent) {
	const loadingComponent = renderComponent("loading", parent);

	const renderedLessons = {};

	ChapterService.findAll().then((chapters) => {
		loadingComponent.remove();

		const { element: listElement } = renderComponent("chapters-list", parent);

		chapters.sort((first, sec) => first.sequenceNO - sec.sequenceNO);
		chapters.forEach((chapter, chapterIndex) => {
			const { element } = Chapter.render(listElement, { chapter });

			if (chapter.status === "COMPLETE") return;

			const lessonsContainer = element.querySelector(".lessons-container");
			const chapterName = element.querySelector(".name");
			chapterName.addEventListener("click", () => {
				if (!renderedLessons[chapterIndex]) {
					renderedLessons[chapterIndex] = LessonsList.render(lessonsContainer, {
						chapter,
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
	});
}

const ChaptersList = { render };
export default ChaptersList;
