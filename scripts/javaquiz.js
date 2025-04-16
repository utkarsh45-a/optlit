const questionBank = [
    {
        question: "Which of the following is not a Java feature?",
        options: ["Object-oriented", "Use of pointers", "Portable", "Dynamic and Extensible"],
        answer: "Use of pointers"
      },
      {
        question: "Which keyword is used for inheritance in Java?",
        options: ["this", "extent", "extends", "inherit"],
        answer: "extends"
      },
      {
        question: "Which of these is not a primitive data type in Java?",
        options: ["int", "Float", "boolean", "char"],
        answer: "Float"
      },
      {
        question: "What is the size of a float and double in Java?",
        options: ["32 and 64", "64 and 32", "32 and 32", "64 and 64"],
        answer: "32 and 64"
      },
      {
        question: "Which of the following is used to find and fix bugs in Java programs?",
        options: ["JVM", "JRE", "JDK", "JDB"],
        answer: "JDB"
      },
      {
        question: "Which of these cannot be used for a variable name in Java?",
        options: ["identifier", "keyword", "variable", "none of the above"],
        answer: "keyword"
      },
      {
        question: "What is the default value of a local variable in Java?",
        options: ["null", "0", "Depends on the data type", "No default value for local variables"],
        answer: "No default value for local variables"
      },
      {
        question: "Which of the following is a marker interface?",
        options: ["Runnable", "Remote", "Readable", "Result"],
        answer: "Remote"
      },
      {
        question: "Which of the following is not a Java keyword?",
        options: ["static", "Boolean", "void", "private"],
        answer: "Boolean"
      },
      {
        question: "Which exception is thrown when a negative array size is declared?",
        options: ["NegativeArraySizeException", "NullPointerException", "ArrayIndexOutOfBoundsException", "IllegalArgumentException"],
        answer: "NegativeArraySizeException"
      },
      {
        question: "Which of these is not a type of constructor in Java?",
        options: ["Default constructor", "Parameterized constructor", "Copy constructor", "Friend constructor"],
        answer: "Friend constructor"
      },
      {
        question: "Which of the following is a valid declaration of an abstract class?",
        options: ["abstract class A {}", "class abstract A {}", "abstract A class {}", "None of the above"],
        answer: "abstract class A {}"
      },
      {
        question: "Which of the following is not a valid access modifier in Java?",
        options: ["public", "private", "protected", "package"],
        answer: "package"
      },
      {
        question: "Which of the following is true about interfaces in Java?",
        options: ["Interfaces can have constructors", "Interfaces can contain instance fields", "Interfaces can contain default methods", "Interfaces cannot extend other interfaces"],
        answer: "Interfaces can contain default methods"
      },
      {
        question: "Which of the following is used to achieve runtime polymorphism in Java?",
        options: ["Method overloading", "Method overriding", "Constructor overloading", "None of the above"],
        answer: "Method overriding"
      },
      {
        question: "Which of these is not a feature of Java?",
        options: ["Platform independent", "Object-oriented", "Use of pointers", "Dynamic"],
        answer: "Use of pointers"
      },
      {
        question: "Which of the following is not a wrapper class in Java?",
        options: ["Integer", "Float", "Character", "String"],
        answer: "String"
      },
      {
        question: "Which of the following is used to create an object in Java?",
        options: ["new", "create", "make", "object"],
        answer: "new"
      },
      {
        question: "Which of the following is not a type of inheritance in Java?",
        options: ["Single", "Multiple", "Multilevel", "Hierarchical"],
        answer: "Multiple"
      },
      {
        question: "Which of the following is used to handle exceptions in Java?",
        options: ["try-catch", "throw", "throws", "All of the above"],
        answer: "All of the above"
      },
      {
        question: "Which of the following is not a loop structure in Java?",
        options: ["for", "while", "do-while", "repeat-until"],
        answer: "repeat-until"
      },
      {
        question: "Which of the following is not a valid statement in Java?",
        options: ["int x = 10;", "float y = 20.0f;", "boolean b = true;", "char c = 'ab';"],
        answer: "char c = 'ab';"
      },
      {
        question: "Which of the following is not a valid keyword in Java?",
        options: ["class", "interface", "extends", "implement"],
        answer: "implement"
      },
      {
        question: "Which of the following is not a valid identifier in Java?",
        options: ["_myVar", "$myVar", "myVar1", "1myVar"],
        answer: "1myVar"
      },
      {
        question: "Which of the following is not a valid data type in Java?",
        options: ["int", "float", "double", "real"],
        answer: "real"
      },
      {
        question: "Which of the following is not a valid operator in Java?",
        options: ["+", "-", "*", "**"],
        answer: "**"
      },
      {
        question: "Which of the following is not a valid control statement in Java?",
        options: ["break", "continue", "exit", "return"],
        answer: "exit"
      },
      {
        question: "Which of the following is not a valid method of the String class in Java?",
        options: ["length()", "charAt()", "substring()", "getChar()"],
        answer: "getChar()"
      },
      {
        question: "Which of the following is not a valid exception in Java?",
        options: ["IOException", "SQLException", "ClassNotFoundException", "FileNotFound"],
        answer: "FileNotFound"
      },
      {
        question: "Which of the following is not a valid collection class in Java?",
        options: ["ArrayList", "LinkedList", "HashMap", "Tree"],
        answer: "Tree"
      },
      {
        question: "Which of the following is not a valid thread state in Java?",
        options: ["New", "Runnable", "Running", "Terminated"],
        answer: "Running"
      }
];



