const lessons = {};

const ChapterService = {
	findAll() {
		return fetch("http://localhost:3000/api/book/maths")
			.then((res) => res.json())
			.then((res) => res.response);
	},

	async getSectionForChapter(chapterId) {
		const getSection = () =>
			fetch(`http://localhost:3000/api/book/maths/section/${chapterId}`)
				.then((res) => res.json())
				.then((res) => res.response[chapterId]);

		if (lessons[chapterId]) {
			getSection().then((section) => {
				lessons[chapterId] = section;
			});

			return lessons[chapterId];
		}

		lessons[chapterId] = await getSection();

		return lessons[chapterId];
	},
};

export default ChapterService;
