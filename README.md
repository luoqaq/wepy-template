# wepy-template

微信小程序-wepy项目的模板

为了方便之后快速开始wepy小程序的开发，故写了一个wepy小程序的简单模板为以后开启开发简化创建流程。

相对于wepy官方的：
wepy new myproject
1.7.0之后的版本使用 wepy init standard myproject 初始化项目



本人在standard的方式创建的项目的基础上加入了：

 - es6的promise和async/await用法，（因为初始化话的项目中默认没有需要手动添加，每次创建都去搞一次还是挺烦的）。
 
 - tip弹框：在小程序的官方api，wx.showToast()和showModal()的基础上封装了若干个常用的弹框。
 
 - http请求：封装了小程序的http请求。
 
 - 授权页面：简单写了一个授权页面，之后嫌丑可以再改
 
 
 
# 使用
 - git clone https://github.com/luoqaq/wepy-template.git
 
 - cd wepy-template
 
 - npm install
 
 - 将项目打包：
    
     一种： wepy build --watch， 此种方式要求用户已安装wepy,主要用于开发调试时，对应微信开发工具共同使用 
     另种： npm run build，打包更小，主要用于上传体验版以及在手机上调试时使用
    
 - 将dist文件放入微信web开发工具中，创建项目。
   
     项目的详情中：ES6转ES5；上传代码时样式自动补全；上传代码时自动压缩；启用自定义处理命令全部关闭
