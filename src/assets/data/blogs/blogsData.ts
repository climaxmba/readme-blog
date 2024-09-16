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
    authorId: "0",
    image: "https://images.pexels.com/photos/17489156/pexels-photo-17489156/free-photo-of-computer-server-in-data-center-room.jpeg?auto=compress&cs=tinysrgb&w=640&dpr=1",
    content: blog0,
    categories: ["JavaScript"],
  },
  {
    id: "1",
    title: "JSX vs JS: A Deep Dive",
    date: "10th Sep., 2024",
    author: "Paula Arismendi",
    authorId: "1",
    image: "https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=640&dpr=1",
    content: blog1,
    categories: ["JavaScript", "React"],
  },
  {
    id: "2",
    title: "CSS Animations: Bringing Your Web Pages to Life",
    date: "10th Sep., 2024",
    author: "Paula Arismendi",
    authorId: "1",
    image: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=640&dpr=1",
    content: blog2,
    categories: ["CSS"],
  },
  {
    id: "3",
    title: "CSS Preprocessors: Enhancing Your Styling Workflow",
    date: "10th Sep., 2024",
    author: "Andreas Rodriguez",
    authorId: "0",
    image: "https://images.pexels.com/photos/248515/pexels-photo-248515.png?auto=compress&cs=tinysrgb&w=640&dpr=1",
    content: blog3,
    categories: ["CSS"],
  },
  {
    id: "4",
    title: "WebAssembly in JavaScript: A Powerful Tool for Performance",
    date: "10th Sep., 2024",
    author: "Solomon Stanford",
    authorId: "2",
    image: "https://images.pexels.com/photos/3665443/pexels-photo-3665443.jpeg?auto=compress&cs=tinysrgb&w=600",
    content: blog4,
    categories: ["JavaScript", "WebAssembly"],
  },
];

export default blogs;
