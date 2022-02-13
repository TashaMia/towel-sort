
// You should implement your task here.

module.exports = function towelSort (x) {
    let arr=[];
    if(!x) return arr;
  for(let i=0; i<=x.length - 1;i++){
  if (i==0 || i%2 == 0){
    console.log(i)
  arr.push(x[i])
    }else{

  let reversePart = x[i].reverse();
  arr.push(reversePart)
  }
  }
  return(arr.flat())
  }
