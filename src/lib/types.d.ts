interface Comment {
  author: string;
  message: string;
}

interface Blog {
  id: string;
  image: string;
  content: string;
  title: string;
  date: string;
  author: string;
  categories: string[];
  comments: Comment[];
}

interface BlogItemProps {
  id: string;
  image: string;
  title: string;
  date: string;
}
