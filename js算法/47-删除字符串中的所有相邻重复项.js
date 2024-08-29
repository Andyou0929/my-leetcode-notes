function removeStrDuplicates(s) {
    let stack = [];
  for (const char of s) {
    if (char === stack[stack.length - 1]) {
        stack.pop()
    }else{
        stack.push(char)
    }
  }
  return stack.join("")
}

console.log(removeStrDuplicates("abbaca"));