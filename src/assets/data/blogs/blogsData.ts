import blog0 from "./0.md";
import blog1 from "./1.md";
import blog2 from "./2.md";
import blog3 from "./3.md";
import blog4 from "./4.md";

const blogs = [
  {
    id: "0",
    title: "WebSockets: Real-Time Communication in Web Applications",
    date: "10th Sep., 2024",
    author: "Andreas Rodriguez",
    image: "",
    content: blog0,
    categories: ["JavaScript"],
    comments: [
      {
        author: "Sophia",
        message: "Insightful",
      },
    ],
  },
  {
    id: "1",
    title: "JSX vs JS: A Deep Dive",
    date: "10th Sep., 2024",
    author: "Paula Arismendi",
    image: "",
    content: blog1,
    categories: ["JavaScript", "React"],
    comments: [
      {
        author: "Kyle",
        message: "Cool!",
      },
    ],
  },
  {
    id: "2",
    title: "CSS Animations: Bringing Your Web Pages to Life",
    date: "10th Sep., 2024",
    author: "Paula Arismendi",
    image: "",
    content: blog2,
    categories: ["CSS"],
    comments: [
      {
        author: "Sophia",
        message: "Insightful",
      },
    ],
  },
  {
    id: "3",
    title: "CSS Preprocessors: Enhancing Your Styling Workflow",
    date: "10th Sep., 2024",
    author: "Andreas Rodriguez",
    image: "",
    content: blog3,
    categories: ["CSS"],
    comments: [
      {
        author: "Kyle",
        message: "Insightful",
      },
    ],
  },
  {
    id: "4",
    title: "WebAssembly in JavaScript: A Powerful Tool for Performance",
    date: "10th Sep., 2024",
    author: "Solomon Stanford",
    image: "",
    content: blog4,
    categories: ["JavaScript", "WebAssembly"],
    comments: [
      {
        author: "Donald",
        message: "Awesome 😀",
      },
    ],
  },
];

export default blogs;
