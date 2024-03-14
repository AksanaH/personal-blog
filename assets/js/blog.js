
const backButtonEl = document.querySelector(".back");


function createBlog() {
    //JSON.parse to convert text to JS object
    const blog = JSON.parse(localStorage.getItem("blogs"));
    console.log(blog);
    displayBlogs(blog);
}



backButtonEl.addEventListener("click", function (event) {
    event.preventDefault();
    window.location.href = "index.html";
})

// Display user's blogs
const displayBlogs = function (blogsArray) {
    //get the blog section
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

