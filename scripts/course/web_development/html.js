import { handleTabSwitching, renderChapters, setChapterLinkListeners } from "/minorProject/modules/chapterModule.js";

// Define arrays for each chapter's content type
const chapters = [
	{
		title: "Chapter 1: Introduction to HTML",
		content: ``,
		code: ``,
	},
	{
		title: "Chapter 2: ",
		content: ".",
		code: ``,
	}
];



const practiceQuestions = [
	{
		chapterIndex: 0,
		questions: [
			{
				question: "",
				solution: ``
			},
			{
				question: "",
				solution: ``
			}
		]
	},
	{
		chapterIndex: 1,
		questions: [
			{
				question: "",
				solution: ``
			},
			{
				question: "",
				solution: ``
			}
		]
	},
	{
		chapterIndex: 2,
		questions: [
			{
				question: "",
				solution: ``
			},
			{
				question: "",
				solution: ``
			}
		]
	},
];

const notes = [
	{
		chapterIndex: 0,
		notes: [
			"C is a general-purpose programming language.",
			"It was created by Dennis Ritchie at Bell Labs.",
			"C is used for system and application software."
		]
	},
	{
		chapterIndex: 1,
		notes: ["", ""]
	},
];

const articles = [
	{
		chapterIndex: 0,
		articles: [
			"The History of C Programming",
			"Understanding Memory Management in C",
			"Best Practices for Writing Clean C Code"
		]
	},
	{
		chapterIndex: 1,
		articles: ["", ""]
	},
	{
		chapterIndex: 2,
		articles: ["", ""]
	}
];

window.addEventListener("DOMContentLoaded", () => {
	// Initialize tab switching functionality
	handleTabSwitching();

	// Render chapters in the sidebar
	renderChapters(chapters);

	// Set chapter link listeners
	setChapterLinkListeners(chapters, practiceQuestions, notes, articles);
})
