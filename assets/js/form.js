document.getElementById("blog-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const username= document.getElementById("username").value;
    const title= document.getElementById("title").value;
    const content = document.getElementById("content").value;

    if(!username || !title || !content) {
        alert("Complete all fields before submitting");
        return;
    }

    const blogPosts = JSON.parse(localStorage.getItem("blogPosts")) || []
    const newPosts = { username, title, content };
    blogPosts.push(newPosts);

    localStorage.setItem("blohPosts" JSON.stringify(blogPosts));
    window.location.href = "blog.html";
});