const strStr = (haystack, needle) => {
    for(let i=0; i<haystack.length; i++){
        let slice = haystack.slice(i, needle.length + i)
        if(slice == needle) return i
    }
     
     return -1
 };