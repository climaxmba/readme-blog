const blogAPI = (() => {
  async function getBlogs(): Promise<Blog[]> {
    const response = await fetch("/api/blogs");
    if (response.ok) {
      const blogs = await response.json();
      return blogs;
    }

    throw new Error(response.statusText);
  }

  async function getBlogById(id: string): Promise<Blog> {
    const response = await fetch(`/api/blogs/${id}`);
    if (response.ok) {
      const blog = await response.json();
      return blog;
    }

    throw new Error(response.statusText);
  }

  async function getCategories(): Promise<string[]> {
    const response = await fetch("/api/categories");
    if (response.ok) {
      const blogs = await response.json();
      return blogs;
    }

    throw new Error(response.statusText);
  }

  async function getAuthors(): Promise<Author[]> {
    const response = await fetch("/api/authors");
    if (response.ok) {
      const authors = await response.json();
      return authors;
    }

    throw new Error(response.statusText);
  }

  async function getAuthorById(id: string): Promise<Author> {
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
