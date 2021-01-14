const foo=(arr)=>{
    let x = 0
    if(arr.length >= 5 && arr.length <= 7){
        for(let i=0;i<arr.length;i++){
            if(i > 0){
                if(arr[i-1] === arr[i]) return 'TIDAK'
                else if(arr[i-1] === 1 && !(arr[i] === 2 || arr[i] === 5 || arr[i] === 4 )) return 'TIDAK'
                else if(arr[i-1] === 2 && !(arr[i] === 1 || arr[i] === 5 || arr[i] === 3 || arr[i] === 4 || arr[i] === 6)) return 'TIDAK'
                else if(arr[i-1] === 3 && !(arr[i] === 2 || arr[i] === 5 || arr[i] === 6 )) return 'TIDAK'
                else if(arr[i-1] === 4 && !(arr[i] === 1 || arr[i] === 2 || arr[i] === 5 || arr[i] === 7 || arr[i] === 8 )) return 'TIDAK'
                else if(arr[i-1] === 5 && !(arr[i] === 1 || arr[i] === 2 || arr[i] === 3 || arr[i] === 4 || arr[i] === 6 || arr[i] === 7 || arr[i] === 8 || arr[i] === 9 )) return 'TIDAK'
                else if(arr[i-1] === 6 && !(arr[i] === 3 || arr[i] === 2 || arr[i] === 5 || arr[i] === 8 || arr[i] === 9 )) return 'TIDAK'
                else if(arr[i-1] === 7 && !(arr[i] === 4 || arr[i] === 5 || arr[i] === 8 )) return 'TIDAK'
                else if(arr[i-1] === 8 && !(arr[i] === 7 || arr[i] === 4 || arr[i] === 5 || arr[i] === 6 || arr[i] === 9)) return 'TIDAK'
                else if(arr[i-1] === 9 && !(arr[i] === 6 || arr[i] === 5 || arr[i] === 8 )) return 'TIDAK'
                else x+=1
            }
        }
        if(x === arr.length - 1) return 'YA'
        
    } else {
        return 'TIDAK'
    }

}

console.log(foo([1,2,3,2,1,2,3]))
console.log(foo([2,3,6,5,4,7,8,9]))
console.log(foo([5,1,2,3,6,9]))
console.log(foo([1,2,1,7,2,1]))
console.log(foo([1,2,1,5,2,1]))