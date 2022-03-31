function substringsStartingWithK(N,A,K){
    //code here
    let count=0;
for(let i=0;i<A.length;i++)
{
    if(A[i]==K)
    {
        count+=N-i;
    }
}
console.log(count)
}
