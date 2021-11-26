const viewPrompt = require( "./plop-template/views/prompt")
const componentPrompt = require("./plop-template/component/prompt")
module.exports = function(plop){
    //创建你自己的生成器
    // setGenerator可以设置一个生成器，每个生成器都可用于生成特定的文件
    // 接收两个参数，生成器的名称和配置选项
    /**
     * 构建组件
     */
    plop.setGenerator('component',componentPrompt);
    /**
     * 构建页面
     */
    plop.setGenerator('views',viewPrompt);

};
