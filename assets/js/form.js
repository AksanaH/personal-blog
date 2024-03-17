// gets the HTML element with the id "username" and assigns it to the variable usernameInput
const usernameInput = document.getElementById("username");
const titleInput = document.getElementById("title");
const contentInput = document.getElementById("content");
//selects the HTML element with the class "submit" and assigns it to the variable submitEl
const submitEl = document.querySelector(".submit");

//adds an event listener to the HTML element stored in the submitEl variable. 
//It listens for a click event and executes the function when the click event occurs.
submitEl.addEventListener("click", function (event) {
    // line prevents the default behavior of the submit button, which is 
    //to submit a form and refresh the page.
  event.preventDefault();
  //creates a JavaScript object blog with properties username, title, and content, 
  //and assigns them the values retrieved from the input fields, 
  //delete any leading or trailing whitespace.
  const blog = {
    username: usernameInput.value.trim(),
    title: titleInput.value.trim(),
    content: contentInput.value.trim(),
  };
  //checks if the verifyFields function returns false. 
  //If it does, it proceeds to create and render the blog.
  if (!verifyFields(blog)) {
    createAndRenderBlog(blog);
//changes the current page's URL to "blog.html".
    window.location.href = "blog.html";
  }
});
//declares a function createAndRenderBlog that takes a blog object as an argument.
function createAndRenderBlog(blog) {

    //retrieves the blogs stored in the browser's local storage 
    //and parses them from JSON format to a JavaScript object
  const blogs = JSON.parse(localStorage.getItem("blogs"));

  //checks if there are any blogs in the local storage. If there are none, 
  //it adds the current blog to the storage. Otherwise, it appends the current 
  //blog to the existing list of blogs in the storage.
  if (blogs === null) {
    //.setItem to store object in storage
    //JSON.stringify to convert it as a string
    localStorage.setItem("blogs", JSON.stringify([blog]));
  } else {
    blogs.push(blog);
    localStorage.setItem("blogs", JSON.stringify(blogs));
  }
}

// declares a function verifyFields that takes a blog object as an argument.
//The verifyFields function checks if the username, title, or content fields 
//of the blog object are empty. If any of them are empty, it alerts the user 
//to fill out those fields and returns true. Otherwise, it returns false.


function verifyFields(blog) {
  let usernameIsEmpty = false;
  let titleIsEmpty = false;
  let contentIsEmpty = false;

  if (blog.username === "") {
    usernameIsEmpty = true;
  }
  if (blog.title === "") {
    titleIsEmpty = true;
  }
  if (blog.content === "") {
    contentIsEmpty = true;
  }

  let alertMessage = `Please fill out these fields: ${
   usernameIsEmpty ? "username" : ""
  } ${titleIsEmpty ? "title" : ""} ${contentIsEmpty ? "content" : ""}`;
  
  if(usernameIsEmpty || titleIsEmpty || contentIsEmpty){
    alert(alertMessage);
    return true;
  }
  return false;
}
