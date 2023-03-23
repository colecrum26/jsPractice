let promise = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        let num = Math.round(Math.random()*10);
        console.log(num);
    },3000)
});