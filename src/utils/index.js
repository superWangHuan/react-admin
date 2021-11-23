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