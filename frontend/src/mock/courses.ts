// courses.ts
import { TCourse } from "@/types/courses";

export const mock_courses: TCourse[] = [
  {
    _id: '662e5268060547abde7517a9', 
    description: 'This course covers a broad range of topics related…390R, or COMPSCI 466, or E&C-ENG 371). 3 credits.', 
    id: 'COMPSCI 564', 
    subject: 'COMPSCI', 
    title: 'Cyber Effects: Reverse Engineering, Exploit Analysis, and Capability Development'
  },
  {
    _id: '662e5268060547abde7517aa', 
    description: 'This course introduces students to the principal a…equisites: COMPSCI 365 or COMPSCI 377. 3 credits.', 
    id: 'COMPSCI 565', 
    subject: 'COMPSCI', 
    title: 'Advanced Digital Forensic Systems'
  },
  {
    _id: '662e5268060547abde7517ab', 
    description: 'Intelligent visual computing is an emerging new fi…383, and COMPSCI 373 (or COMPSCI 473). 3 credits.', 
    id: 'COMPSCI 574', 
    subject: 'COMPSCI', 
    title: 'Intelligent Visual Computing'
  },
  {
    _id: '662e5268060547abde7517ac', 
    description: 'The ability to transmit quantum information over l…STC 515 or PHYSICS 281 or PHYSICS 287). 3 credits', 
    id: 'COMPSCI 590AB', 
    subject: 'COMPSCI', 
    title: 'Quantum Cryptography and Communication'
  },
  // {
  //   _id: '662e5268060547abde7517ad', 
  //   description: 'This course covers wireless networking and mobilit…Prerequisites: COMPSCI 453 or ECE 374. 3 credits.', 
  //   id: 'COMPSCI 590AE', 
  //   subject: 'COMPSCI', 
  //   title: 'Mobile and Wireless Networks'
  // },
  {
    _id: "662e5268060547abde7517b1",
    description: "An introduction to computer programming and problem solving using computers. This course teaches you how real-world problems can be solved computationally using programming constructs and data abstractions of a modern programming language. Concepts and techniques covered include variables, expressions, data types, objects, branching, iteration, functions, classes, and methods. We will also cover how to translate problems into a sequence of instructions, investigate the fundamental operation of a computational system and trace program execution and memory, and learn how to test and debug programs. Open to freshmen, sophomores, and juniors in Computer Science and Informatics. No previous programming experience required. (Gen. Ed. R2) Open to freshmen, sophomores, and juniors in Computer Science and Informatics. Prerequisite: R1 (or a score of 15 or higher on the math placement test Part A), or one of the following courses: MATH 101&102 or MATH 104 or MATH 127 or MATH 128 or MATH 131 or MATH 132. 4 credits.",
    id: "CICS 110",
    subject: "CICS",
    title: "FOUNDATIONS OF PROGRAMMING"
  },
  {
    _id: "662e5268060547abde7517b2",
    description: "This course will expose students to programming practices beyond the introductory level, concentrating on Object Oriented Programming techniques and an introduction to Data Structures. Students will also study and analyze the complexity of both the algorithms presented in class and of the algorithms they develop. This course also provides experience with the development and analysis of recursive algorithms and programs. Before taking this course, students are expected to have been exposed to the following concepts through a college-level course or equivalent in some high level computer programming language: input and output operations, conditional statements, loops, arrays, recursion, and functions/methods. The course places an emphasis on the careful design and testing of programs. (Gen. Ed. R2) Open to freshmen, sophomores, and juniors in Computer Science and Informatics. Prerequisite: CICS 110 (previously INFO 190S) or COMPSCI 121 with a grade of C or above. 4 credits.",
    id: "CICS 160",
    subject: "CICS",
    title: "OBJECT-ORIENTED PROGRAMMING"
  },
  {
    _id: "662e5268060547abde7517b3",
    description: "This course explores the significance of the public sphere - from pamphlets, newspapers and letters to radio, television, the internet and social media - and its relationship to participatory, democratic society. Moving back and forth between the history of the public sphere and contemporary debates about the tensions between media and democracy, students will learn why democracies prescribe protected roles of the media, how media manipulation plays a role in politics, and how media spaces serve as deliberative spaces. Students will write short reaction papers to the readings, which will be used to shape class discussions, and a longer final paper, focused on applying the theories of the public sphere to regulation of contemporary online spaces. This course does not count toward CS or INFORM Major requirements. Cross-listed with COMM/SPP 208. (Gen. Ed. SB) 3 credits.",
    id: "CICS 208",
    subject: "CICS",
    title: "DEFENDING DEMOCRACY IN A DIGITAL WORLD"
  },
  {
    _id: "662e5268060547abde7517b4",
    description: "An introduction to the design, analysis, and implementation of data structures. This course teaches you how to build, test, debug, document, and evaluate objects that encapsulate data and their associated operations using programming constructs and data abstractions of a modern programming language. Concepts and techniques covered include linear and non-linear structures, recursive structures and algorithms, traversal algorithms, binary search trees, balanced trees, priority queues, union-find, hash tables, bloom filters, and graphs. We will also informally compare and contrast the run time efficiency of algorithms and their performance characteristics including the concept of worst-case running time analysis and the classification of algorithms in terms of constant, logarithmic, linear, log linear, quadratic, and exponential time using Big-O notation. (Gen. Ed. R2) Open to freshmen, sophomores, and juniors in Computer Science and Informatics. Prerequisite: CICS 160 (previously INFO 190T) with a grade of C or better. 4 credits.",
    id: "CICS 210",
    subject: "CICS",
    title: "DATA STRUCTURES"
  },
  {
    _id: "662e5268060547abde7517b5",
    description: "The Introduction to Research in the Discipline course is part of the CICS Early Research Scholars Program (ERSP). It provides a group-based, dual-mentored research structure designed to provide a supportive and inclusive first research experience for a large number of early-career Computer Science and Informatics majors. 2 credits.",
    id: "CICS 237",
    subject: "CICS",
    title: "INTRODUCTION TO RESEARCH IN THE DISCIPLINE"
  },
  {
    _id: "662e5268060547abde7517b6",
    description: "Inspired by the Maker movement, this course provides a hands-on introduction to physical computing: sensing and responding to the physical world using computers. Specific topics include: basic electronics and circuit design, microcontroller programming using Arduinos, sensing and responding to the physical world, rapid prototyping (3D printing and laser cutting etc.), soft circuits and wearable electronics. The course will encourage and empower students to invent, design, and build practical hardware projects that interact with the physical world. This course has a required lab section, and counts as one of the CS Lab Science Requirement courses for the BS-CS. Open to freshman and sophomore BS-CS students. Prerequisite: COMPSCI 187 (or CICS 210) with a grade of C or better and completion of the R1 (Basic Math Skills) Gen. Ed. 4 credits.",
    id: "CICS 256",
    subject: "CICS",
    title: "MAKE: A HANDS-ON INTRODUCTION TO PHYSICAL COMPUTING"
  },
  {
    _id: "662e5268060547abde7517b7",
    description: "This seminar is intended to help you become fully prepared to succeed in CICS at UMass. Students in this seminar will be led by an instructor with a detailed understanding of the transfer student experience, and supported by various staff members in CICS. You will learn about which campus and College resources will be most helpful to you, how to best utilize these resources, and where you can look for other opportunities to connect. 1 credit.",
    id: "CICS 291T",
    subject: "CICS",
    title: "SEMINAR - CICS TRANSFER SUCCESS"
  },
  {
    _id: "662e5268060547abde7517b8",
    description: "No matter where you end up in tech, you will...",
    id: "CICS 298A",
    subject: "CICS",
    title: "PRACTICUM - LEADERSHIP: COMMUNICATING ACROSS EXPERTISE"
  },
  {
    _id: "662e5268060547abde7517b9",
    description: "Through a careful analysis and discussion of a range of computing issues, topics, and polices, we will explore various impacts of computers on modern society. This class satisfies the Junior Year Writing requirement by providing directed practice and specific instruction in a range of writing genres. Students will produce approximately 20-25 pages of polished written work over the course of the semester. CICS Primary Majors only. Prerequisite: CS Majors: ENGLWRIT 112 (or English Writing waiver), COMPSCI 220, COMPSCI 230 and COMPSCI 240 (or 250); INFORM Majors: ENGLWRIT 112 (or English Writing waiver) and INFO 248. 3 credits.",
    id: "CICS 305",
    subject: "CICS",
    title: "SOCIAL ISSUES IN COMPUTING"
  },
  {
    _id: "662e5268060547abde7517ba",
    description: "This course is an introduction to computer programming for numerical computing. The course is based on the computer programming language Python and is suitable for students with no programming or numerical computing background who are interested in taking courses in machine learning, natural language processing, or data science. The course will cover fundamental programming, numerical computing, and numerical linear algebra topics, along with the Python libraries that implement the corresponding data structures and algorithms. The course will include hands-on programming assignments and a project. No prior programming experience is required. Familiarity with undergraduate-level probability, statistics and linear algebra is assumed. Does not count toward graduate degrees. Open to Graduate students only. 1 credit.",
    id: "CICS 580",
    subject: "CICS",
    title: "INTRODUCTION TO NUMERICAL COMPUTING WITH PYTHON"
  },
  {
    _id: "662e5268060547abde7517bb",
    description: "A complete introduction to computer programming using the Python language. Topics include coverage of all the supported data types and program code structures, functions (up through lambda expressions and recursion), reasoning about and debugging existing code, implementation of custom libraries, selection of data structures, and the fundamentals of object-oriented programming. Students will create, debug, and run Python 3 programs that explore each of these topics in turn, from simple loops up through the processing of large data sets, and eventually to the creation of professional-quality libraries to synthesize graphics images and audio files. No prior programming experience expected. Open to freshmen and sophomores in any major EXCEPT Computer Science. 3 credits.",
    id: "COMPSCI 119",
    subject: "COMPSCI",
    title: "INTRODUCTION TO PROGRAMMING"
  },
  {
    _id: "662e5268060547abde7517bc",
    description: "This practicum assumes general background and experience in computer programming (such as that provided by COMPSCI 121 or a similar introductory programming course) and some knowledge of data structures. Content will include basic C data types, declarations, expressions, statements, and functions; simple use of macros; some common library calls (such as formatted input/output); basic pointer manipulation using linked lists; and introduction to using standard tools (gcc and make). A required prerequisite for COMPSCI 230, effective Fall 2023. This course is open to Freshmen, Sophomores and Juniors. Prerequisite: COMPSCI 121 with a grade of B or better (or COMPSCI 186 or CICS 160;INFO 190T with a grade of C or better). 1 credit.",
    id: "COMPSCI 198C",
    subject: "COMPSCI",
    title: "PRACTICUM - INTRODUCTION TO THE C PROGRAMMING LANGUAGE"
  },
  {
    _id: "662e5268060547abde7517bd",
    description: "Development of individual skills necessary for designing, implementing, testing and modifying larger programs, including: design strategies and patterns, using functional and object-oriented approaches, testing and program verification, code refactoring, interfacing with libraries. There will be significant programming and mid-term and final examinations. Open to Computer Science majors only. Prerequisite: CICS 210 (or COMPSCI 187) with a grade of C or better. 4 credits.",
    id: "COMPSCI 220",
    subject: "COMPSCI",
    title: "PROGRAMMING METHODOLOGY"
  },
  {
    _id: "662e5268060547abde7517be",
    description: "Large-scale software systems like Google - deployed over a world-wide network of hundreds of thousands of computers - have become a part of our lives. These are systems success stories - they are reliable, available (\"up\" nearly all the time), handle an unbelievable amount of load from users around the world, yet provide virtually instantaneous results. On the other hand, many computer systems don't perform nearly as well as Google - hence the now-clich? \"the system is down.\" In this class, we study the scientific principles behind the construction of high-performance, scalable systems. The course begins with a discussion of C data representation, and moves up the stack from there to the features of modern architectures, assembly languages, and operating system services such as I/O, process, and synchronization. This class assumes students have either taken COMPSCI 198C or have equivalent experience in the C programming language. Open to Computer Science majors only. Prerequisite: CICS 210 (or COMPSCI 187) with a grade of C or above and COMPSCI 198C. 4 credits.",
    id: "COMPSCI 230",
    subject: "COMPSCI",
    title: "COMPUTER SYSTEMS PRINCIPLES"
  },
  {
    _id: "662e5268060547abde7517bf",
    description: "Development of mathematical reasoning skills for problems that involve uncertainty. Each concept will be illustrated by real-world examples and demonstrated through in-class and homework exercises. Counting and probability -- basic counting problems, probability definitions, mean, variance, binomial distribution, discrete random variables, continuous random variables, Markov and Chebyshev bounds, Laws of large numbers, and central limit theorem. Probabilistic reasoning -- conditional probability and odds, Bayes' Law, Markov Chains, Bayesian Networks. Statistical topics such as estimation of parameters and linear regression, as time permits. Open to Computer Science majors only. Prerequisites: COMPSCI 187 (or CICS 160;INFO 190T) and MATH 132 with a grade of C or better.",
    id: "COMPSCI 240",
    subject: "COMPSCI",
    title: "REASONING UNDER UNCERTAINTY"
  },
  {
    _id: "662e5268060547abde7517c0",
    description: "Basic concepts of discrete mathematics useful to computer science: set theory, strings and formal languages, propositional and predicate calculus, relations and functions, basic number theory. Induction and recursion: interplay of inductive definition, inductive proof, and recursive algorithms. Graphs, trees, and search. Finite-state machines, regular languages, nondeterministic finite automata, Kleene's Theorem. Problem sets, 2 midterm exams, timed final. Open to COMPSCI and Math majors only. Prerequisite: a grade of C or better in COMPSCI 187 (or E+C-ENG 241 or CICS160;INFO 190T) and MATH 132. 4 credits.",
    id: "COMPSCI 250",
    subject: "COMPSCI",
    title: "INTRODUCTION TO COMPUTATION"
  },
  {
    _id: "662e5268060547abde7517c1",
    description: "This course will introduce you to a variety of techniques to design algorithms, such as divide and conquer, greedy, dynamic programming, and network flow. You will learn to study the performance of various algorithms within a formal, mathematical framework. You will also learn how to design very efficient algorithms for many kinds of problems and recognize problems that currently do not have efficient algorithms. Assignments may include programming: you should be able to program in Java, C, or some other closely related language. Mathematical experience (as provided by COMPSCI 250) is required. This course is required for the CS Major (BS) and counts as an Elective toward the CS Major (BA). Open to senior and junior Computer Science majors only. Prerequisite: COMPSCI 187 (or CICS 210) and either COMPSCI 250 or MATH 455, all with a grade of C or better.. 4 credits.",
    id: "COMPSCI 311",
    subject: "COMPSCI",
    title: "INTRODUCTION TO ALGORITHMS"
  },
  {
    _id: "662e5268060547abde7517c2",
    description: "In this course, students learn and gain practical experience with software engineering principles and techniques. The practical experience centers on a semester-long team project in which a software development project is carried through all the stages of the software life cycle. Topics in this course include requirements analysis, specification, design, abstraction, programming style, testing, maintenance, communication, teamwork, and software project management. Particular emphasis is placed on communication and negotiation skills and on designing and developing maintainable software. Use of computer required. Several written assignments, in-class presentations, and a term project. This course satisfies the IE Requirement and counts as a CS Elective for the CS Major. Open to senior and junior Computer Science majors only. Prerequisite: COMPSCI 220 with a grade of 'C' or better. 4 credits.",
    id: "COMPSCI 320",
    subject: "COMPSCI",
    title: "INTRODUCTION TO SOFTWARE ENGINEERING"
  },
  {
    _id: "662e5268060547abde7517c3",
    description: "Human-Computer Interaction design is design for human use. Computers are a ubiquitous part of many interactions in our lives, from the mundane everydayness of light switches and smart vending machines to entertainment and education to sophisticated instruments and complex energy and defense systems. In this course, we will challenge you to broaden your grasp of what a user interface can and should be, and try your hand at doing better yourself. It is a fast-paced, hands-on, project-based experience that will challenge many of your ideas of what computer science is and can be. It is designed around active lecture sessions supported by readings, working classes, and team projects, where students practice and explore the concepts introduced in lecture, and go well beyond them to learn and apply HCI techniques that build into group projects. More specifically, the course adopts a human-centered design (HCD) approach and teaches a highly iterative process called design thinking. The design thinking process draws heavily on the fundamentals of human-computer interaction (HCI) methods. I also cover design methodologies, evaluation methodologies (both quantitative and qualitative), human information processing, cognition, and perception. This course counts as a CS Elective toward the CS Major and as a Required Core for the INFORM Major. Open to juniors and seniors in Computer Science or Informatics. Prerequisite: Prerequisites: COMPSCI 187 (or CICS 210) with a grade of C or better OR INFO 248 and COMPSCI 186 (or 187 or CICS 160;INFO 190T) with a grade of C or better. 3 credits.",
    id: "COMPSCI 325",
    subject: "COMPSCI",
    title: "INTRODUCTION TO HUMAN COMPUTER INTERACTION"
  },
  {
    _id: "662e5268060547abde7517c4",
    description: "The web is arguably today's most important application platform. Web browsers run on practically every device, and even many phone applications are in fact web applications under the covers. This course will cover a broad range of client-side web technologies, including HTTP itself, HTML5, CSS, and JavaScript; it will additionally cover key concepts for the server side of web applications, including key value stores and SQL servers. This course will also cover key concepts and technologies including AJAX, JavaScript libraries (e.g., jQuery), and web security. This course is hands-on and heavily project-based; students will construct a substantial dynamic web application based on the concepts, technologies, and techniques presented during lectures and in readings. This course satisfies the IE Requirement and an Elective for both the CS and INFORM Majors. Open to juniors and seniors in Computer Science or Informatics. Prerequisite: COMPSCI 220 (or 230) with a grade of C or better, or INFO 248 and COMPSCI 186 (or 187 or INFO 190T;CICS 160) with a grade of C or better in each. Note: as the name web programming denotes, programming is a key component of this class. Previous background in JavaScript is strongly recommended. 4 credits.",
    id: "COMPSCI 326",
    subject: "COMPSCI",
    title: "WEB PROGRAMMING"
  },
  {
    _id: "662e5268060547abde7517c5",
    description: "The typical smartphone comes equipped with a plethora of sensors for monitoring activity, speech patterns, social interactions, and location. In addition, mobile accessories such as wearable wristbands now enable routine and continuous monitoring of a host of physiological signals (e.g., heart rate, respiratory rate, oxygen saturation, and others.). In conjunction, these sensors can enable higher-order inferences about more complex human activities/behavioral states (e.g., activity patterns, stress, sleep, social interactions, etc.). Such ubiquitous sensing in daily life, referred to as mobile health sensing, promises to revolutionize our understanding of human activities and health conditions. This course is a hands-on introduction to personal health sensing through mobile phones. Please note that this is a *programming-heavy* class so a solid programming background is required. All programming assignments are in Python, so programming experience with *Python* is recommended.This course counts as an Elective for the CS Major. Open to juniors and seniors in Computer Science or Informatics. Prerequisite: COMPSCI 187 (or CICS 210) with a grade of C or better OR INFO 248 and COMPSCI 186 (or 187 or CICS 160;INFO 190T) with a grade of C or better.. 3 credits.",
    id: "COMPSCI 328",
    subject: "COMPSCI",
    title: "MOBILE HEALTH SENSING AND ANALYTICS"
  },
  {
    _id: "662e5268060547abde7517c6",
    description: "How does the computer actually work? In this course we peel away the layers of abstraction and look at how switches become logic circuits, how logic circuits do math, and how programs really execute. We will wire up some simple examples of logic, then move on to programming an embedded ARM processor in a mix of assembly language and C, interfacing with various I/O devices and sensors, to experience what happens when machine code executes. We will also see the impact of hidden acceleration mechanisms like caches, pipelines, and branch predictors. This course counts as a CS Elective for the CS Major. Open to senior and junior Computer Science majors only. Prerequisite: Prerequisite: COMPSCI 220 or 230 with a grade of 'C' or better. 3 credits.",
    id: "COMPSCI 335",
    subject: "COMPSCI",
    title: "INSIDE THE BOX: HOW COMPUTERS WORK"
  },
  {
    _id: "662e5268060547abde7517c7",
    description: "Computing has become data-driven, and databases are now at the heart of commercial applications. The purpose of this course is to provide a comprehensive introduction to the use of data management systems within the context of various applications. Some of the covered topics include application-driven database design, schema refinement, implementation of basic transactions, data on the web, and data visualization. This course counts as a CS Elective toward the CS Major. Students who have completed COMPSCI 445 are not eligible to take this course without instructor permission. Open to juniors and seniors in Computer Science or Informatics. Prerequisite: Prerequisites: COMPSCI 187 (or CICS 210) with a grade of C or better OR INFO 248 and COMPSCI 186 (or 187 or CICS 160;INFO 190T) with a grade of C or better. 3 credits.",
    id: "COMPSCI 345",
    subject: "COMPSCI",
    title: "PRACTICE AND APPLICATIONS OF DATA MANAGEMENT"
  },
  {
    _id: "662e5268060547abde7517c8",
    description: "This course provides an introduction to the principles and practice of computer and network security. A focus on both fundamentals and practical information will be stressed. The three key topics of this course are cryptography, privacy, and network security. Subtopics include ciphers, hashes, key exchange, security services (integrity, availability, confidentiality, etc.), security attacks, vulnerabilities, anonymous communications, and countermeasures. This course counts as a CS Elective for the CS Major. Open to senior and junior Computer Science majors only. Prerequisite: COMPSCI 230 with a grade of 'C' or better. 3 credits.",
    id: "COMPSCI 360",
    subject: "COMPSCI",
    title: "INTRODUCTION TO COMPUTER AND NETWORK SECURITY"
  },
  {
    _id: "662e5268060547abde7517c9",
    description: "A study, analysis, and discussion of the legal issues related to crimes involving computers and networks, including topical actions by dissidents and governments. We will also study the technologies of forensic investigation, intelligence gathering, privacy enhancement, and censorship resistance. Our main legal topics will include recent and important case law, statutes, and constitutional clauses concerning authorization, access, search and seizure, wiretaps, the right to privacy, and FISA. Our technology topics will include methods of investigation and resistance in the context of the Internet and Cellular networks. Students are assumed to have no background in legal concepts. Students will be required to complete substantial legal readings, complete significant written analysis of rulings, learn about technologies in detail, and participate in lively class discussion. This course counts as a CS Elective for the CS Major.Open to senior and junior Computer Science majors only. Prerequisite: Prerequisite: COMPSCI 230 with a grade of 'C' or better AND either ENGLWRIT 112 (with a grade of 'C' or better) or the completion of the 'CW' General Education requirement. 3 credits.",
    id: "COMPSCI 363",
    subject: "COMPSCI",
    title: "COMPUTER CRIME LAW"
  },
  {
    _id: "662e5268060547abde7517ca",
    description: "In this course we examine the important problems in operating system design and implementation. The operating system provides a well-known, convenient, and efficient interface between user programs and the bare hardware of the computer on which they run. The operating system is responsible for allowing resources (e.g., disks, networks, and processors) to be shared, providing common services needed by many different programs (e.g., file service, the ability to start or stop processes, and access to the printer), and protecting individual programs from one another. The course will start with a brief historical perspective of the evolution of operating systems over the last fifty years, and then cover the major components of most operating systems. This discussion will cover the tradeoffs that can be made between performance and functionality during the design and implementation of an operating system. Particular emphasis will be given to three major OS subsystems: process management (processes, threads, CPU scheduling, synchronization, and deadlock), memory management (segmentation, paging, swapping), file systems, and operating system support for distributed systems. This course counts as a CS Elective for the CS Major. Open to senior and junior Computer Science majors only. Prerequisite: COMPSCI 230 with a grade of 'C' or better. 4 credits.",
    id: "COMPSCI 377",
    subject: "COMPSCI",
    title: "OPERATING SYSTEMS"
  },
  {
    _id: "662e5268060547abde7517cb",
    description: "This course aims to give students a high level understanding of the prominent AI topics that are being employed in industry today. It will provide an introduction to each topic, an overview of its supporting algorithms, and examples of products powered by the technology. Particular emphasis will be had on Machine Learning and developing hands-on practical skills with this technology. Upon completion of this course, students will obtain a wider scope of understanding about modern AI trends in software technology and develop an intuition for how this software works. To succeedin this course, students will need a fundamental understanding of data structures and programming fundamentals. Graph and tree data structures will be used in particular. Programming assignments in this class will be done using Python. Experience in at least one programming language is required and it s strongly recommended you have some Python experience before starting. A mathematical foundation in statistics and linear algebra is not strictly necessary but will deepen understanding of course material. Open to senior and junior Computer Science majors only. This course counts as an Elective toward the CS and INFORM Majors. Prerequisite: COMPSCI 220 (or COMPSCI 230) and COMPSCI 240 (or STATISTC 515). 3 credits.",
    id: "COMPSCI 383",
    subject: "COMPSCI",
    title: "ARTIFICIAL INTELLIGENCE"
  },
  {
    _id: "662e5268060547abde7517cc",
    id: "COMPSCI 410",
    subject: "COMPSCI",
    title: "COMPILER TECHNIQUES",
    description: "This course explores the basic problems in the translation of programming languages focusing on theory and common implementation techniques for compiling traditional block structured programming languages to produce assembly or object code for typical machines. The course involves a substantial laboratory project in which the student constructs a working compiler for a considerable subset of a realistic programming language, within a provided skeleton. The lectures are augmented by a discussion section that covers details of the programming language used to build the compiler, the operating system, the source language, and various tools. Use of computer required. Text: Engineering a Compiler, Cooper and Torczon. Open to senior and junior Computer Science majors only. This course counts as an Elective toward the CS Major. Prerequisites: COMPSCI 230 and either COMPSCI 250 or MATH 455, all with a grade of C or better.. 3 credits."
  },
  {
    _id: "662e5268060547abde7517cd",
    id: "COMPSCI 420",
    subject: "COMPSCI",
    title: "SOFTWARE ENTREPRENEURSHIP",
    description: "This course is geared towards students interested in developing software that moves from early stage proof-of-concept ideas towards marketable products with societal benefit. The course leverages the expertise of the Entrepreneurs in Residence (EIR) of the Ventures @ CICS initiative at CICS. The course is grounded in Challenge Based Learning (CBL), an active, student-directed instructional framework that was developed by Apple Inc. and educators. This course counts as a CS Elective for the CS Major. Open to juniors and seniors in Computer Science or Informatics. Students enrolled in the Undergraduate Certificate in Public Interest Technology are eligible via override. 3 credits."
  },
  {
    _id: "662e5268060547abde7517ce",
    id: "COMPSCI 429",
    subject: "COMPSCI",
    title: "SOFTWARE ENGINEERING PROJECT MANAGEMENT",
    description: "The purpose of this course is to provide students with practical experience in the management of software development projects. Students in this course will gain this experience by serving as software development team technical managers for teams of software engineering students in COMPSCI 320. As project managers, the students in COMPSCI 429 will be responsible for: supervising and managing the work of teams of COMPSCI 320 students; interfacing with the other COMPSCI 429 students managing other teams in the course; interfacing with the course instructor, course TA, and course customer. COMPSCI 429 students will be assigned readings in software engineering project management to provide a theoretical basis for their work in this course. But the majority of work in the course will be related to the actual management of assigned development teams. As team managers, COMPSCI 429 students will set goals and schedules for their teams, track and report team progress, negotiate with leaders of other teams and the course customer, and evaluate the work of members of their teams. COMPSCI 429 course assignments may include: written team goals, plans and schedules; periodic reports on team progress; documentation of agreements reached with other team leaders and customers; evaluations of the applicability of theoretical papers to the work of this course. This course will meet at the same times and places as COMPSCI 320. Additional meetings with team members and other students in COMPSCI 429 are also expected to be arranged by mutual agreement An additional one hour weekly meeting of all of the students in COMPSCI 429 is required. This course counts as a CS Elective for the CS Major. Open to undergraduate Computer Science majors only. Enrollment in this course is only by permission of the instructor, and is restricted to students who have previously taken COMPSCI 320, and received a grade of B or better. 3 credits."
  },
  {
    _id: "662e5268060547abde7517cf",
    id: "COMPSCI 445",
    subject: "COMPSCI",
    title: "INFORMATION SYSTEMS",
    description: "This course is an introduction to the efficient management of large-scale data. The course includes principles for representing information as structured data, query languages for analyzing and manipulating structured data, and core systems principles that enable efficient computation on large data sets. Classical relational database topics will be covered (data modeling, SQL, query optimization, concurrency control), as well as semi-structured data (XML, JSON), and distributed data processing paradigms (e.g. MapReduce and Spark). Additional application topics may include web application development, data integration, processing data streams, database security and privacy. Open to senior and junior Computer Science majors only. This course counts as an Elective toward the CS Major. Prerequisites: COMPSCI 220 (or 230) and COMPSCI 311 and COMPSCI 345 with a grade of C or better. 3 credits."
  },
  {
    _id: "662e5268060547abde7517d0",
    id: "COMPSCI 446",
    subject: "COMPSCI",
    title: "SEARCH ENGINES",
    description: "This course provides an overview of the important issues in information retrieval, and how those issues affect the design and implementation of search engines. The course emphasizes the technology used in Web search engines, and the information retrieval theories and concepts that underlie all search applications. Mathematical experience (as provided by COMPSCI 240) is required. You should also be able to program in Java or Python (other closely related languages may be acceptable) Open to senior and junior Computer Science majors only. This course counts as a CS Elective for the CS Major. Prerequisite: Prerequisite: COMPSCI 240 or COMPSCI 383 with a grade of 'C' or better. 3 credits."
  },
  {
    _id: "662e5268060547abde7517d1",
    id: "COMPSCI 453",
    subject: "COMPSCI",
    title: "COMPUTER NETWORKS",
    description: "This course provides an introduction to fundamental concepts in the design and implementation of computer networks, their protocols, and applications with a particular emphasis on the Internet's TCP/IP protocol suite. Topics to be covered include: overview of network architectures, applications, network programming interfaces (e.g., sockets), transport, congestion, routing, and data link protocols, addressing, local area networks, wireless networks, network security, and network management. There will be five or six homeworks, two programming projects, several hands-on labs (that require an Internet-connected personal computer) and two exams. Open to senior and junior Computer Science majors only. This course counts as a CS Elective for the CS Major. Prerequisite: COMPSCI 230 (or COMPSCI 377) with a grade of 'C' or better. 3 credits."
  },
  {
    _id: "662e5268060547abde7517d2",
    id: "COMPSCI 461",
    subject: "COMPSCI",
    title: "SECURE DISTRIBUTED SYSTEMS",
    description: "This is a class devoted to the study of securing distributed systems, with blockchain-based cryptocurrencies serving as our real platform of interest. We'll start with the fundamentals of Lamport's, Fischer's, and Douceur's results that fence-in all consensus system, and discuss Byzantine fault tolerance. We'll also look at the efficiency of the network architectures for peer-to-peer/distributed system communication and attacks on their security, such as denial of service attacks. And we'll review relevant applied cryptography such as elliptic curves. We ll discuss in detail the mechanisms of Bitcoin and Ethereum and we ll program distributed applications for Ethereum. Other topics include economics and finance. Assignments will include programming projects and reading research papers. The grade is also based on exams and participation in discussion. The course is based on a flipped classroom and uses a hybrid instruction model. Some of the course content is delivered online, however students are required to attend weekly class meetings. This course counts as a CS Elective for the CS Major, as well an Any 2 menu choice for the former Security & Privacy track. Open to Computer Science majors only. Prerequisite: COMPSCI 326, COMPSCI 345, COMPSCI 377, COMPSCI 453, or COMPSCI 497P with a grade of C or better. 3 credits."
  },
  {
    _id: "662e5268060547abde7517d3",
    id: "COMPSCI 485",
    subject: "COMPSCI",
    title: "APPLICATIONS OF NATURAL LANGUAGE PROCESSING",
    description: "This course will introduce NLP methods and applications, such as text classification, sentiment analysis, machine translation, and other applications to identify and use the meaning of text. During the course, students will (1) learn fundamental methods and algorithms for NLP; (2) become familiar with key facts about human language that motivate them, and help practitioners know what problems are possible to solve; and (3) complete a series of hands-on projects to use, implement, experiment with, and improve NLP tools. This course counts as a CS Elective for the CS Major. Prerequisite: COMPSCI 220 and COMPSCI 240, or LINGUIST 429B (previously LINGUIST 492B). 3 credits."
  },
  {
    _id: "662e5268060547abde7517d4",
    id: "COMPSCI 490Q",
    subject: "COMPSCI",
    title: "QUANTUM INFORMATION SCIENCE",
    description: "Quantum information science (QIS) revolutionizes our understanding of the fundamental laws of the universe and promises world-altering improvements in a number of practical computational tasks. For theoretical computer scientists, QIS provides the means to unlock the ultimate computational powers available to us in this universe. For programmers and computer engineers, QIS offers the tools to run simulations and optimizations otherwise infeasible on classical computers. For theoretical physicists, QIS gives us hope of resolving paradoxes foundational to our understanding of Nature. And for experimentalists and engineers, QIS also enables the creation of exquisite sensors and novel communication tools, far outperforming what is classically permitted. This class will introduce the notion of quantum probability amplitudes, i.e., the 'correct' probabilistic description of Nature, and describe how these quantum phenomena permit the creation of new types of computational machines. The introduction to foundational quantum information science will be followed by a few practical (and impractical) quantum algorithms, illustrating the counterintuitive computational powers of quantum mechanics. The latter half of the class would focus on the difficulties of creating such extremely fragile computational machines in our noisy and unforgiving real world. This course counts as a CS Elective for the CS Major. Open to junior and senior Computer Science and Informatics majors. Prerequisite: Math 132 and 235 and either COMPSCI 240 or STATISTIC 315;515, all with a grade of C or better. 3 credits."
  },
  {
    _id: "662e5268060547abde7517d5",
    id: "COMPSCI 514",
    subject: "COMPSCI",
    title: "ALGORITHMS FOR DATA SCIENCE",
    description: "With the advent of social networks, ubiquitous sensors, and large-scale computational science, data scientists must deal with data that is massive in size, arrives at blinding speeds, and often must be processed within interactive or quasi-interactive time frames. This course studies the mathematical foundations of big data processing, developing algorithms and learning how to analyze them. We explore methods for sampling, sketching, and distributed processing of large scale databases, graphs, and data streams for purposes of scalable statistical description, querying, pattern mining, and learning. This course counts as a CS Elective for the CS Major. Open to Junior and Senior COMPSCI students. Undergraduate Prerequisite: COMPSCI 240 (or STATISTCS 515) and COMPSCI 311 with a grade of B+ or better in both, OR COMPSCI 240, STATISTCS 515, COMPSCI 311, Math 233, and Math 235 with a grade of C or better in each. 3 credits."
  },
  {
    _id: "662e5268060547abde7517d6",
    id: "COMPSCI 515",
    subject: "COMPSCI",
    title: "ALGORITHMS, GAME THEORY AND FAIRNESS",
    description: "Recent years have seen a dramatic rise in the use of algorithms for solving problems involving strategic decision makers. Deployed algorithms now assist in a variety of economic interactions: assigning medical residents to schools, allocating students to courses, allocating security resources in airports, allocating computational resources and dividing rent. We will explore foundational topics at the intersection of economics and computation, starting with the foundations of game theory: Nash equilibria, the theory of cooperative games, before proceeding to covering more advanced topics: matching algorithms, allocation of indivisible goods, and mechanism design. Open to junior and senoir Computer Science students. This course counts as a CS Elective for the CS Major. Undergraduate Prerequisite: COMPSI 240 and 250 with a grade of C or better in both. 3 credits."
  },
  {
    _id: "662e5268060547abde7517d7",
    id: "COMPSCI 520",
    subject: "COMPSCI",
    title: "THEORY AND PRACTICE OF SOFTWARE ENGINEERING",
    description: "Introduces students to the principal activities and state-of-the-art techniques involved in developing high-quality software systems. Topics include: requirements engineering, formal specification methods, design principles & patterns, verification & validation, debugging, and automated software engineering. This course counts as a CS Elective for the CS Major.Open to junior and senior Computer Science students. Undergraduate Prerequisites: COMPSCI 320 (or COMPSCI 220 and 326) with a grade of C or better. 3 credits."
  },
  {
    _id: "662e5268060547abde7517d8",
    id: "COMPSCI 528",
    subject: "COMPSCI",
    title: "MOBILE AND UBIQUITOUS COMPUTING",
    description: "This course will introduce students to the field of mobile sensing and ubiquitous computing (Ubicomp) an emerging CS research area that aims to design and develop disruptive technologies with hardware and software systems for real-world messy, noisy and mobile scenarios. The students will learn how to build mobile sensing systems, how to implement it with ubiquitous computing tools, how to make sense of the sensor data and model the target variables. Lastly, the students will learn how to critically think about problems in many application areas including Human-Computer Interaction, Medicine, Sustainability, Transportation, Psychology and Economics, and subsequently practice to find appropriate Ubicomp solutions. There is no exam in this course. The student is expected to work on different hands-on assignments, critique writing, and a final project. This course counts as an Elective toward the CS Major. Open to senior and junior Computer Science majors only Undergraduate Prerequisites: COMPSCI 230 and 240 with a grade of C or better. 3 credits."
  },
  {
    _id: "662e5268060547abde7517d9",
    id: "COMPSCI 532",
    subject: "COMPSCI",
    title: "SYSTEMS FOR DATA SCIENCE",
    description: "In this course, students will learn the fundamentals behind large-scale systems in the context of data science. We will cover the issues involved in scaling up (to many processors) and out (to many nodes) parallelism in order to perform fast analyses on large datasets. These include locality and data representation, concurrency, distributed databases and systems, performance analysis and understanding. We will explore the details of existing and emerging data science platforms, including MapReduce-Hadoop, Spark, and more. This course counts as a CS Elective for the CS Major. Open to junior and senior Computer Science students. Undergraduate Prerequisites: COMPSCI 377 and 445 with a grade of C or better in each. 3 credits."
  },
  {
    _id: "662e5268060547abde7517da",
    id: "COMPSCI 560",
    subject: "COMPSCI",
    title: "INTRODUCTION TO COMPUTER AND NETWORK SECURITY",
    description: "This course provides an introduction to the principles and practice of computer and network security with a focus on both fundamental principles and practical applications through hands-on approach. Many of the principles are taught through examples. The key topics of this course are a brief introduction to computer networking; applied cryptography; protecting users, data, and services; network security, and common threats and defense strategies. Students will complete a number of practical lab assignments as well as auto-graded quizzes/assignments. This course counts as a CS Elective for the CS Major. Open to undergraduate COMPSCI and CS-ENG students Undergraduate Prerequisite: COMPSCI 453 or E&C-ENG 374 with a grade of C or better. 3 credits."
  },
  {
    _id: "662e5268060547abde7517db",
    id: "COMPSCI 563",
    subject: "COMPSCI",
    title: "INTERNET LAW AND POLICY",
    description: "This course is meant for those looking for legal knowledge for use in computing- and Internet-related endeavors. The course will include topics related to security, policy, and the use of machine learning and related technologies. In additional, students will be assigned law review articles and will learn to do legal research so that they can remain updated after the course ends. Topics covered are all in the context of the ubiquity of the Internet and computing, and they include: basic legal principles, contract law, substantive laws, intellectual property law, ethics, dealing with third parties, policy issues, and topical issues such as implications of applying machine learning technology. This course was formerly numbered as INFOSEC 690L. This course counts as a CS Elective for the CS Major. Open to junior and senior Computer Science students. Undergraduate Prerequisite: either COMPSCI 311, 383, or 360 (previously 460) with a grade of C or better. 3 credits."
  },
  {
    _id: "662e5268060547abde7517dc",
    id: "COMPSCI 575",
    subject: "COMPSCI",
    title: "COMBINATORICS AND GRAPH THEORY",
    description: "This course is a basic introduction to combinatorics and graph theory for advanced undergraduates in computer science, mathematics, engineering and science. Topics covered include: elements of graph theory; Euler and Hamiltonian circuits; graph coloring; matching; basic counting methods; generating functions; recurrences; inclusion-exclusion; and Polya's theory of counting. This course counts as an Elective toward the CS Major. Open to juniors and seniors. Undergraduate Prerequisites: either COMPSCI 250 or MATH 455 with a grade of B or better. Modern Algebra - MATH 411 - is helpful but not required. 3 credits."
  },
  {
    _id: "662e5268060547abde7517dd",
    id: "COMPSCI 576",
    subject: "COMPSCI",
    title: "GAME PROGRAMMING",
    description: "Game Programming introduces students to concepts of computer game development, including 2D and 3D modeling, character design, animation, game art, basic game AI, audio and video effects. The course will help students build the programming skills needed to turn ideas into games. Both runtime systems and the asset pipelines will be covered. Students will work on various game programming exercises with modern game engines and graphics APIs. This course counts as a CS Elective for the CS Major (BA or BS). Open to Computer Science juniors and seniors Undergraduate Prerequisites: COMPSCI 311 with a grade of C or better (or COMPSCI 250 with a grade of B+ or better) and received a grade of C or better in COMPSCI 220 and MATH 235. 3 credits."
  },
  {
    _id: "662e5268060547abde7517de",
    id: "COMPSCI 589",
    subject: "COMPSCI",
    title: "MACHINE LEARNING",
    description: "This course will introduce core machine learning models and algorithms for classification, regression, clustering, and dimensionality reduction. On the theory side, the course will focus on effectively using machine learning methods to solve real-world problems with an emphasis on model selection, regularization, and empirical evaluation. The assignments will involve both mathematical problems and implementation tasks. Knowledge of a high-level programming language is absolutely necessary. Python is most commonly used (along with standard libraries such as numpy, scipy, and scikit-learn), but languages such as Matlab, R, Scala, Julia would also be suitable. While this course has an applied focus, it still requires appropriate mathematical background in probability and statistics, calculus, and linear algebra. The prerequisites for undergrads were previously COMPSCI 383 and MATH 235 (COMPSCI 240 provides sufficient background in probability, and MATH 131/132 provide sufficient background in calculus). Graduate students can check the descriptions for these courses to verify that they have sufficient mathematical background for 589. Strong foundations in linear algebra, calculus, probability, and statistics are essential for successfully completing this course. Graduate students from outside computer science with sufficient background are also welcome to take the course. This course counts as a CS Elective for the CS Major. Open to Sr/Jr CS majors.Undergraduate Prerequisites: a grade of C or better in MATH 545, STAT 315/515 & CS 240; OR a C or better in MATH 545 & B+ or better in CS 240; OR a C or better in STAT 315/515 & CS 240 and B+ or better in MATH 233 & 235; OR B+ or better in CS 240, MATH 233 & 235 3 credits."
  }
  
]
