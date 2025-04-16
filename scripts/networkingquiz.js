const questionBank = [
    { question: "What does HTTP stand for?", options: ["HyperText Transfer Protocol", "HighText Transfer Protocol", "Hyper Transfer Text Protocol", "HyperText Transmission Protocol"], answer: "HyperText Transfer Protocol" },
    { question: "Which device connects multiple networks together?", options: ["Switch", "Router", "Hub", "Repeater"], answer: "Router" },
    { question: "What is the default port number for HTTP?", options: ["21", "80", "443", "110"], answer: "80" },
    { question: "Which protocol is used to send emails?", options: ["HTTP", "SMTP", "FTP", "SNMP"], answer: "SMTP" },
    { question: "Which protocol is used to receive emails?", options: ["SMTP", "POP3", "HTTP", "FTP"], answer: "POP3" },
    { question: "What does IP stand for?", options: ["Internet Protocol", "Internal Protocol", "Input Protocol", "Internet Path"], answer: "Internet Protocol" },
    { question: "Which layer in the OSI model is responsible for routing?", options: ["Data Link", "Network", "Transport", "Session"], answer: "Network" },
    { question: "Which device operates at the Data Link layer?", options: ["Hub", "Switch", "Router", "Firewall"], answer: "Switch" },
    { question: "What does DNS stand for?", options: ["Domain Network System", "Domain Name System", "Dynamic Network System", "Dynamic Name System"], answer: "Domain Name System" },
    { question: "Which of the following is a class C IP address?", options: ["192.168.1.1", "10.0.0.1", "172.16.0.1", "224.0.0.1"], answer: "192.168.1.1" },
    { question: "Which topology requires a central device?", options: ["Bus", "Ring", "Star", "Mesh"], answer: "Star" },
    { question: "Which cable type offers the highest bandwidth?", options: ["Twisted Pair", "Coaxial", "Fiber Optic", "None"], answer: "Fiber Optic" },
    { question: "Which command is used to test connectivity between two devices?", options: ["ipconfig", "tracert", "ping", "netstat"], answer: "ping" },
    { question: "Which layer of the OSI model does TCP operate on?", options: ["Network", "Transport", "Data Link", "Application"], answer: "Transport" },
    { question: "What is the function of ARP?", options: ["Assign IP address", "Resolve IP to MAC", "Send emails", "Encrypt data"], answer: "Resolve IP to MAC" },
    { question: "Which address uniquely identifies a device on a local network?", options: ["IP address", "Subnet", "MAC address", "Hostname"], answer: "MAC address" },
    { question: "What is the purpose of NAT?", options: ["Assign private IPs", "Translate IP addresses", "Configure firewalls", "Resolve domain names"], answer: "Translate IP addresses" },
    { question: "Which layer is responsible for reliable data transfer?", options: ["Network", "Data Link", "Transport", "Application"], answer: "Transport" },
    { question: "Which port does HTTPS use?", options: ["21", "25", "80", "443"], answer: "443" },
    { question: "What is the range of private IP addresses in Class A?", options: ["192.168.0.0 - 192.168.255.255", "172.16.0.0 - 172.31.255.255", "10.0.0.0 - 10.255.255.255", "127.0.0.0 - 127.255.255.255"], answer: "10.0.0.0 - 10.255.255.255" },
    { question: "Which protocol ensures packet delivery?", options: ["TCP", "IP", "UDP", "ICMP"], answer: "TCP" },
    { question: "Which protocol is faster but less reliable?", options: ["TCP", "UDP", "FTP", "SMTP"], answer: "UDP" },
    { question: "What does DHCP do?", options: ["Assigns IP addresses", "Resolves domain names", "Encrypts data", "Routes packets"], answer: "Assigns IP addresses" },
    { question: "Which tool shows active connections and ports?", options: ["ping", "ipconfig", "netstat", "tracert"], answer: "netstat" },
    { question: "What does FTP stand for?", options: ["File Transfer Protocol", "Fast Text Protocol", "File Type Protocol", "Fixed Transfer Protocol"], answer: "File Transfer Protocol" },
    { question: "Which layer is responsible for encryption?", options: ["Application", "Presentation", "Session", "Transport"], answer: "Presentation" },
    { question: "Which command shows the IP address of a device?", options: ["netstat", "ping", "ipconfig", "tracert"], answer: "ipconfig" },
    { question: "Which model has 7 layers?", options: ["TCP/IP", "OSI", "Hybrid", "Network"], answer: "OSI" },
    { question: "What does a firewall do?", options: ["Encrypts data", "Assigns IP", "Monitors traffic", "Blocks unauthorized access"], answer: "Blocks unauthorized access" },
    { question: "Which protocol helps in error reporting and diagnostics?", options: ["TCP", "UDP", "ICMP", "IP"], answer: "ICMP" },
    { question: "What is a subnet mask used for?", options: ["Encrypting data", "Classifying networks", "Routing", "Dividing networks"], answer: "Dividing networks" },
    { question: "Which network topology connects each device to every other device?", options: ["Bus", "Star", "Ring", "Mesh"], answer: "Mesh" },
    { question: "Which OSI layer deals with syntax and encryption?", options: ["Presentation", "Application", "Session", "Transport"], answer: "Presentation" },
    { question: "Which part of the IP address identifies the host?", options: ["Network ID", "Subnet", "Host ID", "MAC address"], answer: "Host ID" },
    { question: "Which service resolves domain names to IP addresses?", options: ["DHCP", "NAT", "DNS", "FTP"], answer: "DNS" },
    { question: "What is the loopback address in IPv4?", options: ["192.168.1.1", "10.0.0.1", "127.0.0.1", "255.255.255.255"], answer: "127.0.0.1" },
    { question: "Which command traces the route of packets?", options: ["ping", "ipconfig", "tracert", "netstat"], answer: "tracert" },
    { question: "What is a MAC address?", options: ["Media Access Control address", "Machine Address Code", "Managed Access Control", "Manual Address Configuration"], answer: "Media Access Control address" },
    { question: "Which OSI layer initiates a session?", options: ["Application", "Presentation", "Session", "Transport"], answer: "Session" }
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