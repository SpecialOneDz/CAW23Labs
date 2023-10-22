function each(array, fn){
for(var i=0; i< array.length; i++){
fn(array[i]);
}
}

each([1,2,3,4],console.log)
