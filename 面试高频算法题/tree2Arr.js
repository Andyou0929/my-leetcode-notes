const tree = [{
    id: 1,
    name: "部门1",
    pid: 0,
    children: [{
            id: 2,
            name: "部门2",
            pid: 1,
            children: []
        },
        {
            id: 3,
            name: "部门3",
            pid: 1,
            children: [{
                id: 4,
                name: "部门4",
                pid: 3,
                children: [{
                    id: 5,
                    name: "部门5",
                    pid: 4,
                    children: []
                }]
            }]
        }
    ]
}];

const tree2Arr = (root) =>{
    if(!root) return [];
    const result = [];
    const queue = [...root];
    while (queue.length) {
        const node = queue.pop();
        const children = node.children;
        result.push(node);
        if(children){
            queue.push(...node.children);
        }
        node.children = [];
    }
    return result;
}

console.log(tree2Arr(tree));