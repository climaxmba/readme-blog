import img0 from "../../img/blogs/andreasRodriguez.webp";
import img1 from "../../img/blogs/paulaArismendi.webp";
import img2 from "../../img/blogs/solomonStanford.webp";

const authors: Author[] = [
  {
    id: "0",
    image: img0.src,
    name: "Andreas Rodriguez",
    bio: `I am a dedicated frontend developer with 6 years of experience crafting engaging web applications.
      My expertise lies in React, Angular and Vue.
      I am passionate about staying up-to-date with the latest frontend trends and sharing my knowledge through this blog.`,
    blogs: [
      {
        id: "0",
        title: "WebSockets: Real-Time Communication in Web Applications",
        date: "10th Sep., 2024",
        image:
          "https://images.pexels.com/photos/17489156/pexels-photo-17489156/free-photo-of-computer-server-in-data-center-room.jpeg?auto=compress&cs=tinysrgb&w=640&dpr=1",
      },
      {
        id: "3",
        title: "CSS Preprocessors: Enhancing Your Styling Workflow",
        date: "10th Sep., 2024",
        image: "",
      },
    ],
  },
  {
    id: "1",
    image: img1.src,
    name: "Paula Arismendi",
    bio: `Hey there! I'm a frontend developer who's been coding my way into the digital world for 4 years.
      I'm all about building sleek, user-friendly interfaces that make people go "wow."
      Whether it's with React, Angular, or a sprinkle of vanilla JavaScript, I love the challenge of turning ideas into reality.`,
    blogs: [
      {
        id: "1",
        title: "JSX vs JS: A Deep Dive",
        date: "10th Sep., 2024",
        image:
          "https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=640&dpr=1",
      },
      {
        id: "2",
        title: "CSS Animations: Bringing Your Web Pages to Life",
        date: "10th Sep., 2024",
        image:
          "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=640&dpr=1",
      },
    ],
  },
  {
    id: "2",
    image: img2.src,
    name: "Solomon Stanford",
    bio: `Hey there! I'm a software engineer who loves diving deep into the world of code.
      I've been building things with computers since I was a kid, and I'm still just as excited about it as ever.
      I'm passionate about sharing my knowledge and helping others learn and grow in this field.`,
    blogs: [
      {
        id: "4",
        title: "WebAssembly in JavaScript: A Powerful Tool for Performance",
        date: "10th Sep., 2024",
        image:
          "https://images.pexels.com/photos/3665443/pexels-photo-3665443.jpeg?auto=compress&cs=tinysrgb&w=600",
      },
    ],
  },
];

export default authors;
