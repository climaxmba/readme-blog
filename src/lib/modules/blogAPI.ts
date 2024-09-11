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

  return { getBlogs, getBlogById, getCategories };
})();

export default blogAPI;
