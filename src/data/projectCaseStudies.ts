interface CaseStudy {
  challenge: string;
  solution: string;
  architectureDecisions: string[];
}
export const caseStudies: Record<number, CaseStudy> = {
  1: {
    challenge: 'The primary goal was to demonstrate full-stack proficiency by building a scalable, fully-functional blogging platform (Blogify). The complexity involved managing user sessions, rich text editing, and relational data integrity.',
    solution: 'I chose the PERN stack to show my ability to build a robust, type-safe environment. The architecture uses Express for a clean API, JWT for secure auth, and PostgreSQL with proper indexing for fast query response.',
    architectureDecisions: [
        'Implemented the useReducer and useContext pattern for predictable global state management.',
        'Utilized Express and Node.js for a non-blocking API layer, ensuring high concurrency.',
        'Designed a normalized PostgreSQL schema and implemented SQL indexing for efficient query execution.',
        'Enforced strict TypeScript typing across both the React frontend and the Express backend.',
    ]
  },
  2: {
  challenge: 'The primary challenge was building a full-stack development planner that helps users set, track, and share professional goals with a smooth UX. I needed to handle authentication, relational tasks with goals, secure APIs, and a mentor feedback system without compromising scalability.',
  solution: 'I used a PERN stack with React and a RESTful Express API to create a clean, modular architecture. JWT authentication provided secure session control, and PostgreSQL stored relational goal-task data efficiently, while Docker ensured consistent local and deployment environments.',
  architectureDecisions: [
    'Chose React with Vite on the frontend for fast dev feedback and clean component structure.',
    'Separated authentication and private routes using JSON Web Tokens (JWT) to enforce user security.',
    'Designed RESTful API endpoints in Express to manage goals, tasks, and mentor feedback cleanly.',
    'Structured PostgreSQL with migrations to maintain data integrity and support relational task tracking.',
  ]
},
3: {
  challenge: 'The main challenge of this project was refining a basic chat application into a more robust and feature-rich real-time communication platform. I needed to handle bidirectional messaging, frontend state sync, API communication, and a responsive UI while keeping the architecture maintainable.',
  solution: 'I built a full-stack chat app with a clear separation between frontend and backend. The frontend handles real-time user interaction and renders messages dynamically, while the backend manages message routing, persistence, and any additional features like user handling and chat history.',
  architectureDecisions: [
    'Separated the project into distinct frontend and backend folders to keep concerns modular and logical.',
    'Used WebSockets (or an equivalent real-time protocol) for delivering messages instantly between clients and server.',
    'Structured frontend with reusable components and state management for chat messages and user data.',
    'Designed backend endpoints and real-time handlers to ensure messages are relayed efficiently and reliably.',
  ]
},
4: {
  challenge: 'The main challenge was building a real-time collaborative whiteboard from scratch using Vanilla JavaScript and Node/Express. I needed reliable bidirectional communication for drawing, text, shapes, and math formula rendering while keeping history persistent for new users.',
  solution: 'I built a full-stack real-time collaboration app using Socket.io for WebSocket communication, a Node/Express backend to manage connections, and a Vanilla JS frontend with Canvas API for rendering. I also implemented history replay and advanced bug fixes for race conditions and silent broadcasts.',
  architectureDecisions: [
    'Used Socket.io on both server and client to handle real-time broadcasts efficiently.',
    'Chose HTML Canvas API for lightweight, high-performance drawing and shape rendering.',
    'Separated history fetching via HTTP GET from live real-time events to avoid echo loops.',
    'Handled asynchronous math formula rendering with timestamping to prevent outdated draws.',
  ]
},
5: {
  challenge: 'The key challenge was building an interactive leaderboard that fetches and compares Codewars user statistics from the public API. Handling multiple asynchronous requests, filtering by language, and keeping the UI responsive while sorting dynamic data was the main complexity.',
  solution: 'I created a JavaScript-driven web app that consumes the Codewars API, processes user stats, and generates a dynamic leaderboard. Users can input multiple usernames, and the app fetches their kata completion data, ranks them, and lets you filter by language.',
  architectureDecisions: [
    'Used modern ES Modules in vanilla JavaScript to keep dependencies minimal and the logic modular.',
    'Structured fetching and data transformation separate from UI rendering to keep the code maintainable.',
    'Added language filtering to allow ranking either overall or by specific language skill sets.',
    'Integrated Jest and Babel for robust testing of the data processing functions.',
  ]
},
6: {
  challenge: 'The main challenge was building a dynamic TV show explorer that fetches data from the TVMaze API and displays it in a user-friendly way. I needed to handle external API responses, transform episode and show data, and build navigation and filtering while keeping performance and accessibility in mind.',
  solution: 'I built a frontend app using Vanilla JavaScript, HTML, and CSS that consumes the TVMaze API to fetch TV show and episode information, then renders it interactively in the browser. The project separates data fetching from DOM rendering so the app remains maintainable as the feature set grows.',
  architectureDecisions: [
    'Consumed the TVMaze API using fetch and asynchronous JavaScript to handle external data cleanly.',
    'Kept UI logic separate from data logic by modularising functions for fetching, filtering, and rendering.',
    'Used semantic HTML and CSS for accessible structure and responsive presentation.',
    'Structured the code in levels to progressively add features, following the CodeYourFuture project guidelines.',
  ]
}
};
export const getCaseStudyById = (id: number): CaseStudy | undefined => {
    return caseStudies[id];
}