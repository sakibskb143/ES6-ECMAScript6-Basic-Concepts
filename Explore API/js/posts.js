function loadPosts(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(post => displayPost(post))


}


function displayPost(posts){
    const postcontainer = document.getElementById('posts-container');
    for(const post of posts){
       console.log(post);
       const div = document.createElement('div');
       div.classList.add('post');
       div.innerHTML = `
         <h3>UsersId: ${post.userId}</h3>
         <h3>Post-title: ${post.title} </h3>
         <p> Post-description: ${post.body} </p>
       
       ` ;
       postcontainer.appendChild(div);
       
    }


}
loadPosts();