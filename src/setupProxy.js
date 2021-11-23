const { createProxyMiddleware } = require("http-proxy-middleware")

module.exports = function(app){
    app.use(createProxyMiddleware("/api/*",{
        target:"http://127.0.0.1:3456/",
        chagneOrigin:true,
        secure: false, // 是否验证证书
        ws: true, // 启用websocket
    }))
}