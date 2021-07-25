// logs.ts
// const util = require('../../utils/util.js');
import { formatTime } from '../../utils/util';

Page({
  data: {
    logs: [],
  },
  onLoad() {
    console.log('onLoad----');
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map((log: string) => {
        return {
          date: formatTime(new Date(log)),
          timeStamp: log,
        };
      }),
    });
  },
  onShow: function (opt) {
    console.log('onShow----', this.route);
    // throw new Error();

    this.createUnhandledRejection();
  },

  onHide: function () {
    console.log('onHide logs');
  },
  createUnhandledRejection: function () {
    Promise.reject('test').then(console.log);

    new Promise((r, j) => {
      setTimeout(function () {
        this.data.fn();
      }, 222);
    }).then();
    // .catch(e=>console.log(e))
  },
});
