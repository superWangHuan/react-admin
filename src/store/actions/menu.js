import { SET_MENUS,SET_OPEN_MENUS_KEYS,SET_SELECT_MENU,ADD_OPEN_MENUS_TAG,DEL_CLOSE_MENUS_TAG } from "../constants";

export function setMenus(menus){
    return {type:SET_MENUS,menus}
}

export function setOpenMenus(openMenuKeys){
    return { type:SET_OPEN_MENUS_KEYS,openMenuKeys }
}

export function setSelectMenu(selectMenu){
    return { type:SET_SELECT_MENU,selectMenu }
}
export function addOpenMenuTag(openMenu ){
    return { type:ADD_OPEN_MENUS_TAG,openMenu }
}
export function delCloseMenuTag(closeMenu ){
    return { type:DEL_CLOSE_MENUS_TAG,closeMenu }
}