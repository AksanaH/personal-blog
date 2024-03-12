const usernameInput = document.getElementById('username');
const titleInput = document.getElementById('title');
const contentInput = document.getElementById('content');
const submitEl = document.querySelector(".submit");
console.log(usernameInput);
console.log(titleInput);
console.log(contentInput);

submitEl.addEventListener("click", function (event) {
  event.preventDefault();
  createAndRenderBlog();

  function createAndRenderBlog() {
    const blog = {
      username: usernameInput.value.trim(),
      title: titleInput.value.trim(),
      content: contentInput.value.trim(),
    };
    
    const blogs = JSON.parse(localStorage.getItem("blogs"));
    if (blogs===null) {
        localStorage.setItem("blogs", JSON.stringify([blog]));
    } else {
        blogs.push(blog);
        localStorage.setItem("blogs", JSON.stringify(blogs));
    }
  }
  window.location.href = "blog.html";
});
