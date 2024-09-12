import img0 from "../../img/blogs/andreasRodriguez.webp";
import img1 from "../../img/blogs/paulaArismendi.webp";
import img2 from "../../img/blogs/solomonStanford.webp";

const authors = [
  {
    id: "0",
    image: img0.src,
    name: "Andreas Rodriguez",
    bio: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa dolore
      dolores voluptas at cum ullam? Temporibus voluptate omnis eveniet quae
      ipsa velit. Accusantium enim tenetur quaerat? Veniam quam repellendus
      ducimus.`,
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
    bio: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa dolore
      dolores voluptas at cum ullam? Temporibus voluptate omnis eveniet quae
      ipsa velit. Accusantium enim tenetur quaerat? Veniam quam repellendus
      ducimus.`,
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
    bio: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa dolore
      dolores voluptas at cum ullam? Temporibus voluptate omnis eveniet quae
      ipsa velit. Accusantium enim tenetur quaerat? Veniam quam repellendus
      ducimus.`,
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
