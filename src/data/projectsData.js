export const projectsData = [
  {
    id: 1,
    title: 'Breast Cancer Decision Tree',
    category: 'cpp',
    image: '/images/v2/breast_cancer.png',
    description: 'C++ decision tree project for classifying breast cancer records using dataset parsing, tree construction, and accuracy reporting.',
    link: 'https://github.com/Youssefrajeh/BreastCancerDecisionTree',
    duration: 'Oct 2025',
    role: 'C++ Developer',
    detailedDescription: 'A C++ classification project that builds a decision tree from breast cancer dataset records. The program parses clinical attributes, creates logical decision branches, and reports classification results for testing and review.',
    techStack: [
      { name: 'C++', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' }
    ],
    features: [
      'Decision tree construction using recursive node splitting',
      'Dataset parsing for structured breast cancer records',
      'Classification output with basic accuracy checking',
      'Readable decision paths for reviewing how records are classified'
    ],
    challenges: 'Organizing decision tree nodes and dataset records clearly in C++. Solved by separating parsing, tree-building, and prediction logic so the project stays easier to test and explain.'
  },
  {
    id: 2,
    title: 'FileUsage Analyzer',
    category: 'cpp',
    image: '/images/v2/fileusage.png',
    description: 'Command-line utility built in C++ to analyze file system usage, providing detailed statistics and helping optimize storage management.',
    link: 'https://github.com/Youssefrajeh/fileusage',
    duration: 'Nov 2025',
    role: 'Solo Developer',
    detailedDescription: 'A C++ command-line utility that scans directory paths, aggregates file sizes, and prints storage usage summaries. Designed as a practical filesystem analysis tool for understanding where disk space is being used.',
    techStack: [
      { name: 'C++', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' }
    ],
    features: [
      'Directory traversal for reading nested folders and files',
      'Formatted terminal output with graphical bar charts showing usage splits',
      'Size summaries that help compare folders quickly',
      'Command-line workflow focused on practical storage inspection'
    ],
    challenges: 'Handling folders that may be unreadable or deeply nested without stopping the whole scan. Solved by keeping traversal errors isolated and continuing with the rest of the directory tree.'
  },
  {
    id: 3,
    title: 'Newcomb-Benford Statistics',
    category: 'cpp',
    image: '/images/v2/benfords_law.png',
    description: "Statistical analysis tool implementing Benford's Law to detect fraud and anomalies in numerical data sets using C++ algorithms.",
    link: 'https://github.com/Youssefrajeh/nbstats',
    duration: 'Dec 2025',
    role: 'Algorithm Engineer',
    detailedDescription: "A mathematical tool implementing Benford's Law (Law of Anomalous Numbers) to audit numerical datasets. It extracts the leading digits of input values and correlates their distribution against logarithmic expectations to identify evidence of data manipulation, auditing irregularities, or reporting fraud.",
    techStack: [
      { name: 'C++', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' }
    ],
    features: [
      'High-speed parsing of thousands of numeric entries in text and CSV formats',
      'Calculates Chi-Square and Kolmogorov-Smirnov statistical goodness-of-fit metrics',
      'Generates direct ASCII bar plots representing digit frequencies vs. theoretical curves',
      'Automated outlier flag highlighting digits deviating past acceptable standard deviations'
    ],
    challenges: 'Parsing raw numbers containing formatted currencies, scientific notations, and decimal configurations. Solved by building a regex-driven parsing token system that sanitizes input numbers and isolates the first non-zero digit before casting to float.'
  },
  {
    id: 4,
    title: 'Expression Evaluator',
    category: 'cpp',
    image: '/images/v2/expression_evaluator.png',
    description: 'Mathematical expression parser and evaluator built in C++ using advanced algorithms for handling complex mathematical operations.',
    link: 'https://github.com/Youssefrajeh/Expression-Evaluator',
    duration: 'Jan 2026',
    role: 'Solo Developer',
    detailedDescription: 'A mathematical interpreter that parses text expressions containing operators, brackets, and functional variables, compiling them into abstract syntax trees (AST) to evaluate results in real-time. Features recursive descent parsing and infix-to-postfix stack compilers.',
    techStack: [
      { name: 'C++', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' }
    ],
    features: [
      'Evaluates standard arithmetic, trigonometry, logarithms, and user-defined functions',
      'Recursive descent parser with dynamic operator precedence mapping',
      'Detailed syntax error highlighting pointing to precise invalid token indices',
      'Variable symbol table for solving equations with dynamic value substitution'
    ],
    challenges: 'Resolving operator associativity and bracket-matching edge cases in complex nested equations. Solved by implementing the Shunting-yard algorithm backed by an AST tree node builder, ensuring mathematical order of operations is strictly followed.'
  },
  {
    id: 5,
    title: 'XO Game',
    category: 'web',
    image: '/images/v2/xo_game.png',
    description: 'Interactive Tic-Tac-Toe game built with HTML, CSS, and JavaScript featuring responsive layout and clean browser-based gameplay.',
    link: 'https://github.com/Youssefrajeh/XO',
    duration: 'Feb 2026',
    role: 'Frontend Developer',
    detailedDescription: 'A modern, responsive Tic-Tac-Toe application highlighting CSS variables, CSS grid layouts, and clean state machine logic in vanilla JavaScript. Includes interactive audio, hover highlights, and local storage record tracking.',
    techStack: [
      { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
      { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
      { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' }
    ],
    features: [
      'Interactive board with simple browser-based game state',
      'Local score tracking keeping record histories between browser reloads',
      'Turn handling and win/draw detection',
      'Responsive design ensuring touch interactions work seamlessly on mobile browsers'
    ],
    challenges: 'Keeping the game logic clear while updating the interface after every move. Solved by separating board state, result checking, and UI updates into smaller JavaScript functions.'
  },
  {
    id: 6,
    title: 'Prayer Times',
    category: 'web',
    image: '/images/v2/prayer_times.png',
    description: 'Web application providing accurate prayer times based on location with beautiful UI and real-time updates for Muslims worldwide.',
    link: 'https://github.com/Youssefrajeh/Prayer-Times',
    duration: 'Mar 2026',
    role: 'Frontend Developer',
    detailedDescription: 'An interactive web page that displays prayer times based on location data and calculation settings. It focuses on a clear schedule layout, countdown behavior, and responsive browser use.',
    techStack: [
      { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
      { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
      { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' }
    ],
    features: [
      'Location-based prayer time lookup',
      'Dynamic countdown timers indicating the remaining hours/minutes for the next event',
      'Responsive UI layout for desktop and mobile screens',
      'Settings support for prayer time calculation preferences'
    ],
    challenges: 'Presenting time-based information clearly across different devices. Solved by keeping schedule display, countdown updates, and location handling separate in the JavaScript code.'
  },
  {
    id: 7,
    title: 'Microwave Simulator',
    category: 'java',
    image: '/images/v2/microwave_simulator.png',
    description: 'Java application simulating microwave oven functionality with GUI, timer controls, and realistic cooking operations.',
    link: 'https://github.com/Youssefrajeh/Microwave',
    duration: 'Apr 2026',
    role: 'Java Developer',
    detailedDescription: 'An object-oriented Java Swing application simulating the operation of a physical microwave oven. Features comprehensive state modeling representing status changes (idle, heating, paused, open door) and real-time thread synchronization.',
    techStack: [
      { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' }
    ],
    features: [
      'Fully simulated control panel supporting input times, start/stop commands, and preset modes',
      'Countdown logic for modeling microwave heating time',
      'Dynamic state locking preventing heating when the virtual oven door is toggled open',
      'Interactive alert system sounding virtual bleep signals on timer completion'
    ],
    challenges: 'Keeping the microwave states consistent when users start, pause, stop, or open the virtual door. Solved by modeling each state transition clearly before updating the Swing interface.'
  },
  {
    id: 8,
    title: 'Android Assignment',
    category: 'android',
    image: '/images/v2/android_assignment.png',
    description: 'Native Android application built with Kotlin featuring modern UI components, user interactions, and following Android development best practices.',
    link: 'https://github.com/Youssefrajeh/AndroidAssignment',
    duration: 'May 2026',
    role: 'Android Developer',
    detailedDescription: 'A native Android assignment project showcasing Kotlin-based screens, user interactions, and structured mobile app development practices.',
    techStack: [
      { name: 'Kotlin', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg' },
      { name: 'Android SDK', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg' }
    ],
    features: [
      'Native Android UI screens built with Kotlin',
      'User input and interaction handling',
      'Structured project organization for mobile development',
      'Mobile layout behavior tested across common screen sizes'
    ],
    challenges: 'Learning how to keep Android screens organized while handling user actions. Solved by separating UI logic into focused Kotlin classes and following Android project conventions.'
  },
  {
    id: 9,
    title: 'Grades Tracking System',
    category: 'csharp',
    image: '/images/v2/grades_tracking.png',
    description: 'C# grade tracking console application with JSON data storage, course management, evaluation tracking, and automated grade calculations.',
    link: 'https://github.com/Youssefrajeh/Grades-Tracking-System',
    duration: 'Sep 2025',
    role: 'Systems Developer',
    detailedDescription: 'A C# console application that stores student, course, and evaluation data in JSON format. It supports grade calculations, course tracking, and structured academic record management.',
    techStack: [
      { name: 'C#', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg' }
    ],
    features: [
      'JSON-based data storage for student and course records',
      'Calculates weighted grade categories, GPAs, and course progress indicators',
      'CLI menu offering prompt controls, file path queries, and error feedback',
      'Structured output for reviewing academic progress'
    ],
    challenges: 'Making sure grade category weights and entered marks produce reliable totals. Solved by validating input before calculations and keeping the JSON structure predictable.'
  },
  {
    id: 10,
    title: 'Full Stack Application',
    category: 'fullstack',
    image: '/images/v2/full_stack.png',
    description: 'Full-stack practice application connecting an ASP.NET Core backend, React frontend, SQL Server database, and authentication workflow.',
    link: 'https://github.com/Youssefrajeh/Full_Satck',
    duration: 'Oct 2025',
    role: 'Full-Stack Developer',
    detailedDescription: 'A full-stack application built with ASP.NET Core Web API, React, and SQL Server. The project demonstrates API routing, database access, authentication, and frontend/backend communication.',
    techStack: [
      { name: 'C# / .NET', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg' },
      { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
      { name: 'SQL Server', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-original.svg' }
    ],
    features: [
      'RESTful API routing with secure JWT authorization filters',
      'React frontend consuming backend API endpoints',
      'Structured database seeding and migration pipeline handled via EF Core',
      'Validation and error-handling patterns for API requests'
    ],
    challenges: 'Connecting the frontend and backend reliably while handling authentication and CORS. Solved by organizing API routes, frontend service calls, and configuration settings clearly.'
  },
  {
    id: 11,
    title: 'Student Loan Calculator',
    category: 'java',
    image: '/images/v2/student_loan.png',
    description: 'Java application for managing student loans, calculating monthly payments, and handling invalid input with custom exceptions. Implements OOP, interfaces, and exception handling.',
    link: 'https://github.com/Youssefrajeh/Student-Loan-Calculator',
    duration: 'Nov 2025',
    role: 'Java Developer',
    detailedDescription: 'An analytical Java application designed to calculate compound interest schedules for student loans. Focuses on strict interface modeling, unit testing coverage, and custom nested exception flows.',
    techStack: [
      { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' }
    ],
    features: [
      'Calculates amortized loan payment schedules including interest splits over time',
      'Custom exception structures catching invalid rates, negative inputs, and out-of-bound ranges',
      'OOP architecture leveraging interfaces to support swap-in calculation algorithms',
      'Basic validation checks for calculation accuracy'
    ],
    challenges: 'Handling currency rounding and invalid user input. Solved by using precise numeric handling and custom exceptions for values outside accepted ranges.'
  },
  {
    id: 12,
    title: 'Rajehtube Downloader',
    category: 'csharp',
    image: '/images/v2/rajehtube.png',
    description: 'Windows desktop downloader built with C# and WPF. It works with yt-dlp and FFmpeg to download media and show progress updates.',
    link: 'https://github.com/Youssefrajeh/RajehtubeDownloader',
    duration: 'Dec 2025',
    role: 'Solo Developer',
    detailedDescription: 'A Windows desktop downloader built in C# using WPF. It launches yt-dlp and FFmpeg processes, reads command output, and updates the interface with download progress and status messages.',
    techStack: [
      { name: 'C# / WPF', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg' },
      { name: 'Windows Desktop', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/windows8/windows8-original.svg' }
    ],
    features: [
      'Desktop interface for starting and monitoring downloads',
      'Process output parsing for progress messages',
      'FFmpeg support for media conversion and merging workflows',
      'Options for selecting download behavior and output format'
    ],
    challenges: 'Reading command-line output without freezing the WPF interface. Solved by running external processes asynchronously and updating the UI from parsed progress messages.',
  },
  {
    id: 13,
    title: 'WordleGame',
    category: 'csharp',
    image: '/images/v2/wordle_game.png',
    description: 'A distributed Wordle clone built with C#, ASP.NET Core, and gRPC. Features a multi-service architecture including a game server, word provider, and a console-based UI.',
    link: 'https://github.com/Youssefrajeh/WordleGame',
    duration: 'Jan 2026',
    role: 'C# Developer',
    detailedDescription: 'A distributed Wordle-style game built with C#, ASP.NET Core, and gRPC. It separates game logic, word validation, and a console client to practice service communication.',
    techStack: [
      { name: 'C# / .NET', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg' },
      { name: 'ASP.NET Core / gRPC', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg' }
    ],
    features: [
      'gRPC service communication between project components',
      'Game session handling for Wordle-style guesses',
      'Separate dictionary service managing dictionary checks and word lists',
      'Console client for playing and testing the game flow'
    ],
    challenges: 'Keeping game state understandable across separate services. Solved by defining clear request and response contracts for the gRPC calls.'
  },
  {
    id: 14,
    title: 'Stoichiometry',
    category: 'csharp',
    image: '/images/v2/stoichiometry.png',
    description: 'A .NET application for parsing chemical formulas and calculating molecular mass through a reusable class library and console client.',
    link: 'https://github.com/Youssefrajeh/Stoichiometry',
    duration: 'Feb 2026',
    role: 'Solo Developer',
    detailedDescription: 'A .NET class library and console application designed to parse chemical formulas such as CuSO4 and Fe2(SO4)3, then compute molecular mass using stored element data.',
    techStack: [
      { name: 'C# / .NET 9', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg' }
    ],
    features: [
      'Chemical formula parser for element symbols, quantities, and grouped terms',
      'Molecular mass calculation using element weight data',
      'Retrieves element weights dynamically using a built-in periodic table system',
      'Exposes fully reusable class library APIs for integration into other applications'
    ],
    challenges: 'Correctly parsing grouped formulas such as Fe(NO3)3. Solved by expanding grouped terms and accumulating element counts before calculating mass.'
  }
];

export const projectFilters = [
  { id: 'all', name: 'All' },
  { id: 'web', name: 'Web' },
  { id: 'fullstack', name: 'Full Stack' },
  { id: 'cpp', name: 'C++' },
  { id: 'java', name: 'Java' },
  { id: 'csharp', name: 'C#' },
  { id: 'android', name: 'Android' }
];
