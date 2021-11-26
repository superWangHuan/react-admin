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
export function getMenuParentKey(list, key, val) {
    if (!list) return []
    let data = JSON.parse(JSON.stringify(list))
    let stack = []
    stack.push(...data)
    if (Array.isArray(data)) {
        while (stack.length !== 0) {
            let item = stack.pop();
            let children = item?.children;
            if (Array.isArray(children)) {
                for (let i = 0; i < children.length; i++) {
                    let res = []
                    let info = children[i]
                    info.parent = item;
                    if (info[key] === val){
                        return (function find(c) {
                            res.unshift({icon:c.icon,title:c.title,key:c.key})
                            if (c.parent) return find(c.parent);
                            return res
                        })(info)
                    }
                    stack.push(info)
                }
            }else if(item[key]===val){
                return [{icon:item.icon,title:item.title,key:item.key}]
            }
        }
    }
    return []
}
