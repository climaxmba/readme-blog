const blogAPI = (() => {
  async function getBlogs() {
    const response = await fetch("/api/blogs");
    if (response.ok) {
      const blogs = await response.json();
      return blogs;
    }

    throw new Error(response.statusText);
  }

  async function getBlogById(id: string) {
    const response = await fetch(`/api/blogs/${id}`);
    if (response.ok) {
      const blog = await response.json();
      return blog;
    }

    throw new Error(response.statusText);
  }

  return { getBlogs, getBlogById };
})();

export default blogAPI;
