const questionBank = [
    { question: "What is the correct syntax to output 'Hello World' in C?", options: ["echo 'Hello World';", "print('Hello World');", "printf(\"Hello World\");", "Console.WriteLine(\"Hello World\");"], answer: "printf(\"Hello World\");" },
    { question: "Which of the following is a correct variable declaration in C?", options: ["int 1x;", "float x = 2.5;", "string name;", "num value = 10;"], answer: "float x = 2.5;" },
    { question: "What is the size of an `int` in C (in most systems)?", options: ["2 bytes", "4 bytes", "8 bytes", "1 byte"], answer: "4 bytes" },
    { question: "Which header file is required for using `printf()` and `scanf()` functions?", options: ["stdlib.h", "conio.h", "stdio.h", "math.h"], answer: "stdio.h" },
    { question: "What is the index of the first element in a C array?", options: ["1", "0", "-1", "Depends on compiler"], answer: "0" },
    { question: "Which of the following is used to comment a single line in C?", options: ["// comment", "# comment", "/* comment */", "-- comment"], answer: "// comment" },
    { question: "Which loop is guaranteed to execute at least once?", options: ["for loop", "while loop", "do-while loop", "foreach loop"], answer: "do-while loop" },
    { question: "Which operator is used to get the address of a variable?", options: ["*", "&", "#", "%"], answer: "&" },
    { question: "What will `sizeof(char)` return?", options: ["1", "2", "4", "Depends on compiler"], answer: "1" },
    { question: "What is a pointer in C?", options: ["A variable that stores data", "A variable that stores address", "An operator", "A function"], answer: "A variable that stores address" },
    { question: "Which function is used to allocate memory dynamically in C?", options: ["alloc()", "malloc()", "memory()", "new()"], answer: "malloc()" },
    { question: "Which keyword is used to define a constant in C?", options: ["static", "constant", "define", "#define"], answer: "#define" },
    { question: "What is the output of `5/2` in C?", options: ["2", "2.5", "2.0", "Error"], answer: "2" },
    { question: "Which function is used to read a character from the console?", options: ["getchar()", "read()", "input()", "get()"], answer: "getchar()" },
    { question: "Which keyword is used to exit a loop?", options: ["continue", "break", "return", "exit"], answer: "break" },
    { question: "Which operator is used to compare two values?", options: ["=", "==", "!=", "==="], answer: "==" },
    { question: "Which data type is used to store decimal numbers in C?", options: ["int", "char", "float", "void"], answer: "float" },
    { question: "What does `NULL` represent in C?", options: ["0", "An empty string", "An undefined variable", "A pointer that doesn’t point anywhere"], answer: "A pointer that doesn’t point anywhere" },
    { question: "Which of the following is not a valid storage class in C?", options: ["auto", "register", "static", "mutable"], answer: "mutable" },
    { question: "What is the extension of C source files?", options: [".java", ".c", ".cpp", ".py"], answer: ".c" }
];



function randomquestion() {
    const data = new Set()
    while (data.size != 10) {
        const index = Math.floor(Math.random() * 20);
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