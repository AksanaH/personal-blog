
// selects the HTML element with the class "back" and assigns it to the variable backButtonEl
const backButtonEl = document.querySelector(".back");

//retrieves the stored blogs from local storage, converts them from JSON format
// to a JavaScript object, logs them to the console, and then calls the 
//displayBlogs function to display them.
function createBlog() {
    //JSON.parse to convert text to JS object
    const blog = JSON.parse(localStorage.getItem("blogs"));
    console.log(blog);
    displayBlogs(blog);
}

//adds an event listener to the back button element. When the button is clicked, 
//it prevents the default behavior (which might be submitting a form or following 
//a link), and changes the location of the window to "index.html".
backButtonEl.addEventListener("click", function (event) {
    event.preventDefault();
    window.location.href = "index.html";
})

// Display user's blogs
//declares a function displayBlogs that takes an array of blogs (blogsArray)
// as an argument. This function is responsible for displaying the user's blogs
// on the webpage.
const displayBlogs = function (blogsArray) {
    //get the blog section
    //selects the HTML element with the class "containerSection", which is assumed 
    //to be the container where the blogs will be displayed.
    const content = document.querySelector(".containerSection");

    //loop through the user data and create a div for each post
    for (let i=0; i<blogsArray.length; i++) {
        const currentContent = blogsArray[i];

        const newSection = document.createElement("div");


        const title = document.createElement("h3");
        title.classList.add("title");
        title.textContent = currentContent.title;
        newSection.append(title);
       

        const paragraph = document.createElement("p");
        paragraph.classList.add("paragraph");
        paragraph.textContent = currentContent.content;
        newSection.append(paragraph);

        const postedBy = document.createElement ("h5");
        postedBy.classList.add("postedBy");
        postedBy.textContent = "Posted by:" + currentContent.username;
        newSection.append(postedBy);

        content.append(newSection);
        
    }
}

