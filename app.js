let friendArr = ['Jill', 'Alex', 'Sam','Nick','Matt']

for(let i = 0; i< friendArr.length; i++){
    for(let j = 99; j >0; j--){
        let n = j.toString()
        let m = (j-1).toString()
        if(j != 1){
            console.log(n + " lines of code in the file, " + n +"  lines of code; " + friendArr[i] + " strikes one out, clears it all out, " + m + "  lines of code in the file")
        }else{
            console.log("1 line of code in the file, 1 line of code; " + friendArr[i] + " strikes one out, clears it all out, no more lines of code in the file")
        }
    }
}