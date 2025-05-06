const PROXY_CONFIG = [
  {
    context:['/api'],
    target:'http://localhost:8080/',
    pathRewrite:{'^/api':''}
  }
];
//ng serve --proxy-config proxy.config.js

module.exports = PROXY_CONFIG;
