// JavaScript for switching tabs
const tabs = document.querySelectorAll('.tabs ul li');
const contents = document.querySelectorAll('.content');

// Handle Tab Switching
tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
        tabs.forEach((tab) => tab.classList.remove('active'));
        tab.classList.add('active');

        contents.forEach((content) => content.classList.remove('active-content'));
        contents[index].classList.add('active-content');
    });
});

// Chapter content data (you can add more chapters here)
const chapters = [
    {
        title: "Chapter 1: Introduction to C",
        content: "This chapter introduces you to the C programming language, its history, and its applications.",
        code: `
      #include <stdio.h>

      int main() {
        printf("Hello, World!");
        return 0;
      }
    `
    },
    {
        title: "Chapter 2: Data Types and Variables",
        content: "In this chapter, we will discuss different data types and variables used in C programming.",
        code: `
      int a = 5;
      float b = 3.14;
      char c = 'A';
    `
    },
    {
        title: "Chapter 3: Control Flow",
        content: "This chapter covers control flow statements such as if-else, switch, and loops in C programming.",
        code: `
      for (int i = 0; i < 5; i++) {
        printf("%d ", i);
      }
    `
    }
];

// Handle Chapter Links Click
const chapterLinks = document.querySelectorAll('#chapter-list a');
const chapterTitle = document.getElementById('chapter-title');
const chapterContent = document.getElementById('chapter-content');
const chapterCode = document.getElementById('chapter-code');

let currentChapter = 0; // Default to first chapter

chapterLinks.forEach((link, index) => {
    link.addEventListener('click', () => {
        loadChapter(index);
        updateActiveChapter(index);
    });
});

// Load Chapter Content
function loadChapter(index) {
    currentChapter = index; // Update the current chapter index
    const chapter = chapters[index];
    chapterTitle.textContent = chapter.title;
    chapterContent.textContent = chapter.content;
    chapterCode.textContent = chapter.code.trim();
    updateActiveChapter(index);
}

// Highlight the active chapter in the sidebar
function updateActiveChapter(index) {
    chapterLinks.forEach((link, i) => {
        if (i === index) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// Load the default (first) chapter
loadChapter(0);

// Next/Previous Chapter Buttons
document.getElementById('prev-chapter').addEventListener('click', () => {
    if (currentChapter > 0) {
        loadChapter(currentChapter - 1);
    } else {
        alert('This is the first chapter.');
    }
});

document.getElementById('next-chapter').addEventListener('click', () => {
    if (currentChapter < chapters.length - 1) {
        loadChapter(currentChapter + 1);
    } else {
        alert('This is the last chapter.');
    }
});