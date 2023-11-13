
// The firsst n elements of an array.
function first(array, n) {
if (array == null || n<=0)
return [];
if (n == null)
return array[0];
return array.slice(0, n);
}

//The last n elements of an array.
function last(array, n) {
    if (array == null)
    return [];
    if (n == null)
    return array[array.length - 1];
    return array.slice(Math.max(array.length - n, 0));
}

// Divide an array into several sub-arrays of predefined size.
function chunk(array, size){
    var chunkedArr = [];
    var index = 0;
    while (index < array.length) {
    chunkedArr.push(array.slice(index, size + index));
    index += size;
    }
    return chunkedArr;
}