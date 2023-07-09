const posts=[
    {title:'post One', body:'This is post one'},
    {title:'post Two', body:'This is post two'},
    {title:'post Three', body:'This is post three'}
];

function getPosts(){
    setTimeout(()=>{
        let output='';
        posts.forEach((post,index)=>{
            output += `<li>${post.title}</li>`
        });
        document.body.innerHTML=output;
    },1000);
}

function createPost(post){
    setTimeout(()=>{
        posts.push(post);
    },2000);
}

getPosts();

createPost({title:'post Four', body:'This is post four'});