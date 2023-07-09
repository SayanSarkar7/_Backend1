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

function createPost(post){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            posts.push(post);
            const error = false;
            if(!error){
                resolve();
            }else{
                reject('Error: Something went wrong');
            }
        },2000);
    })
    
}

getPosts();

// createPost({title:'post Five', body:'This is post five'})
// .then(getPosts)
// .catch(err=>console.log(err));

// Promise.all
const promise1 = Promise.resolve('Hello World');
const promise2 = 10;
const promise3 = new Promise((resolve, reject)=>{
    setTimeout(resolve, 2000, 'Goodbye')
});

Promise.all([promise1, promise2, promise3]).then(values=>console.log(values));



