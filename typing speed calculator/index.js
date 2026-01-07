const easySentences = [
  "JavaScript is a high-level scripting language used to create dynamic, interactive websites and applications directly within the browser using HTML and CSS.",
  "In object-oriented programming, a class defines object behavior while inheritance allows one class to inherit features from another.",
  "APIs let different software systems communicate by exposing endpoints that accept requests and return responses using standard HTTP methods.",
  "Frontend development includes building interfaces with HTML, CSS, and JavaScript while considering usability, accessibility, and responsive design.",
  "The fetch API in JavaScript makes asynchronous requests to servers and handles responses using promises or async/await syntax.",
  "Web browsers parse HTML, apply styles via CSS, and execute JavaScript to display dynamic content and handle user events.",
  "Version control systems like Git track changes in codebases and help teams collaborate using commits, branches, and merge operations.",
  "A function is a reusable block of code that performs a task and can return a value based on inputs called parameters.",
  "When using databases, CRUD operations stand for Create, Read, Update, and Delete data entries using SQL or other query languages.",
  "In programming, logical operators like AND, OR, and NOT allow complex conditional statements for decision-making in control flow.",
  "JavaScript supports both synchronous and asynchronous execution using callbacks, promises, or async/await for handling time-dependent operations.",
  "HTML elements are structured using tags which define headings, paragraphs, links, forms, and multimedia content.",
  "CSS selectors target elements by tag, class, ID, or attributes to apply custom visual styles to a webpage.",
  "Loops like for, while, and do-while repeat instructions based on given conditions or count-based iterations.",
  "In JavaScript, event listeners respond to actions like clicks, key presses, and form submissions to trigger functions.",
  "The Document Object Model (DOM) is an in-memory tree representation of the HTML content that JavaScript can manipulate.",
  "Errors in programming include syntax errors, runtime errors, and logical errors that affect program execution or logic.",
  "React is a JavaScript library for building user interfaces using reusable components and a virtual DOM.",
  "An algorithm is a well-defined sequence of steps used to solve a specific computational problem efficiently.",
  "In web development, responsive design ensures that websites adapt seamlessly to various screen sizes and devices.",
];
const mediumSentences = [
  "Understanding Big O notation allows developers to evaluate algorithm efficiency by measuring how performance scales with input size, ensuring optimized code for time and space complexity.",
  "APIs abstract backend complexity by exposing defined endpoints, allowing different software applications to communicate seamlessly through HTTP requests while maintaining secure, modular interaction layers.",
  "In asynchronous JavaScript, the event loop manages callback queues and microtasks, enabling non-blocking behavior that’s essential for smooth user interactions in modern web applications.",
  "Software engineering emphasizes maintainability, modularity, and scalability, employing design patterns, SOLID principles, and documentation to ensure reliable, long-term software systems across development teams.",
  "Functional programming treats computation as the evaluation of mathematical functions, avoids shared state, and promotes immutability for predictable, bug-resistant software development.",
  "Database indexing significantly improves query performance by reducing the amount of data scanned, particularly in large datasets where filtering or sorting is frequently performed.",
  "The Model-View-Controller (MVC) architecture separates concerns in applications, improving scalability by dividing logic between data models, user interfaces, and control flow.",
  "In cybersecurity, encryption transforms data into unreadable formats using keys, ensuring data confidentiality and integrity during storage or transmission over unsecured networks.",
  "Containers like Docker package applications with dependencies, enabling consistent deployment across environments and simplifying scalability in distributed microservice-based systems.",
  "Machine learning models train on datasets to recognize patterns, make predictions, and adapt their parameters using algorithms like gradient descent or decision trees.",
  "Recursion is a technique where a function calls itself with modified parameters to solve a problem in smaller subproblems until a base condition is met.",
  "RESTful APIs follow a stateless protocol over HTTP, allowing operations on resources using standardized methods such as GET, POST, PUT, and DELETE.",
  "Data structures like hash maps offer constant time access by mapping keys to values, making them essential in building efficient lookup-based algorithms.",
  "Continuous Integration and Continuous Deployment (CI/CD) pipelines automate testing and deployment processes, enhancing productivity and reducing human errors in software release cycles.",
  "OAuth 2.0 provides secure delegated access using authorization tokens, allowing users to authenticate across platforms without exposing credentials to third-party applications.",
  "In object-oriented design, polymorphism enables objects to be treated as instances of their parent class, improving flexibility through method overriding and abstraction.",
  "Threading enables concurrent execution in programs, but shared resources must be synchronized to prevent race conditions, deadlocks, or inconsistent states.",
  "GraphQL is an alternative to REST, allowing clients to request exactly the data they need with structured queries, reducing over-fetching and under-fetching.",
  "Unit testing validates individual components in isolation, ensuring code correctness and simplifying debugging during the development lifecycle using test frameworks like Jest or Mocha.",
  "Progressive Web Apps (PWAs) combine features of web and mobile apps, providing offline access, push notifications, and fast performance through service workers and caching.",
];

