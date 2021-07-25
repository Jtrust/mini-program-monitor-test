const { createMonitor } = require('mini-program-monitor');

createMonitor({ collector: 'http://127.0.0.1:12800',
service: 'wx',
pagePath: '/log/xx',
serviceVersion: '0.1.0',
});

// app.ts
App<IAppOption>({
  globalData: {
    text: '12',
  },
  onLaunch() {
    // 展示本地存储能力。
    const logs = wx.getStorageSync('logs') || [];
    logs.unshift(Date.now());
    wx.setStorageSync('logs', logs);

    // 登录
    wx.login({
      success: (res) => {
        console.log(res.code);
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      },
    });
  },
  onShow(opt){
    console.log(222,opt)
  },
  onUnhandledRejection: function (e) {
    console.log('onUnhandledRejection--', e);

    // throw e
  },
  onError: function (a) {
    console.log('onError-----', a);
    console.log('onError-----', typeof a);
  },

  onHide: function () {
    console.log('onHide app');
    // setTimeout(function(){console.log(999)},3000)
  },
});
