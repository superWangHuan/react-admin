const prompt = {
    description: '视图组件', //提示语
    prompts: [
        {
            type: 'input',                                              //类型
            name: 'title',                                               //接收的遍历名称
            message: '页面标题',
        },
        {
            type: 'input',                                              //类型
            name: 'name',                                               //接收的遍历名称
            message: '页面名称, 如MyApp',                                 //提示
            validate: function (value) {                                //验证输入值
                if ((/([A-Z][a-z]+)+/).test(value)) {
                    return true;
                }
                return '组件名称必须为驼峰形式';
            }
        },
        {
            type: 'input',                                              //类型
            name: 'filePath',                                               //接收的遍历名称
            message: '生成文件所在路径',                                 //提示
        },
        {
            type: 'input',
            name: 'routerPath',
            message: '组件路由'
        },
    ],
    // 完成命令行后执行的操作，每个对象都是动作对象
    actions: data => {
        console.log(data)
        let {title = '', name = '', filePath = '', routerPath = ''} = data;

        return [
            /**
             * TemplateComponent.js
             */
            {
                type: 'add',                                                // 动作类型
                path: `src/views${filePath ? "/{{filePath}}" : ""}/{{name}}/{{name}}.js`,                 // 生成文件的输出路径
                templateFile: 'plop-template/views/Template.hbs',  // template 模板的文件路径，目录下的文件遵循hbs的语法规则
                data: {
                    name: "{{name}}",
                    title: '{{title}}',
                }
            },
            {
                type: "append",
                path: `src/routes/dynamicRoutes.js`,
                templateFile: 'plop-template/views/routes.hbs',
                pattern: /\[/,
                data: {
                    name: '{{name}}',
                    routerPath: '{{routerPath}}',
                }
            }
        ] // 动作数组
    }
}
module.exports = prompt
