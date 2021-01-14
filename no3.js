const foo=(param)=>{
    let temp = []
    let x
    for(let i=0;i<param;i++){
        if(i > 1) {
            x = temp[i-1] + temp[i-2]
            temp.push(x)    
        }
        else temp.push(i)
    }
    console.log(temp)
}

foo(10)