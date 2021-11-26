import { getMenuParentKey } from './utils';
import menus from "./routes/menus";
describe('true is truthy and false is falsy', () => {
    test('测试getMenuParentKey函数', () => {
        let res = getMenuParentKey(menus,"key","home-index")
        expect(res).toEqual([{icon: "icon-baocun",title: "home",},{icon:"icon-daka",title:"家"}]);
    });

});
