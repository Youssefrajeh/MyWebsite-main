export const projectsData = [
  {
    id: 1,
    title: 'Breast Cancer Decision Tree',
    category: 'cpp',
    image: '/images/v2/breast_cancer.png',
    description: 'Machine learning project using decision trees to analyze breast cancer data, featuring data preprocessing, model training, and accuracy evaluation.',
    link: 'https://github.com/Youssefrajeh/BreastCancerDecisionTree',
    duration: 'Oct 2025',
    role: 'Lead AI Engineer',
    detailedDescription: 'An analytical and predictive application designed to help identify breast cancer markers using a custom-built machine learning decision tree algorithm. The program processes clinical dataset attributes, establishes logical classification splits, and predicts cancer classification with statistical accuracy reports.',
    techStack: [
      { name: 'C++', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
      { name: 'Machine Learning', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' }
    ],
    features: [
      'Recursive entropy-based information gain computations for tree splits',
      'Data cleaning pipeline parsing CSV reports and resolving missing/null attributes',
      'Cross-validation testing evaluating prediction precision, recall, and F1-score',
      'Visual decision path generator showing logical branches created by the model'
    ],
    challenges: 'Designing dynamic tree nodes without bloated memory allocations. Resolved by writing a strict pointer-based node manager in C++ that recursively prunes subtrees using custom threshold metrics, reducing memory footprint by 40% and preventing stack overflow errors on large training runs.'
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
    detailedDescription: 'A high-performance C++ command-line utility that indexes directory paths, aggregates file sizes, and generates visual storage usage reports. Designed to mimic Linux disk utilization commands but optimized for cross-platform speed and deep path nesting.',
    techStack: [
      { name: 'C++', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
      { name: 'File System APIs', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg' }
    ],
    features: [
      'Multi-threaded directory traversing using system-level APIs',
      'Formatted terminal output with graphical bar charts showing usage splits',
      'Advanced filter flags supporting file extension types, size ranges, and modification dates',
      'Direct JSON and CSV export capabilities for scripting automation'
    ],
    challenges: 'Handling access denied folders and circular symlinks without breaking traversal loops. Solved by implementing an error pipeline that silently flags unreadable files while tracking directory inodes to detect and bypass infinite loop paths.'
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
    description: 'Interactive Tic-Tac-Toe game built with HTML, CSS, and JavaScript featuring responsive design and smooth animations.',
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
      'Interactive board with smooth CSS keyframe animations and sound effects',
      'Local score tracking keeping record histories between browser reloads',
      'Smart AI opponent built using a Minimax algorithm for unbeatable play',
      'Responsive design ensuring touch interactions work seamlessly on mobile browsers'
    ],
    challenges: 'Creating an unbeatable AI opponent without delaying the game loop. Solved by executing a minimax tree search with alpha-beta pruning in JavaScript, ensuring calculations execute in under 5 milliseconds.'
  },
  {
    id: 6,
    title: 'Prayer Times',
    category: 'web',
    image: '/images/v2/prayer_times.png',
    description: 'Web application providing accurate prayer times based on location with beautiful UI and real-time updates for Muslims worldwide.',
    link: 'https://github.com/Youssefrajeh/Prayer-Times',
    duration: 'Mar 2026',
    role: 'Full-Stack Developer',
    detailedDescription: 'An interactive web dashboard that queries geolocation APIs to serve real-time prayer schedules based on astronomical calculation methods. Features automated countdown timers, dynamic background changes reflecting the time of day, and location overrides.',
    techStack: [
      { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
      { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
      { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' }
    ],
    features: [
      'Automated geographical location parsing via HTML5 Geolocation API fallback',
      'Dynamic countdown timers indicating the remaining hours/minutes for the next event',
      'Fully responsive UI layout adjusting background gradients according to calculations',
      'Supports multiple computation methods (ISNA, MWL, Egyptian Authority) via settings panel'
    ],
    challenges: 'Managing time zone offsets and daylight savings changes across global queries. Solved by shifting calculation structures to parse Unix timestamps directly and using astronomical coordinate equations computed locally in JavaScript.'
  },
  {
    id: 7,
    title: 'Microwave Simulator',
    category: 'java',
    image: '/images/v2/microwave_simulator.png',
    description: 'Java application simulating microwave oven functionality with GUI, timer controls, and realistic cooking operations.',
    link: 'https://github.com/Youssefrajeh/Microwave',
    duration: 'Apr 2026',
    role: 'Lead Developer',
    detailedDescription: 'An object-oriented Java Swing application simulating the operation of a physical microwave oven. Features comprehensive state modeling representing status changes (idle, heating, paused, open door) and real-time thread synchronization.',
    techStack: [
      { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' }
    ],
    features: [
      'Fully simulated control panel supporting input times, start/stop commands, and preset modes',
      'Asynchronous countdown thread modeling microwave heating with a visual progress dial',
      'Dynamic state locking preventing heating when the virtual oven door is toggled open',
      'Interactive alert system sounding virtual bleep signals on timer completion'
    ],
    challenges: 'Synchronizing GUI state updates across background threads without encountering race conditions. Solved by utilizing SwingWorker and wrapping display events within EventQueue.invokeLater, keeping state locks thread-safe.'
  },
  {
    id: 8,
    title: 'Android Assignment',
    category: 'android',
    image: '/images/v2/android_assignment.png',
    description: 'Native Android application built with Kotlin featuring modern UI components, user interactions, and following Android development best practices.',
    link: 'https://github.com/Youssefrajeh/AndroidAssignment',
    duration: 'May 2026',
    role: 'Mobile Developer',
    detailedDescription: 'A native Android application showcasing material design, structured fragments, and structured Kotlin workflows. Features lists built using RecyclerView, custom adapters, and SQLite database integrations.',
    techStack: [
      { name: 'Kotlin', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg' },
      { name: 'Android SDK', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg' }
    ],
    features: [
      'Responsive listing components loading data efficiently via custom adapters',
      'Dynamic search filter capabilities refining card lists instantly',
      'SQLite repository backend caching user edits and entries',
      'Seamless multi-activity navigation using Android Navigation Components'
    ],
    challenges: 'Preventing memory leaks when rotating the device and managing layout configurations. Solved by structuring the application using the Model-View-ViewModel (MVVM) pattern and managing data state inside ViewModel holders.'
  },
  {
    id: 9,
    title: 'Grades Tracking System',
    category: 'csharp',
    image: '/images/v2/grades_tracking.png',
    description: 'JSON-based grade tracking system with C# console application featuring data validation, course management, evaluation tracking, and automated grade calculations with JSON schema validation.',
    link: 'https://github.com/Youssefrajeh/Grades-Tracking-System',
    duration: 'Sep 2025',
    role: 'Systems Developer',
    detailedDescription: 'A robust C# application that parses student profiles, registers custom courses, imports grade categories, and exports academic transcripts. Backed by structured JSON storage validation.',
    techStack: [
      { name: 'C#', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg' }
    ],
    features: [
      'Comprehensive JSON schema validation ensuring imported dataset structures are clean',
      'Calculates weighted grade categories, GPAs, and course progress indicators',
      'CLI menu offering prompt controls, file path queries, and error feedback',
      'Automated HTML transcript generator converting JSON objects to printable summaries'
    ],
    challenges: 'Validating nested evaluation categories to verify total weights add up to exactly 100%. Solved by building a validation filter that runs recursive checksum audits on imported JSON files before loading them into active memory.'
  },
  {
    id: 10,
    title: 'Full Stack Application',
    category: 'fullstack',
    image: '/images/v2/full_stack.png',
    description: 'Complete full-stack web application featuring frontend and backend integration, database management, user authentication, and modern development practices.',
    link: 'https://github.com/Youssefrajeh/Full_Satck',
    duration: 'Oct 2025',
    role: 'Full-Stack Developer',
    detailedDescription: 'A secure full-stack platform built with ASP.NET Core Web API on the backend and React on the frontend. Uses Entity Framework Core to connect to SQL Server, supporting JWT token authentication and role-based client controls.',
    techStack: [
      { name: 'C# / .NET', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg' },
      { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
      { name: 'SQL Server', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-original.svg' }
    ],
    features: [
      'RESTful API routing with secure JWT authorization filters',
      'Dynamic React dashboard consuming APIs and rendering real-time metrics',
      'Structured database seeding and migration pipeline handled via EF Core',
      'Custom middleware layers handling validation errors and logging'
    ],
    challenges: 'Securing user data and managing CORS issues during local and staging deployments. Resolved by writing custom middleware, utilizing secure password hashing (BCrypt), and storing JWT keys in encrypted environment configurations.'
  },
  {
    id: 11,
    title: 'Student Loan Calculator',
    category: 'java',
    image: '/images/v2/student_loan.png',
    description: 'Java application for managing student loans, calculating monthly payments, and handling invalid input with custom exceptions. Implements OOP, interfaces, and exception handling.',
    link: 'https://github.com/Youssefrajeh/Student-Loan-Calculator',
    duration: 'Nov 2025',
    role: 'Lead Developer',
    detailedDescription: 'An analytical Java application designed to calculate compound interest schedules for student loans. Focuses on strict interface modeling, unit testing coverage, and custom nested exception flows.',
    techStack: [
      { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' }
    ],
    features: [
      'Calculates amortized loan payment schedules including interest splits over time',
      'Custom exception structures catching invalid rates, negative inputs, and out-of-bound ranges',
      'OOP architecture leveraging interfaces to support swap-in calculation algorithms',
      'Comprehensive JUnit test suites validating calculation accuracies'
    ],
    challenges: 'Handling currency rounding discrepancies across extended amortization tables. Solved by shifting internal values to BigDecimal objects and setting precise banking round modes (ROUND_HALF_EVEN).'
  },
  {
    id: 12,
    title: 'Rajehtube Downloader',
    category: 'csharp',
    image: '/images/v2/rajehtube.png',
    description: 'A professional-quality Windows desktop application for downloading YouTube videos and playlists. Acts as a wrapper for yt-dlp and ffmpeg, featuring real-time progress tracking, quality selection, and automatic conversion.',
    link: 'https://github.com/Youssefrajeh/RajehtubeDownloader',
    duration: 'Dec 2025',
    role: 'Solo Developer',
    detailedDescription: 'A high-performance Windows desktop downloader built in C# using WPF and the MVVM architecture. It interfaces directly with yt-dlp and FFmpeg to queue downloads, extract audio, mux formats, and save media with real-time download speed reports.',
    techStack: [
      { name: 'C# / WPF', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg' },
      { name: 'yt-dlp', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/windows/windows-original.svg' },
      { name: 'FFmpeg', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg' }
    ],
    features: [
      'Multi-threaded queuing system allowing concurrent file downloads',
      'Real-time output stream parsing displaying percentage steps, speeds, and ETA indicators',
      'Integrated FFmpeg scripts automatically merging high-definition video files and audio channels',
      'Advanced options panel supporting playlist ranges and audio extraction presets'
    ],
    challenges: 'Parsing output stdout logs from CLI child processes in real-time without locking the WPF UI thread. Solved by launching CLI routines asynchronously and parsing stdout lines using reactive regex events dispatched back to the UI thread.',
  },
  {
    id: 13,
    title: 'WordleGame',
    category: 'csharp',
    image: '/images/v2/wordle_game.png',
    description: 'A distributed Wordle clone built with C#, ASP.NET Core, and gRPC. Features a multi-service architecture including a game server, word provider, and a console-based UI.',
    link: 'https://github.com/Youssefrajeh/WordleGame',
    duration: 'Jan 2026',
    role: 'Microservices Architect',
    detailedDescription: 'A high-throughput distributed implementation of the popular Wordle game. Built using ASP.NET Core microservices communicating via gRPC. Includes a centralized game logic engine, dictionary services, and a CLI client.',
    techStack: [
      { name: 'C# / .NET', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg' },
      { name: 'gRPC', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg' },
      { name: 'Microservices', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' }
    ],
    features: [
      'gRPC service communication layer ensuring low-latency RPC requests',
      'Distributed game session storage keeping tracking of multiple concurrent users',
      'Separate dictionary service managing dictionary checks and word lists',
      'Robust error-handling middle layers recovering sessions from server drops'
    ],
    challenges: 'Maintaining synchronized game state across stateless microservice boundaries. Solved by designing a lightweight gRPC session token framework that routes state payloads in header contexts, avoiding db bottlenecks.'
  },
  {
    id: 14,
    title: 'Stoichiometry',
    category: 'csharp',
    image: '/images/v2/stoichiometry.png',
    description: 'A component-based .NET 9.0 application for chemical formula analysis and molecular mass calculations. Includes a reusable class library and a command-line client.',
    link: 'https://github.com/Youssefrajeh/Stoichiometry',
    duration: 'Feb 2026',
    role: 'Solo Developer',
    detailedDescription: 'A .NET 9.0 class library and console application designed to parse complex chemical formulas (like CuSO4 or Fe2(SO4)3), balance chemical equations, and compute molecular mass. Leverages parser tokenizers and dictionary trees.',
    techStack: [
      { name: 'C# / .NET 9', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg' }
    ],
    features: [
      'Chemical formula tokenizer parsing element quantities, sub-brackets, and hydrate dots',
      'Balances unbalanced chemical equations using matrix reduction algebra',
      'Retrieves element weights dynamically using a built-in periodic table system',
      'Exposes fully reusable class library APIs for integration into other applications'
    ],
    challenges: 'Correctly parsing nested brackets (e.g. Fe(NO3)3) and hydrates in chemical equations. Solved by implementing a stack-based token parser that recursively expands formula nodes and accumulates element atomic counts.'
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
