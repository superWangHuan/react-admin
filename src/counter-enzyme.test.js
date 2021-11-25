import { getMenuParentKey } from './utils';
import menus from "./routes/menus";
describe('true is truthy and false is falsy', () => {
    test('true is truthy', () => {
        let res = getMenuParentKey(menus,"todo-index")
        expect(res).toBe("s");
    });

});
