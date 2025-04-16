const questionBank = [
    { question: "What does HTML stand for?", options: ["HyperText Markup Language", "HyperText Markdown Language", "HyperTransfer Markup Language", "HighText Markup Language"], answer: "HyperText Markup Language" },
    { question: "Which tag is used for inserting an image in HTML?", options: ["<img>", "<image>", "<src>", "<picture>"], answer: "<img>" },
    { question: "Which HTML attribute is used to define inline styles?", options: ["class", "style", "id", "font"], answer: "style" },
    { question: "What does CSS stand for?", options: ["Color Style Sheets", "Creative Style Sheets", "Cascading Style Sheets", "Computer Style Sheets"], answer: "Cascading Style Sheets" },
    { question: "Which property is used to change the background color in CSS?", options: ["color", "bgcolor", "background-color", "background"], answer: "background-color" },
    { question: "Which CSS property controls text size?", options: ["font-style", "text-size", "font-size", "text-style"], answer: "font-size" },
    { question: "What does DOM stand for?", options: ["Document Object Model", "Data Object Management", "Document Order Model", "Display Object Model"], answer: "Document Object Model" },
    { question: "Which symbol is used for ID selectors in CSS?", options: ["#", ".", "!", "&"], answer: "#" },
    { question: "Which symbol is used for class selectors in CSS?", options: [".", "#", "!", "$"], answer: "." },
    { question: "Which tag is used to link an external CSS file?", options: ["<link>", "<css>", "<style>", "<script>"], answer: "<link>" },
    { question: "What is the default method for form submission in HTML?", options: ["GET", "POST", "PUT", "DELETE"], answer: "GET" },
    { question: "Which input type is used for email in HTML5?", options: ["text", "email", "mail", "input"], answer: "email" },
    { question: "Which HTML tag is used to define a table row?", options: ["<td>", "<tr>", "<th>", "<table>"], answer: "<tr>" },
    { question: "What is the purpose of the <meta> tag?", options: ["Link CSS", "Add images", "Provide metadata", "Embed JavaScript"], answer: "Provide metadata" },
    { question: "Which tag is used to create hyperlinks?", options: ["<a>", "<link>", "<href>", "<hyper>"], answer: "<a>" },
    { question: "What does JavaScript primarily add to a webpage?", options: ["Structure", "Style", "Functionality", "SEO"], answer: "Functionality" },
    { question: "Which keyword is used to declare a variable in JavaScript?", options: ["var", "int", "let", "Both var and let"], answer: "Both var and let" },
    { question: "Which method can be used to display data in the console?", options: ["console.print()", "log.console()", "console.log()", "display()"], answer: "console.log()" },
    { question: "Which JavaScript method adds a new element to an array?", options: ["push()", "pop()", "add()", "insert()"], answer: "push()" },
    { question: "Which tag is used to include JavaScript code in HTML?", options: ["<js>", "<script>", "<javascript>", "<code>"], answer: "<script>" },
    { question: "What is the correct syntax for comments in JavaScript?", options: ["<!-- comment -->", "// comment", "/* comment */", "Both B and C"], answer: "Both B and C" },
    { question: "Which company developed JavaScript?", options: ["Microsoft", "Google", "Netscape", "Apple"], answer: "Netscape" },
    { question: "What does JSON stand for?", options: ["JavaScript Object Notation", "Java Syntax Object Notation", "JavaScript Online Notation", "Java Serialized Object Notation"], answer: "JavaScript Object Notation" },
    { question: "Which API is used to fetch data in modern JavaScript?", options: ["XMLHttpRequest", "fetch()", "getData()", "request()"], answer: "fetch()" },
    { question: "Which event occurs when a user clicks on an HTML element?", options: ["onhover", "onchange", "onclick", "onpress"], answer: "onclick" },
    { question: "Which layout technique uses 'flex' and 'justify-content'?", options: ["Grid", "Table", "Flexbox", "Float"], answer: "Flexbox" },
    { question: "What is the use of the z-index property?", options: ["Stacking elements", "Changing text color", "Setting height", "Aligning elements"], answer: "Stacking elements" },
    { question: "Which HTML5 tag is used for audio content?", options: ["<sound>", "<media>", "<audio>", "<music>"], answer: "<audio>" },
    { question: "Which HTML element is used to define navigation links?", options: ["<nav>", "<link>", "<menu>", "<section>"], answer: "<nav>" },
    { question: "What does SEO stand for?", options: ["Search Engine Optimization", "Site External Optimization", "Simple Engine Operation", "Standard Execution Option"], answer: "Search Engine Optimization" },
    { question: "Which CSS unit is relative to the font size of the element?", options: ["px", "em", "%", "vh"], answer: "em" },
    { question: "Which attribute is used in HTML to make a field mandatory?", options: ["required", "validate", "mandatory", "mustfill"], answer: "required" },
    { question: "Which tag is used for defining a dropdown menu?", options: ["<dropdown>", "<list>", "<select>", "<option>"], answer: "<select>" },
    { question: "Which JavaScript keyword is used to create a function?", options: ["define", "function", "create", "func"], answer: "function" },
    { question: "Which HTML tag defines a division or a section?", options: ["<span>", "<div>", "<section>", "<article>"], answer: "<div>" },
    { question: "What is the full form of API?", options: ["Application Programming Interface", "Advanced Programming Interface", "Application Protocol Interface", "Applied Program Interaction"], answer: "Application Programming Interface" },
    { question: "Which tag is used to embed video content?", options: ["<media>", "<video>", "<embed>", "<movie>"], answer: "<video>" },
    { question: "Which method adds a class to an HTML element in JavaScript?", options: ["element.classList.add()", "element.addClass()", "element.setClass()", "element.appendClass()"], answer: "element.classList.add()" },
    { question: "Which tag defines the largest heading?", options: ["<h1>", "<heading>", "<head>", "<title>"], answer: "<h1>" },
    { question: "Which protocol is used for secure web communication?", options: ["HTTP", "HTTPS", "FTP", "SSH"], answer: "HTTPS" },
    { question: "What does the 'responsive design' mean?", options: ["Fast loading", "SEO friendly", "Adapts to different screen sizes", "Dynamic styling"], answer: "Adapts to different screen sizes" },
    { question: "What does the viewport meta tag control?", options: ["Font size", "Page loading speed", "Responsive layout", "Image resolution"], answer: "Responsive layout" },
    { question: "Which of the following is a frontend framework?", options: ["Node.js", "Express", "React", "MongoDB"], answer: "React" },
    { question: "Which tag is used to create an ordered list?", options: ["<ul>", "<ol>", "<li>", "<list>"], answer: "<ol>" },
    { question: "Which of the following is used to style web pages?", options: ["HTML", "CSS", "JavaScript", "PHP"], answer: "CSS" },
    { question: "Which tool compiles SCSS to CSS?", options: ["Webpack", "Babel", "Sass", "Parcel"], answer: "Sass" },
    { question: "What is Bootstrap primarily used for?", options: ["Backend development", "Database handling", "Responsive design", "API development"], answer: "Responsive design" },
    { question: "Which attribute defines alternative text for images?", options: ["src", "title", "alt", "description"], answer: "alt" },
    { question: "Which method is used to remove an element in JavaScript?", options: ["element.remove()", "element.delete()", "element.destroy()", "element.erase()"], answer: "element.remove()" },
    { question: "What does 'this' keyword refer to in JavaScript?", options: ["Current function", "Global object", "Current object", "Parent class"], answer: "Current object" }
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