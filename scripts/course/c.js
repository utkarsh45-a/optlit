
// Function to handle tab switching
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

// Define arrays for each chapter's content type
const chapters = [
    {
        title: "Chapter 1: Introduction to C",
        content: "This chapter introduces you to the C programming language, its history, and its applications.",
        code: `#include <stdio.h>\n\nint main() {\n  printf("Hello, World!");\n  return 0;\n}`,
    },
    {
        title: "Chapter 2: Data Types and Variables",
        content: "This chapter covers the basic data types in C, including integers, floats, and characters. You will also learn how to declare and use variables.",
        code: `#include <stdio.h>\n\nint main() {\n  int x = 10;\n  float y = 3.14;\n  char z = 'A';\n  printf("%d %f %c", x, y, z);\n  return 0;\n}`,
    },
    {
        title: "Chapter 3: Control Flow",
        content: "Learn how to control the flow of a C program using if-else conditions, loops, and switch statements. These are essential concepts for building dynamic programs.",
        code: `#include <stdio.h>\n\nint main() {\n  int x = 10;\n  if(x > 5) {\n    printf("x is greater than 5");\n  } else {\n    printf("x is less than or equal to 5");\n  }\n  return 0;\n}`,
    },
    {
        title: "Chapter 4: Functions",
        content: "This chapter introduces functions in C, explaining how to define and call them. Functions help to modularize code and make it reusable.",
        code: `#include <stdio.h>\n\nvoid greet() {\n  printf("Hello from a function!\\n");\n}\n\nint main() {\n  greet();\n  return 0;\n}`
    },
    {
        title: "Chapter 5: Arrays and Strings",
        content: "Learn about arrays and strings in C, which allow you to store multiple values in a single variable. This chapter covers array declaration, initialization, and basic operations.",
        code: `#include <stdio.h>\n\nint main() {\n  int arr[5] = {1, 2, 3, 4, 5};\n  for(int i = 0; i < 5; i++) {\n    printf("%d ", arr[i]);\n  }\n  char str[] = "Hello, World!";\n  printf("\\n%s", str);\n  return 0;\n}`
    }, {
        title: "chapter 6:",
        content: "",
        code: ""
    }
];

//logic for sidebar 
const chapterList = document.querySelector("#chapter-list")
chapters.forEach((chapter, index) => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.setAttribute("data-chapter", index)
    a.innerText = chapter.title;
    li.appendChild(a)
    chapterList.appendChild(li)
})

