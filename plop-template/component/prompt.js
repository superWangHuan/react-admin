const prompt = {
    description: '视图组件', //提示语
    prompts:[
        {
            type: 'input',                                              //类型
            name: 'name',                                               //接收的遍历名称
            message: '组件的名字, 如MyApp',                               //提示
            validate: function (value) {                                //验证输入值
                if ((/([A-Z][a-z]+)+/).test(value)) { return true; }
                return '组件名称必须为驼峰形式';
            }
        },
    ],
    // 完成命令行后执行的操作，每个对象都是动作对象
    actions:[
        /**
         * TemplateComponent.js
         */
        {
            type: 'add',                                                // 动作类型
            path: 'src/component/{{name}}/{{name}}.js',                 // 生成文件的输出路径
            templateFile: 'plop-template/components/TemplateComponent.hbs',  // template 模板的文件路径，目录下的文件遵循hbs的语法规则
        },
        /**
         * template-component.scss and css
         */
    ] // 动作数组
}
module.exports = prompt
