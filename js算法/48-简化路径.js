function simplifyPath(path) {
    // 补充代码
    let stack = []
    let list = path.split("/")  // 分割路径
    list.forEach(item => {
        // 不存在，. ,.. 不入栈
        if (item && item != "." && item != "..") {
            stack.push(item)
        }else if(item == ".."){ // .. 代表跳出当前目录，顶层出栈
            stack.pop()
        }
    });
    // 拼接
    return "/" +  stack.join("/")
}

console.log(simplifyPath(""));
console.log(simplifyPath("/home/"));
console.log(simplifyPath("/a/./b/../../c/"));
console.log(simplifyPath("/../"));
console.log(simplifyPath("/home//foo/"));
console.log(simplifyPath("/home/.../foo/"));
console.log(simplifyPath("/home/foo/..."));