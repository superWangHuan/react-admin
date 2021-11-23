import { SET_MENUS, SET_OPEN_MENUS_KEYS, SET_SELECT_MENU, ADD_OPEN_MENUS_TAG, DEL_CLOSE_MENUS_TAG } from "../constants";
export default function menus(state = {}, action) {
    let copyState = JSON.parse(JSON.stringify(state))
    let openMenuTags = copyState.openMenuTags || [];
    switch (action.type) {
        case SET_MENUS: //储存所有菜单信息
            return { ...state, menuList: action.menus }
        case SET_OPEN_MENUS_KEYS: //设置所有打开的页面信息
            return { ...state, openMenuKeys: action.openMenuKeys }
        case SET_SELECT_MENU: //设置当前打开页面信息
            return { ...state, selectMenu: action.selectMenu }
        case ADD_OPEN_MENUS_TAG:
            let openMenu = action.openMenu;
            let isSome = openMenuTags.some(item => {
                return item.key === openMenu.key
            })
            if (!isSome) {
                openMenuTags.push(openMenu)
            }
            return { ...state, openMenuTags: openMenuTags }
        case DEL_CLOSE_MENUS_TAG:
            let closeMenuKey = action.key;
            let index = openMenuTags.findIndex(item => {
                return item.key === closeMenuKey
            })
            if (index>-1) {
                openMenuTags.splice(index,1)
            }
            return { ...state, openMenuTags: openMenuTags }
        default:
            return state
    }
}