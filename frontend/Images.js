import images from "./Images.js/"
setTimeout(async ()=>
{
    const res = await fetch("https://source.unsplash.com/random?orientation=landscape"); 
    const data = await res.json();
    console.log(data);
},1000);