const difficultSentences = [
  "Cloud computing enables scalable and on-demand access to computing resources, allowing organizations to deploy, manage, and monitor infrastructure and services via providers like AWS, Azure, or Google Cloud while maintaining high availability, fault tolerance, and cost efficiency.",

  "Machine learning algorithms analyze historical data to make predictions by identifying patterns, optimizing internal parameters during training, and continuously improving accuracy across tasks like classification, regression, clustering, and natural language processing using models like neural networks and decision trees.",

  "Data structures like linked lists, binary trees, graphs, and hash maps form the foundation of computer science by enabling efficient storage, retrieval, insertion, and deletion of data in time-sensitive or memory-constrained environments.",

  "The TCP/IP model defines how devices communicate over the internet using layered architecture, separating concerns between physical data transmission, network routing, and application-level protocols like HTTP, FTP, and DNS for reliability and scalability.",

  "In object-oriented programming, principles like encapsulation, inheritance, abstraction, and polymorphism improve software design by organizing code into reusable, modular, and maintainable components with clearly defined interfaces and behavior.",

  "Big O notation describes the upper bound of an algorithm’s complexity, helping developers analyze time and space efficiency for operations like searching, sorting, and traversing data structures under varying input sizes.",

  "Compilers perform lexical, syntactic, and semantic analysis to convert human-readable source code into optimized machine-level instructions that can be executed directly by the CPU of a specific hardware architecture.",

  "Concurrency enables multiple processes or threads to run independently and simultaneously, improving system responsiveness, but requires synchronization techniques like locks, semaphores, and atomic operations to avoid race conditions and deadlocks.",

  "Relational databases use structured schemas, SQL queries, primary and foreign keys, normalization rules, and indexing to organize and retrieve large volumes of interrelated data while maintaining integrity and consistency.",

  "Artificial intelligence systems use algorithms to replicate human-like decision-making, involving subfields like natural language processing, computer vision, and reinforcement learning, often powered by massive datasets and high-performance computing clusters.",

  "In cybersecurity, authentication verifies user identity using credentials like passwords or biometrics, while authorization controls access to resources using roles, permissions, and security policies within software or network systems.",

  "An operating system abstracts hardware resources such as memory, CPU, and storage, manages process isolation, handles multitasking, and provides system calls and APIs for interacting with user-level applications.",

  "Software testing involves unit, integration, system, and acceptance tests to validate software behavior against requirements, using tools and frameworks to automate test cases and maintain code quality over time.",

  "RESTful APIs follow standard HTTP methods to expose application functionality, allowing clients to perform CRUD operations on resources identified by URIs and represented in formats like JSON or XML.",

  "Quantum computing leverages principles of superposition and entanglement, enabling qubits to perform parallel computations and solve certain classes of problems exponentially faster than classical computers can.",

  "The Agile methodology promotes iterative software development through sprints, daily stand-ups, continuous feedback, and cross-functional collaboration, encouraging adaptability and customer-centric progress over traditional waterfall approaches.",

  "A distributed system consists of multiple independent computers that collaborate over a network to appear as a unified system, handling scalability, fault tolerance, consistency, and latency across nodes.",

  "In a blockchain network, decentralized consensus is achieved through algorithms like Proof of Work or Proof of Stake, allowing transparent, immutable, and tamper-resistant recording of transactions across multiple participants.",

  "Software containers like Docker encapsulate applications and their dependencies into isolated environments, allowing consistent development, testing, and deployment across systems regardless of underlying host configurations.",

  "A neural network consists of interconnected layers of artificial neurons, where each layer transforms input data through weighted connections and activation functions to enable complex pattern recognition in AI models.",
];

