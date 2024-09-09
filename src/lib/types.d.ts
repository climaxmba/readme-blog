interface Comment {
  author: string;
  message: string;
  rating: number;
}

interface Blog {
  id: string;
  image: string;
  content: string;
  title: string;
  date: string;
  comments: Comment[];
}

interface BlogItemProps {
  id: string;
  image: string;
  title: string;
  date: string;
}
