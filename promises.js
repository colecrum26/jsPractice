let promise = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        let num = Math.round(Math.random()*10);
        console.log(num);
        if (num % 2 == 0){
            resolve(num);
        } else {
            reject(num);
        }
    },1000)
});