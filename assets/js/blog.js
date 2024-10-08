document.addEventListener("DOMContentLoaded", function() {
    const blogList = document.getElementById("blog-list")
    const blogPosts = JSON.parse(localStorage.getItem("blogPosts")) || [];

    if(blogPosts.length ===0) {
        blogList.innerHTML = "<p>No blog posts available.</p>";
    } else {
       blogPosts.forEach(element => {
       const postElement= document.createElement("div");
       postElement.classList.add("post");
       
       blogList.appendChild(postElement);
       }); 
            
        });

        document.getElementById("back").addEventListener("click", function(){

            window.location.href = "index.html";
        })
    }
})