function solution(n, slicer, num_list) {

    
    if(n === 1){
    return num_list.slice(0,slicer[1]+1)
    }else if(n === 2){
     return num_list.slice(slicer[0])
    }else if(n === 3){
     return num_list.slice(slicer[0],slicer[1]+1)
    }else if(n === 4){
     return num_list.slice(slicer[0],slicer[1]+1).filter((el,i)=> i % slicer[2] === 0 )
    }
  // return num_list
}