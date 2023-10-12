const {createProxyMiddleware} = require('http-proxy-middleware');
const proxy = {
    target: 'http://localhost:8080',
    pathRewrite: {
        '^/api':'' //remove /service/api
    },
    changeOrigin: true
}
module.exports = function (app) {
    app.use(
        createProxyMiddleware('/api', proxy)
    );
};