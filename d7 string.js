function merge(left, right)
 {

    let storearr = []
    
}

while (left) 
{
     
    if (left[0] <= right[0])
     {
        storearr.push(left.shift())
     }

     else
     {
        storearr.push(right.shift())
     }

     return (storearr,left,right)
}


function mergeSort(array) 
{
    if (array.length <= 1)

    return array;

    {
const mid = Math.floor(array.length / 2)
const left = array.slice(0,mid)
const right = array.slice(mid)

return merge(mergeSort(left) , mergeSort(right))

        
    } 
    
}


const orign = [23,32,45,454,77,889,989,45,34]
console.log(orign);
const orign2 = mergeSort(orign)
console.log(orign2);


