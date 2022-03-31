let arr =[3,5,0,9,8]

let index=0;
let right=arr.length-1;
let left =0;
//console.log(arr.length)
console.log(quick_sort(arr,left,right));

function quick_sort(arr,left,right)
{
    if(left<right){
        var index=partition(arr,left,right)
        quick_sort(arr,left,index-1)
        quick_sort(arr,index+1,right)
    }
    return  arr;
}
function partition(arr,left,right)
{
    let pivot=arr[right];
    let i = left;
    for(let j =left;j<right;j++)
    {
        if(arr[j]<=pivot)
        {
            let temp=arr[i];
            arr[i]=arr[j];
            arr[j]=temp;
            i=i+1;
        }
    } 
    let temp=arr[i];
    arr[i]=arr[right];
arr[right]=temp;
return i;
}