import { handleTabSwitching, renderChapters, setChapterLinkListeners } from "/minorProject/modules/chapterModule.js";

// Define arrays for each chapter's content type
const chapters = [
    {
        title: "Chapter 1: Introduction to Operating System",
        
        content: `<br><p> <b><h5>1. Introduction to Operating Systems</h5></b></p>

<p>An Operating System (OS) is a software that manages computer hardware and software resources and provides services for computer programs. It acts as an intermediary between users and the hardware of a computer, enabling programs to run efficiently and securely.</p>
<p><br></p>

<p> <b><h5> 2. Basics and Definitions </b></h5></p>

<p> Operating System (OS): It is the system software that controls computer hardware, software, and resources, providing an interface for users and applications.</p>
<p> Examples: Windows, Linux, macOS, Android.</p>
<p><br></p>

<p><b><h5> 3. Types of Operating Systems</b></h5></p>
<br>
<p><b>1. Batch OS:</b></p>
<p>&nbsp; &nbsp; Executes a series of jobs without manual intervention.</p>
<p>&nbsp; &nbsp; Jobs are processed in batches (groups) without interaction.</p>
<p>&nbsp; &nbsp; Example: Early mainframe systems.</p>
<br>
<p><b>2. TimeSharing OS:</b></p>
<p>&nbsp; &nbsp; Allows multiple users to share computer resources simultaneously by switching between tasks quickly.</p>
<p>&nbsp; &nbsp; Provides the illusion of simultaneous execution.</p>
<p>&nbsp; &nbsp; Example: UNIX, Linux.</p>
<br>
<p><b>3. Distributed OS:</b></p>
<p>&nbsp; &nbsp; Manages a group of separate computers that appear as a single system to the user.</p>
<p>&nbsp; &nbsp; Resources are shared across multiple machines.</p>
<p>&nbsp; &nbsp; Example: Google&rsquo;s Android, Hadoop.</p>
<br>
<p><b>4. RealTime OS:</b></p>
<p>&nbsp; &nbsp; Designed to handle realtime tasks that require immediate processing and response.</p>
<p>&nbsp; &nbsp; Often used in systems with strict time constraints (e.g., embedded systems, robotics).</p>
<p>&nbsp; &nbsp; Example: RTOS (RealTime Operating System), VxWorks.</p>

<p><br></p>
<p> <b><h5>4. Operating System Services and System Calls</b></h5></p>
<br>
<p> Operating System Services: These are the functions or features provided by the OS, such as memory management, file handling, process scheduling, and I/O management. They help applications run efficiently.</p>
<p>&nbsp;&nbsp;</p>
<p> System Calls: They are the mechanisms through which user programs request services from the OS. System calls serve as an interface between user space and the kernel.</p>
<p>&nbsp;  Examples of system calls include:</p>
<p>&nbsp; &nbsp;  open() &ndash; Opens a file</p>
<p>&nbsp; &nbsp;  read() &ndash; Reads data from a file</p>
<p>&nbsp; &nbsp;  write() &ndash; Writes data to a file</p>
<p>&nbsp; &nbsp;  fork() &ndash; Creates a new process</p>
<p><br></p>

<p><b><h5> 5. Kernel and User Space</b></h5></p>

<p><b> Kernel:</b></p>
<p>&nbsp;  The core part of the OS, responsible for managing hardware and system resources.</p>
<p>&nbsp;  Runs with the highest privileges and interacts directly with the hardware.</p>
<p>&nbsp;  Examples of kernel tasks: process management, memory management, device handling.</p>
<br>
<p> <b>User Space:</b></p>
<p>&nbsp;  Refers to the memory area where user applications and programs run.</p>
<p>&nbsp;  Programs in user space interact with the kernel through system calls.</p>
<p>&nbsp;  User space has restricted access to the hardware to ensure security and stability.</p>
<p><br></p>
<p></p>
<p><br></p>`,
       
    },
    {
        title: "Chapter 2: Process Management",
        content:`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Process and Threads Concepts</title>
</head>
<body>
    <br><h5>1. Concept of a Process and Threads</h5>
    <p></p>
    <p><strong>Process:</strong> A process is a program in execution. It contains the program code (also known as the text section), current activity (represented by the program counter), a stack (for function calls and local variables), and a heap (for dynamic memory allocation). A process is an independent entity that has its own address space, resources, and execution flow.</p>

    <h5>Process Components:</h5>
     <p></p>
    <ul>
        <li><strong>Program Code:</strong> The instructions of the program.</li>
        <li><strong>Data:</strong> The variables and dynamic data the program uses.</li>
        <li><strong>Stack:</strong> Used for function calls and local variables.</li>
        <li><strong>Heap:</strong> Memory used for dynamically allocated data.</li>
        <li><strong>Process Control Block (PCB):</strong> Stores information about a process such as process ID, program counter, CPU registers, memory management info, and I/O status.</li>
    </ul>

    <p><strong>Thread:</strong> A thread is the smallest unit of execution within a process. A process may have multiple threads, which share the same address space but have separate execution paths, stack space, and program counters. Threads within the same process can share resources like memory but are scheduled and executed independently. This allows processes to perform concurrent tasks.</p>

    <h5>Thread Components:</h5>
     <p></p>
    <ul>
        <li><strong>Thread ID:</strong> Unique identifier for a thread.</li>
        <li><strong>Program Counter:</strong> Tracks the execution of instructions for the thread.</li>
        <li><strong>Registers:</strong> Holds the thread's working data.</li>
        <li><strong>Stack:</strong> Contains function calls and local variables for the thread.</li>
    </ul>
<br>
    <h5>2. Process Scheduling Algorithms</h5>
     <p></p>
    <p>Scheduling algorithms determine the order in which processes or threads are executed. The main goal is to maximize CPU utilization, ensure fairness, and minimize latency.</p>

    <h5>First-Come-First-Served (FCFS):</h5>
    <ul>
        <li><strong>Description:</strong> Processes are scheduled in the order they arrive in the ready queue.</li>
        <li><strong>Pros:</strong> Simple to implement and understand.</li>
        <li><strong>Cons:</strong> It can cause the convoy effect, where a long process delays all shorter processes. It has poor average waiting time.</li>
    </ul>

    <h5>Shortest Job First (SJF):</h5>
    <ul>
        <li><strong>Description:</strong> The process with the shortest execution time is selected for execution next. It can be preemptive (Shortest Remaining Time First, SRTF) or non-preemptive.</li>
        <li><strong>Pros:</strong> Minimizes the average waiting time.</li>
        <li><strong>Cons:</strong> Hard to predict execution times; if not preemptive, long processes can block short ones.</li>
    </ul>

    <h5>Round Robin (RR):</h5>
    <ul>
        <li><strong>Description:</strong> Each process is assigned a fixed time slice (quantum) in a cyclic order. If a process doesn't finish in its time slice, it's placed back in the queue.</li>
        <li><strong>Pros:</strong> Fair and time-sharing. Ensures all processes get CPU time.</li>
        <li><strong>Cons:</strong> The choice of time quantum is crucial. Too small leads to overhead; too large behaves like FCFS.</li>
    </ul>

    <h5>Priority Scheduling:</h5>
    <ul>
        <li><strong>Description:</strong> Each process is assigned a priority, and the process with the highest priority is executed first. Ties can be broken using FCFS or other mechanisms.</li>
        <li><strong>Pros:</strong> Suitable for time-critical applications.</li>
        <li><strong>Cons:</strong> Low priority processes can starve (never get executed). This can be mitigated by aging, where priorities of waiting processes gradually increase.</li>
    </ul>
<br>
    <h5>3. Context Switching</h5>
     <p></p>
    <p>Context Switching is the process of saving the state of a currently running process (or thread) and restoring the state of another process. The context of a process includes the program counter, CPU registers, and memory mappings.</p>
    <ul>
        <li><strong>Why it's needed:</strong> Context switching is necessary for multitasking and sharing CPU resources between multiple processes or threads.</li>
        <li><strong>Overhead:</strong> The process incurs overhead, as the CPU needs to save the current process's state and load the state of the next one. Excessive context switching can lead to performance degradation.</li>
    </ul>

    <h5>Context Switch Steps:</h5>
    <ol>
        <li>Save the state (context) of the currently running process.</li>
        <li>Update the process control block (PCB) with the saved state.</li>
        <li>Load the state (context) of the next process to execute.</li>
        <li>Update the PCB for the new process.</li>
        <li>Transfer control to the new process.</li>
    </ol>
<br>
    <h5>4. Interprocess Communication (IPC)</h5>
     <p></p>
    <p>Interprocess Communication (IPC) refers to mechanisms that allow processes to communicate with each other and synchronize their actions. IPC is necessary because processes in modern operating systems run in isolated address spaces.</p>

    <h5>Types of IPC:</h5>
    <ul>
        <li><strong>Pipes:</strong> A unidirectional communication channel where data written by one process can be read by another.</li>
        <li><strong>Message Queues:</strong> A queue in memory where messages can be placed by one process and retrieved by another, allowing for asynchronous communication.</li>
        <li><strong>Shared Memory:</strong> A region of memory that is mapped into the address space of multiple processes, allowing them to communicate by reading and writing to it.</li>
        <li><strong>Semaphores:</strong> Used for synchronization to control access to shared resources.</li>
        <li><strong>Sockets:</strong> Used for communication between processes that may be on different machines.</li>
    </ul>
<br>
    <h5>5. Deadlocks</h5>
     <p></p>
    <p>A deadlock is a situation where two or more processes are stuck in a circular wait, each waiting for a resource held by another. This results in no process making progress.</p>

    <h5>Conditions for Deadlock (Coffman Conditions):</h5>
    <ul>
        <li><strong>Mutual Exclusion:</strong> At least one resource must be held in a non-shareable mode.</li>
        <li><strong>Hold and Wait:</strong> A process holding at least one resource is waiting for additional resources held by others.</li>
        <li><strong>No Preemption:</strong> Resources cannot be forcibly removed from processes.</li>
        <li><strong>Circular Wait:</strong> A set of processes exists such that each process is waiting for a resource held by the next process in the set.</li>
    </ul>

    <h5>Deadlock Detection:</h5>
    <p>Deadlock detection algorithms can monitor the system and detect cycles in resource allocation graphs, indicating deadlock. Once detected, processes can be aborted or resources preempted to break the deadlock.</p>

    <h5>Deadlock Avoidance:</h5>
    <p>The system dynamically checks the state of resource allocation to ensure that a circular wait cannot occur. One common algorithm is the Banker's Algorithm, which checks if resource allocation leaves the system in a safe state.</p>

    <h5>Deadlock Prevention:</h5>
    <p>By ensuring that one of the Coffman conditions is never met, deadlocks can be prevented:</p>
    <ul>
        <li><strong>Prevent Hold and Wait:</strong> Processes must request all resources at once.</li>
        <li><strong>Prevent Circular Wait:</strong> Ensure that resources are requested in a specific order (resource ordering).</li>
        <li><strong>Prevent Mutual Exclusion:</strong> Not always possible, as some resources cannot be shared (e.g., printers).</li>
    </ul>
    <p><br><p>
</body>
</html>
`,
        
    },
    {
        title: "Chapter 3: Memory Management ",
        content: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Memory Allocation and Concepts</title>
</head>
<body>
    <br><h5>1. Memory Allocation: Contiguous and Non-Contiguous</h5>
    <p></p>
    <p><strong>Contiguous Memory Allocation:</strong> In this method, each process is allocated a single, continuous block of memory. This means the process occupies a set of adjacent memory locations. It’s easy to implement but can lead to fragmentation, where free memory is scattered in small chunks that can’t be used effectively.</p>

    <p><strong>Non-Contiguous Memory Allocation:</strong> Here, a process doesn't need to occupy a single block. Instead, it can be split into chunks that are stored in different places in memory. This method is more flexible and helps avoid fragmentation. It’s commonly used in paging and segmentation.</p>
<br>
    <h5>2. Paging and Segmentation</h5>
     <p></p>
    <p><strong>Paging:</strong> This is a memory management technique where the physical memory is divided into fixed-size blocks called "pages," and the process is also divided into pages. Each page can be placed anywhere in memory. This avoids fragmentation and makes memory management easier.</p>

    <p><strong>Page Table:</strong> A table that keeps track of where each page of a process is stored in memory.</p>

    <p><strong>Segmentation:</strong> Unlike paging, segmentation divides a process into different segments based on logical units, such as code, data, and stack. Each segment can be of a different size. Segmentation makes the memory allocation more flexible and reflects the structure of the program.</p>
<br>
    <h5>3. Virtual Memory Concepts</h5>
     <p></p>
    <p><strong>Virtual Memory:</strong> This is a technique that allows programs to run as if they have access to a large block of continuous memory, even if the physical memory (RAM) is smaller. Virtual memory uses both RAM and disk space to give the illusion of a larger memory. It’s managed through the use of paging or segmentation.</p>

    <p>When the physical memory is full, some parts of a program that are not currently needed are temporarily moved to the disk (called <strong>swap space</strong>) to make room for others.</p>
<br>
    <h5>4. Page Replacement Algorithms (FIFO, LRU, Optimal)</h5>
     <p></p>
    <p>When the physical memory is full, and a new page needs to be loaded, the operating system must decide which page to remove (or replace). These are some common algorithms used to decide which page to replace:</p>

    <h6>FIFO (First-In-First-Out):</h6>
    <p>This algorithm replaces the oldest page in memory (the one that has been in memory the longest) when a new page needs to be loaded. It’s simple but not always efficient.</p>

    <h6>LRU (Least Recently Used):</h6>
    <p>This algorithm replaces the page that has not been used for the longest time. It tries to keep pages that are frequently used in memory, which can improve performance.</p>

    <h6>Optimal:</h6>
    <p>This is the ideal but impractical algorithm. It replaces the page that will not be used for the longest time in the future. It requires knowing the future page accesses, which is not possible in real systems but serves as a benchmark for other algorithms.</p>
<br>
    <h5>5. Swapping</h5>
     <p></p>
    <p><strong>Swapping:</strong> This is the process of moving a whole process from RAM to the disk (swap space) when there is not enough memory to run it, and then bringing it back to RAM when needed. This allows the system to manage limited memory more efficiently, but swapping too often can slow down the system because accessing the disk is much slower than accessing RAM.</p>

    <p>Swapping allows programs to run in environments with less physical memory, as parts of programs can be temporarily swapped out of memory to free up space for other processes.</p>
<p><br></p>
</body>
</html>
`,
      
    },
    {
        title: "Chapter 4: File System",
        content: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>File Systems and Algorithms</title>
</head>
<body>

    <h1>File Systems and Algorithms</h1>

    <h2>1. File Concepts and Access Methods</h2>
    <p><strong>File Concept:</strong> A file is a collection of data stored on a computer. It can contain text, images, videos, or programs. Files are named and organized in a system for easy access and management.</p>

    <p><strong>Access Methods:</strong> These define how data in a file is read or written. Common access methods include:</p>
    <ul>
        <li><strong>Sequential Access:</strong> Data is read or written in order, from start to end (like reading a book).</li>
        <li><strong>Direct Access:</strong> Allows jumping to any part of the file directly (like finding a specific page in a book using an index).</li>
    </ul>

    <h2>2. Directory Structures</h2>
    <p><strong>Directory Structure:</strong> It's the way files are organized and stored in the system. Directories (also called folders) are used to group files for easier management.</p>
    <ul>
        <li><strong>Single-level Directory:</strong> All files are stored in one list.</li>
        <li><strong>Two-level Directory:</strong> A directory for each user and another for files.</li>
        <li><strong>Hierarchical Directory:</strong> Directories are nested within other directories, forming a tree-like structure for better organization.</li>
    </ul>

    <h2>3. File System Mounting and Sharing</h2>
    <p><strong>Mounting:</strong> It’s the process of making a file system available for use by linking it to the directory structure of the OS, making it accessible. Example: When you plug in a USB drive, the OS mounts it so you can access the files.</p>

    <p><strong>Sharing:</strong> Allows multiple users or systems to access the same files. This can be done through network file systems or file sharing protocols, letting different systems or users access the same data.</p>

    <h2>4. File Allocation Methods</h2>
    <p>These are the ways the operating system stores files on a disk.</p>
    <ul>
        <li><strong>Contiguous Allocation:</strong> Files are stored in consecutive blocks. It’s fast to access, but if a file grows, it may need to be moved to a new location.</li>
        <li><strong>Linked Allocation:</strong> Each file is stored in non-contiguous blocks, but each block points to the next block in the file. It’s flexible but slower to access due to the need to follow links.</li>
        <li><strong>Indexed Allocation:</strong> A special index block stores the addresses of all the blocks of a file. It’s efficient and avoids fragmentation, allowing fast access.</li>
    </ul>

    <h2>5. Disk Scheduling Algorithms</h2>
    <p>These algorithms determine the order in which disk requests are processed. The goal is to optimize the time taken to read or write data.</p>
    <ul>
        <li><strong>FCFS (First Come, First Served):</strong> The disk processes requests in the order they arrive, simple but not always efficient.</li>
        <li><strong>SSTF (Shortest Seek Time First):</strong> The disk picks the request closest to the current head position, reducing travel time.</li>
        <li><strong>SCAN (Elevator Algorithm):</strong> The disk head moves in one direction until it reaches the end, then reverses direction. This is similar to an elevator moving up and down.</li>
        <li><strong>Other Algorithms:</strong> There are other scheduling algorithms like C-SCAN (Circular SCAN) and LOOK, each with its own way to optimize disk access times.</li>
    </ul>

</body>
</html>`,
        
    },
    {
        title: "Chapter 5: ",
        content: ``,
    
    },
    {
        title: "chapter 6:",
        content: "",
        
    },
    {
        title: "chapter 7",
        content: "",
        
    }
];



const practiceQuestions = [
    {
        chapterIndex: 0,
        questions: [
            {
                question:"1.What is the role of an Operating System (OS)? ",
                solution: `Answer: The OS manages computer hardware and software resources, providing services for computer programs. It acts as an intermediary between users and the hardware, enabling programs to run efficiently and securely.
`
            },
            {
                question: "2. How does an OS manage hardware and software resources?",
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
                solution: `#include <stdio.h>\n\nint main() {\n  float length, width;\n  printf("Enter length and width: ");\n  scanf("%f %f", &length, &width);\n  printf("Area: %f", length  width);\n  return 0;\n}`
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

window.addEventListener("DOMContentLoaded", () => {
    // Initialize tab switching functionality
    handleTabSwitching();

    // Render chapters in the sidebar
    renderChapters(chapters);

    // Set chapter link listeners
    setChapterLinkListeners(chapters, practiceQuestions, notes, articles);
})
