export function reduceMenuList(list, path = "") {
    const data = [];
    let len = list.length;
    for (let i = 0; i < len; i++) {
        let item = list[i];
        let children = item.children || null;
        item.parentPath = path;
        if (children) {
            const child = reduceMenuList(children, path + item.path)
            data.push(...child)
        }
        data.push(item)
    }
    return data
}

//找父级
export function getMenuParentKey(list,key){
    let data = JSON.parse(JSON.stringify(list))
    let nodes = [];
    let stack = []
    stack.push(data)
    if(data && Array.isArray(data)){
        while (stack.length!==0){
            let item = stack.pop();
            if(item !== data){ //防止添加原本数据
                nodes.push(item)
            }
            let children = item.children ? item.children : item;
            if(Array.isArray(children)){
                children.forEach((info, i, arr) => {
                    info.parentInfo = item;
                    stack.push(info)
                })
            }
        }
    }
    console.log(nodes)
    return "s"
}
