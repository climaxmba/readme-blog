interface Blog {
  id: string;
  image: string;
  content: string;
  title: string;
  date: string;
  author: string;
  authorId: string;
  categories: string[];
}

interface BlogItemProps {
  id: string;
  image: string;
  title: string;
  date: string;
}

interface Author {
  id: string;
  image: string;
  name: string;
  bio: string;
  blogs: {
    id: string;
    title: string;
    date: string;
    image: string;
  }[];
}
