function reverseString(s) {
  let flag;
  for (let i = 0, j = s.length - 1; i <= j; i++, j--) {
    flag = s[i]
    s[i] = s[j]
    s[j] = flag

  }
  return s
}

console.log(reverseString(["h","e","l","l","o"]));