const practiceQuestions = [
    {
        chapterIndex: 0,
        questions: [
            {
                question: "Write a program that prints 'Hello, World!'",
                solution: `#include <stdio.h>\n\nint main() {\n  printf("Hello, World!");\n  return 0;\n}`
            },
            {
                question: "Create a program to add two numbers provided by the user.",
                solution: `#include <stdio.h>\n\nint main() {\n  int a, b;\n  printf("Enter two numbers: ");\n  scanf("%d %d", &a, &b);\n  printf("Sum: %d", a + b);\n  return 0;\n}`
            }
        ]
    },
    {
        chapterIndex: 1,
        questions: [
            {
                question: "Write a program that declares an integer, a float, and a char, and prints them.",
                solution: `#include <stdio.h>\n\nint main() {\n  int x = 10;\n  float y = 3.14;\n  char z = 'A';\n  printf("%d %f %c", x, y, z);\n  return 0;\n}`
            },
            {
                question: "Write a program to calculate the area of a rectangle given its length and width.",
                solution: `#include <stdio.h>\n\nint main() {\n  float length, width;\n  printf("Enter length and width: ");\n  scanf("%f %f", &length, &width);\n  printf("Area: %f", length * width);\n  return 0;\n}`
            }
        ]
    },
    {
        chapterIndex: 2,
        questions: [
            {
                question: "Write a program to check if a number is even or odd using if-else.",
                solution: `#include <stdio.h>\n\nint main() {\n  int num;\n  printf("Enter a number: ");\n  scanf("%d", &num);\n  if(num % 2 == 0) {\n    printf("Even");\n  } else {\n    printf("Odd");\n  }\n  return 0;\n}`
            },
            {
                question: "Create a program that uses a for loop to print numbers from 1 to 10.",
                solution: `#include <stdio.h>\n\nint main() {\n  for(int i = 1; i <= 10; i++) {\n    printf("%d\\n", i);\n  }\n  return 0;\n}`
            }
        ]
    },
    {
        chapterIndex: 3, // Chapter 4: Functions
        questions: [
            {
                question: "Write a program with a function that takes two integers and returns their sum.",
                solution: `#include <stdio.h>\n\nint add(int a, int b) {\n  return a + b;\n}\n\nint main() {\n  int x = 5, y = 10;\n  printf("Sum: %d", add(x, y));\n  return 0;\n}`
            },
            {
                question: "Create a program with a function that calculates the factorial of a number provided by the user.",
                solution: `#include <stdio.h>\n\nint factorial(int n) {\n  if(n == 0) return 1;\n  return n * factorial(n - 1);\n}\n\nint main() {\n  int num;\n  printf("Enter a number: ");\n  scanf("%d", &num);\n  printf("Factorial: %d", factorial(num));\n  return 0;\n}`
            }
        ]
    },
    {
        chapterIndex: 4, // Chapter 5: Arrays and Strings
        questions: [
            {
                question: "Write a program to store 5 integers in an array and print them using a loop.",
                solution: `#include <stdio.h>\n\nint main() {\n  int arr[5] = {1, 2, 3, 4, 5};\n  for(int i = 0; i < 5; i++) {\n    printf("%d ", arr[i]);\n  }\n  return 0;\n}`
            },
            {
                question: "Create a program that takes a string from the user and prints it in reverse.",
                solution: `#include <stdio.h>\n#include <string.h>\n\nint main() {\n  char str[100];\n  printf("Enter a string: ");\n  scanf("%s", str);\n  for(int i = strlen(str) - 1; i >= 0; i--) {\n    printf("%c", str[i]);\n  }\n  return 0;\n}`
            }
        ]
    }

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
        notes: [
            "In C, there are different types of variables such as int, float, char, etc.",
            "Variables store data in memory, and their type determines how much space is allocated.",
            "C allows you to use operators to manipulate variables (e.g., addition, subtraction, etc.)."
        ]
    },
    {
        chapterIndex: 2,
        notes: [
            "Control flow is an essential concept in programming, determining the order in which statements are executed.",
            "C provides different control flow statements like if-else, switch, for, while, and do-while.",
            "Mastering control flow is crucial for building decision-based and repetitive programs."
        ]
    }
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
        articles: [
            "Understanding Data Types in C",
            "How Variables Work in C",
            "Introduction to C Operators"
        ]
    },
    {
        chapterIndex: 2,
        articles: [
            "Mastering Control Flow in C",
            "How to Use Loops in C Efficiently",
            "Advanced If-Else and Switch Statements"
        ]
    }
];


// Select chapter links and display content accordingly
const chapterLinks = document.querySelectorAll('#chapter-list a');
const chapterTitle = document.getElementById('chapter-title');
const chapterContent = document.getElementById('chapter-content');
const chapterCode = document.getElementById('chapter-code');
const practiceQuestionsList = document.getElementById('practice-questions-list');
const notesList = document.getElementById('notes-list');
const articlesList = document.getElementById('articles-list');

let currentChapterIndex = 0;

// Load content for selected chapter
function loadChapterContent(index) {
    const chapter = chapters[index];
    chapterTitle.textContent = chapter.title;
    chapterContent.textContent = chapter.content;
    chapterCode.textContent = chapter.code.trim();

    //add active class in side bar chaptername
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

// Set event listeners for chapter links
chapterLinks.forEach((link, index) => {
    link.addEventListener('click', () => {
        loadChapterContent(index);
        currentChapterIndex = index;
    });
});

// Load the first chapter by default
loadChapterContent(currentChapterIndex);


