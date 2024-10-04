const flat = [{
        id: 1,
        name: "部门1",
        pid: 0
    },
    {
        id: 2,
        name: "部门2",
        pid: 1
    },
    {
        id: 3,
        name: "部门3",
        pid: 1
    },
    {
        id: 4,
        name: "部门4",
        pid: 3
    },
    {
        id: 5,
        name: "部门5",
        pid: 4
    }
]
const arr2tree = (arr,parentId = 0)=>{
    const result = [];
    const itemMap = {};
    for (const item of arr) {
        const {id,pid} = item;
        if(!itemMap[id]?.children){
            itemMap[id] = {
                children:[]
            }
        }
        itemMap[id] = {
            ...item,
            children:itemMap[id].children
        }

        const treeItem = itemMap[id];
        if(pid === parentId){
            result.push(treeItem);

        }else{
            if(!itemMap[pid]?.children){
                itemMap[pid] = {
                    children :[]
                }
            }
        }
        itemMap[pid]?.children.push(treeItem);
    }
    return result;
}

console.log(JSON.stringify(arr2tree(flat)));