let jSentence = document.querySelector(".js-sentence");
let jCountdown = document.querySelector(".js-countdown");
let jTypingBox = document.querySelector(".js-typing-box");
let jTimmer = document.querySelector(".js-timmer");
let jStartBtn = document.querySelector(".js-start-btn");
let jRestartBtn = document.querySelector(".js-restart-btn");
let jResult = document.querySelector(".js-result");
let randomSentence = "";
let isStart = false;

jTypingBox.addEventListener("input", () => {
  jTypingBox.style.height = "auto";
  jTypingBox.style.height = jTypingBox.scrollHeight + "px";
});

document.querySelector(".js-easy").addEventListener("click", () => {
  randomSentence =
    easySentences[Math.floor(Math.random() * easySentences.length)];
  document.querySelector(".js-difficulty").innerHTML = "Difficulty Level";
  document.querySelector(".js-difficulty-btns").innerHTML = " Easy";
});
document.querySelector(".js-medium").addEventListener("click", () => {
  randomSentence =
    mediumSentences[Math.floor(Math.random() * mediumSentences.length)];
  document.querySelector(".js-difficulty").innerHTML = "Difficulty Level";
  document.querySelector(".js-difficulty-btns").innerHTML = " Medium";
});
document.querySelector(".js-hard").addEventListener("click", () => {
  randomSentence =
    difficultSentences[Math.floor(Math.random() * difficultSentences.length)];
  document.querySelector(".js-difficulty").innerHTML = "Difficulty Level";
  document.querySelector(".js-difficulty-btns").innerHTML = " Hard";
});

jStartBtn.addEventListener("click", () => {
  startCoundown();
});
function startCoundown() {
  if (isStart === false) {
    jSentence.innerHTML = randomSentence;
    isStart = true;
    jTypingBox.disabled = true;
    let countdown = 10;
    jCountdown.innerHTML = ` Typing starts in ${countdown}`;
    const countdownInterval = setInterval(() => {
      countdown--;
      jCountdown.innerHTML = ` Typing starts in ${countdown}`;
      if (countdown === 0) {
        jCountdown.innerHTML = ` Start typing....`;
        clearInterval(countdownInterval);
        jTypingBox.value = "";
        jTypingBox.classList.remove("hidden");
        jTypingBox.disabled = false;
        jTypingBox.focus();
        startTypingTimmer();
      }
    }, 1000);
  }
}
function startTypingTimmer() {
  let timmer = 60;
  jTimmer.innerHTML = `Time left ${timmer}`;
  const timmerInterval = setInterval(() => {
    timmer--;
    jTimmer.innerHTML = `Time left ${timmer}`;
    if (timmer === 0) {
      clearInterval(timmerInterval);
      jTypingBox.disabled = true;
      evaluateTyping(jTypingBox.value);
    }
  }, 1000);
}

function evaluateTyping(userInput) {
  const orignalWords = randomSentence.trim().split(" ");
  const userInputWords = userInput.trim().split(" ");
  let correct = 0;
  let incorrect = 0;
  for (let index = 0; index < orignalWords.length; index++) {
    if (orignalWords[index] === userInputWords[index]) {
      correct++;
    } else {
      incorrect++;
    }
  }
  let accuracy = Math.round((correct / orignalWords.length) * 100);
  let wpm = userInputWords.length;
  let remmarks = "";
  if (accuracy <= 25) {
    remarks = "need improvement";
  } else if (accuracy > 25 && accuracy < 51) {
    remarks = "improving do more practice";
  } else if (accuracy > 50 && 76) {
    remmarks = "Good work";
  } else {
    remmarks = "excellent!!";
  }
  jResult.innerHTML = `
        <p>Correct Words: ${correct}</p>
        <p>Incorrect Words: ${incorrect}</p>
        <p>Accuracy: ${accuracy}%</p>
        <p>WPM: ${wpm}</p>
        <p>Remarks: ${remmarks}</p>
      `;
  isStart = false;
}
jRestartBtn.addEventListener("click", () => {
  location.reload();
});
