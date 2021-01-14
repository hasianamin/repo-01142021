
const foo=(str)=>{
    let raw = str.split(' ')
    let result = []
    let temp
    for(let i=0;i<raw.length;i++){
      temp = raw[i].split('').reverse().join('')
      result.push(temp)
    }
    return result.join(' ')
}


console.log(foo('italem irad irigayaj'))
console.log(foo('iadab itsap ulalreb'))
console.log(foo('nalub kusutret gnalali'))