function randomquestion() {
    const data = new Set()
    while (data.size != 10) {
        const index = Math.floor(Math.random() * questionBank.length);
        data.add(questionBank[index]);
    }
    return [...data];
}
const next = document.createElement('button');
next.type = 'button'
next.className = "next-btn"
next.textContent = "Next";

const button = document.createElement('button');
button.type = 'submit'
button.className = "submit-btn"
button.textContent = "Submit";

const form = document.querySelector('form');

const original_answer = {};
let problem = randomquestion();

// console.log(problem.length)
// console.log(problem[0].question)
let index = 0;
let score = 0;
const div_element = document.createElement('div');
function createquestion() {



    div_element.className = 'question';
    original_answer[`q${index + 1}`] = problem[index]['answer'];
    console.log(original_answer)

    const para = document.createElement('p');
    para.textContent = `${index + 1}. ${problem[index]['question']}`;
    div_element.appendChild(para);

    problem[index].options.forEach((option) => {
        const label = document.createElement('label');

        const input = document.createElement('input');
        input.type = 'radio';
        input.name = `q${index + 1}`;
        input.value = option;
        label.appendChild(input);
        label.appendChild(document.createTextNode(option));
        div_element.appendChild(label);
        div_element.appendChild(document.createElement('br'));

        input.addEventListener("change",()=>{
                if(input.checked){
                    if(input.value==original_answer[`q${index + 1}`])
                        score++;
                        console.log(score)
                }
               })

    });
    form.appendChild(div_element);
   



    start.remove();



    if (index <= 8) {
        form.append(next)
        // console.log(index)
    }
    else {
        next.remove();
       
        form.appendChild(button);
    }
}

const start = document.getElementById("startquiz");
start.addEventListener("click", (e) => {
    createquestion();

})




next.addEventListener("click", (e) => {
    e.preventDefault();
    div_element.innerText = "";
    index++;
    createquestion();




})
form.addEventListener('submit', (e) => {
    e.preventDefault();

    const result = document.getElementById("out")
    Object.assign(result.style, {
        width: "80%",
        padding: "10px",
        background: "#007bff",
        color: "white",
        fontSize: "2rem",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        margin: "10rem 3rem 10rem 3rem", 
        textAlign: "center"
      });

      div_element.innerText = "";
      form.remove()
      if(score==10)
   {
     result.innerText = `🥳 😎 ${score} out of 10 is correct 👈`;
    }

    if(score<10&&score>=6){
        result.innerText = ` 😊 🎉 ${score} out of 10 is correct 👈`;
    }
    if(score>=0&&score<=5){
        result.innerText = ` 😢 😔 ${score} out of 10 is correct 👈`;
    }

    form.reset();

})