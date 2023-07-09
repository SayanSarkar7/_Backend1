const posts=[
    {title:'post One', body:'This is post one'},
    {title:'post Two', body:'This is post two'},
    {title:'post Three', body:'This is post three'},
    {title:'post Four', body:'This is post four'}
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

function createPost(post,callback){
    setTimeout(()=>{
        posts.push(post);
        callback();
    },2000);
}

getPosts();

createPost({title:'post Five', body:'This is post five'},getPosts);