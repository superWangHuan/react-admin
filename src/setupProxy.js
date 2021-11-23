const { createProxyMiddleware } = require("http-proxy-middleware")

module.exports = function(app){
    app.use(createProxyMiddleware("/api/*",{
        target:"http://192.168.0.100:3456/",
        changeOrigin:true,
        pathRewrite: {
            '/*/api': '/api',
        },
        secure: false, // 是否验证证书
        ws: true, // 启用websocket
    }))
}
