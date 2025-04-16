const questionBank = [
    { question: "Which of the following is not a function of an operating system?", options: ["Memory management", "File management", "Compiler design", "Process management"], answer: "Compiler design" },
    { question: "Which of the following is a type of operating system?", options: ["Batch", "Time-sharing", "Real-time", "All of the above"], answer: "All of the above" },
    { question: "What is a kernel?", options: ["A shell program", "Core of the operating system", "Command line interface", "Hardware driver"], answer: "Core of the operating system" },
    { question: "What is a process in an operating system?", options: ["A task manager", "A program in execution", "A thread", "None of these"], answer: "A program in execution" },
    { question: "What is a thread?", options: ["A lightweight process", "A separate program", "A memory unit", "A file"], answer: "A lightweight process" },
    { question: "Which memory is used during program execution?", options: ["Cache", "Main Memory", "Secondary Storage", "Virtual Memory"], answer: "Main Memory" },
    { question: "Which of the following is not a state of process?", options: ["Running", "Waiting", "Ready", "Exit Pending"], answer: "Exit Pending" },
    { question: "What causes a page fault?", options: ["A process accesses a valid page", "A page is not found in memory", "Page table error", "Disk crash"], answer: "A page is not found in memory" },
    { question: "Which algorithm avoids starvation?", options: ["FCFS", "Priority Scheduling", "Aging", "Round Robin"], answer: "Aging" },
    { question: "Which of the following is a non-preemptive scheduling algorithm?", options: ["SJF", "Round Robin", "Priority", "Multilevel Queue"], answer: "SJF" },
    { question: "Which of the following uses time quantum?", options: ["FCFS", "SJF", "Round Robin", "Priority Scheduling"], answer: "Round Robin" },
    { question: "What is a critical section?", options: ["A section of memory", "A section of code where shared resources are accessed", "A code which crashes", "None of these"], answer: "A section of code where shared resources are accessed" },
    { question: "Which synchronization tool uses wait and signal?", options: ["Thread", "Semaphore", "Process", "Mutex"], answer: "Semaphore" },
    { question: "Which command is used to list running processes in Unix?", options: ["ls", "ps", "pwd", "kill"], answer: "ps" },
    { question: "Which of the following is not a valid page replacement algorithm?", options: ["FIFO", "LRU", "Optimal", "Scan"], answer: "Scan" },
    { question: "Thrashing is caused by:", options: ["High CPU usage", "Low RAM", "Too many page faults", "Large disk space"], answer: "Too many page faults" },
    { question: "Which of the following best defines deadlock?", options: ["No input", "CPU overload", "Processes waiting indefinitely for resources", "System crash"], answer: "Processes waiting indefinitely for resources" },
    { question: "Which technique is used to avoid deadlock?", options: ["Wait and die", "Banker's Algorithm", "FIFO", "LRU"], answer: "Banker's Algorithm" },
    { question: "Which of the following is used for virtual memory?", options: ["RAM", "ROM", "Hard disk", "Registers"], answer: "Hard disk" },
    { question: "Segmentation is a memory management technique that:", options: ["Divides memory into equal pages", "Uses physical addresses", "Divides memory based on logical divisions", "Ignores protection"], answer: "Divides memory based on logical divisions" },
    { question: "What is the first program that runs on a computer when it starts?", options: ["Operating System", "Shell", "Bootstrap", "BIOS"], answer: "BIOS" },
    { question: "Which component handles process scheduling?", options: ["Kernel", "Compiler", "Shell", "File System"], answer: "Kernel" },
    { question: "Which of the following is not part of process control block (PCB)?", options: ["Process ID", "Program counter", "List of open files", "None of the above"], answer: "None of the above" },
    { question: "Which system call is used to create a new process in UNIX?", options: ["exec()", "create()", "fork()", "init()"], answer: "fork()" },
    { question: "Which system call is used to replace the current process with a new process?", options: ["fork()", "exec()", "exit()", "wait()"], answer: "exec()" },
    { question: "The command used to terminate a process in Unix is:", options: ["stop", "end", "kill", "exit"], answer: "kill" },
    { question: "Which directory structure allows sharing of files?", options: ["Single-level", "Two-level", "Tree", "Acyclic graph"], answer: "Acyclic graph" },
    { question: "Which memory allocation scheme results in external fragmentation?", options: ["Segmentation", "Paging", "Contiguous", "Virtual"], answer: "Contiguous" },
    { question: "Which of the following is NOT a valid disk scheduling algorithm?", options: ["SSTF", "FCFS", "LOOK", "FIFO"], answer: "FIFO" },
    { question: "In round robin scheduling, if time quantum is very large it becomes:", options: ["FCFS", "SJF", "Priority", "Multilevel"], answer: "FCFS" },
    { question: "Which operating system is open source?", options: ["Windows", "Linux", "macOS", "None"], answer: "Linux" },
    { question: "Which OS is used in mobile devices?", options: ["MS-DOS", "Unix", "Android", "Linux only"], answer: "Android" },
    { question: "Which file system is used in Windows?", options: ["ext3", "FAT", "EXT4", "NTFS"], answer: "NTFS" },
    { question: "A file that keeps growing while a process runs is called:", options: ["Log file", "Executable", "Object file", "Kernel file"], answer: "Log file" },
    { question: "What is spooling?", options: ["A scheduling method", "Buffered output for devices", "Memory paging", "None"], answer: "Buffered output for devices" },
    { question: "Which command shows current directory in Unix?", options: ["pwd", "ls", "cd", "dir"], answer: "pwd" },
    { question: "Context switching occurs when:", options: ["RAM is full", "A process exits", "CPU switches from one process to another", "Cache is cleared"], answer: "CPU switches from one process to another" },
    { question: "Which one is not a type of real-time OS?", options: ["Hard RTOS", "Soft RTOS", "Firm RTOS", "Time-sharing OS"], answer: "Time-sharing OS" },
    { question: "Which memory stores the page table?", options: ["Main Memory", "Disk", "Registers", "Cache"], answer: "Main Memory" }
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