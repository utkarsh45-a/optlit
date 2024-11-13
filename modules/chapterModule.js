
// Function to handle tab switchingg
export function handleTabSwitching() {
	const tabs = document.querySelectorAll('.tabs ul li');
	const contents = document.querySelectorAll('.content');

	tabs.forEach((tab, index) => {
		tab.addEventListener('click', () => {
			tabs.forEach(tab => tab.classList.remove('active'));
			tab.classList.add('active');

			contents.forEach(content => content.classList.remove('active-content'));
			contents[index].classList.add('active-content');
		});
	});
}

// Function to render chapters in the sidebar
export function renderChapters(chapters) {
	const chapterList = document.querySelector("#chapter-list");

	chapters.forEach((chapter, index) => {
		const li = document.createElement("li");
		const a = document.createElement("a");
		a.setAttribute("data-chapter", index);
		a.innerHTML = chapter.title;
		li.appendChild(a);
		chapterList.appendChild(li);
	});
}

// Function to load content for a selected chapter
export function loadChapterContent(
	index,
	chapters,
	practiceQuestions,
	notes,
	articles
) {
	const chapterTitle = document.getElementById('chapter-title');
	const chapterContent = document.getElementById('chapter-content');
	const chapterCode = document.getElementById('chapter-code');
	const practiceQuestionsList = document.getElementById('practice-questions-list');
	const notesList = document.getElementById('notes-list');
	const articlesList = document.getElementById('articles-list');
	const chapterLinks = document.querySelectorAll('#chapter-list a');

	const chapter = chapters[index];
	chapterTitle.innerHTML = chapter.title;
	chapterContent.innerHTML = chapter.content;
	chapterCode.textContent = chapter.code.trim();

	// Add active class in sidebar chapter name
	chapterLinks.forEach(link => link.classList.remove('active'));
	chapterLinks[index].classList.add('active');

	// Load practice questions with "Show Solution" feature
	practiceQuestionsList.innerHTML = '';
	practiceQuestions[index].questions.forEach(q => {
		const li = document.createElement('li');
		li.classList.add('practice-question');
		li.innerHTML = `
            <strong>${q.question}</strong><br/>
            <button class="show-solution-btn">Show Solution</button>
            <pre class="solution" style="display: none;"><code>${q.solution}</code></pre>
        `;
		practiceQuestionsList.appendChild(li);

		// Add event listener for "Show Solution" button
		const showSolutionBtn = li.querySelector('.show-solution-btn');
		const solutionBox = li.querySelector('.solution');
		showSolutionBtn.addEventListener('click', () => {
			const isSolutionVisible = solutionBox.style.display === 'block';
			solutionBox.style.display = isSolutionVisible ? 'none' : 'block';
			showSolutionBtn.textContent = isSolutionVisible ? 'Show Solution' : 'Hide Solution';
		});
	});

	// Load notes
	notesList.innerHTML = '';
	notes[index].notes.forEach(note => {
		const li = document.createElement('li');
		li.textContent = note;
		notesList.appendChild(li);
	});

	// Load articles
	articlesList.innerHTML = '';
	articles[index].articles.forEach(article => {
		const li = document.createElement('li');
		li.textContent = article;
		articlesList.appendChild(li);
	});
}

// Function to set event listeners for chapter links
export function setChapterLinkListeners(chapters, practiceQuestions, notes, articles) {
	const chapterLinks = document.querySelectorAll('#chapter-list a');
	let currentChapterIndex = 0;

	chapterLinks.forEach((link, index) => {
		link.addEventListener('click', () => {
			loadChapterContent(index, chapters, practiceQuestions, notes, articles);
			currentChapterIndex = index;
		});
	});

	// Load the first chapter by default
	loadChapterContent(currentChapterIndex, chapters, practiceQuestions, notes, articles);
}
