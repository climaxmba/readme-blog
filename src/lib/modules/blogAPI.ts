interface Cache {
  blogs: Blog[] | null;
  authors: Author[] | null;
  categories: string[] | null;
}

const blogAPI = (() => {
  const _cache: Cache = { blogs: null, authors: null, categories: null };

  async function getBlogs(): Promise<Blog[]> {
    if (_cache.blogs !== null) return _cache.blogs;

    const response = await fetch("/api/blogs");
    if (response.ok) {
      const blogs = await response.json();
      _cache.blogs = blogs;
      return blogs;
    }

    throw new Error(response.statusText);
  }

  async function getBlogById(id: string): Promise<Blog> {
    if (_cache.blogs !== null) {
      const [blog] = _cache.blogs.filter((elem) => elem.id === id);
      if (blog) return blog;
      else new Error("Blog not found!");
    }

    const response = await fetch(`/api/blogs/${id}`);
    if (response.ok) {
      const blog = await response.json();
      return blog;
    }

    throw new Error(response.statusText);
  }

  async function getCategories(): Promise<string[]> {
    if (_cache.categories !== null) return _cache.categories;

    const response = await fetch("/api/categories");
    if (response.ok) {
      const categories = await response.json();
      _cache.categories = categories
      return categories;
    }

    throw new Error(response.statusText);
  }

  async function getAuthors(): Promise<Author[]> {
    if (_cache.authors !== null) return _cache.authors;

    const response = await fetch("/api/authors");
    if (response.ok) {
      const authors = await response.json();
      _cache.authors = authors
      return authors;
    }

    throw new Error(response.statusText);
  }

  async function getAuthorById(id: string): Promise<Author> {
    if (_cache.authors !== null) {
      const [author] = _cache.authors.filter((elem) => elem.id === id);
      if (author) return author;
      else new Error("Blog not found!");
    }

    const response = await fetch(`/api/authors/${id}`);
    if (response.ok) {
      const author = await response.json();
      return author;
    }

    throw new Error(response.statusText);
  }

  return { getBlogs, getBlogById, getCategories, getAuthors, getAuthorById };
})();

export default blogAPI;
