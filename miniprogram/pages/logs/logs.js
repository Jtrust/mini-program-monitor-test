"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var util_1 = require("../../utils/util");
Page({
    data: {
        logs: [],
    },
    onLoad: function () {
        console.log('onLoad----');
        this.setData({
            logs: (wx.getStorageSync('logs') || []).map(function (log) {
                return {
                    date: util_1.formatTime(new Date(log)),
                    timeStamp: log,
                };
            }),
        });
    },
    onShow: function (opt) {
        console.log('onShow----', this.route);
        this.createUnhandledRejection();
    },
    onHide: function () {
        console.log('onHide logs');
    },
    createUnhandledRejection: function () {
        Promise.reject('test').then(console.log);
        new Promise(function (r, j) {
            setTimeout(function () {
                this.data.fn();
            }, 222);
        }).then();
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9ncy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImxvZ3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQSx5Q0FBOEM7QUFFOUMsSUFBSSxDQUFDO0lBQ0gsSUFBSSxFQUFFO1FBQ0osSUFBSSxFQUFFLEVBQUU7S0FDVDtJQUNELE1BQU0sRUFBTjtRQUNFLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDMUIsSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUNYLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLFVBQUMsR0FBVztnQkFDdEQsT0FBTztvQkFDTCxJQUFJLEVBQUUsaUJBQVUsQ0FBQyxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDL0IsU0FBUyxFQUFFLEdBQUc7aUJBQ2YsQ0FBQztZQUNKLENBQUMsQ0FBQztTQUNILENBQUMsQ0FBQztJQUNMLENBQUM7SUFDRCxNQUFNLEVBQUUsVUFBVSxHQUFHO1FBQ25CLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUd0QyxJQUFJLENBQUMsd0JBQXdCLEVBQUUsQ0FBQztJQUNsQyxDQUFDO0lBRUQsTUFBTSxFQUFFO1FBQ04sT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBQ0Qsd0JBQXdCLEVBQUU7UUFDeEIsT0FBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRXpDLElBQUksT0FBTyxDQUFDLFVBQUMsQ0FBQyxFQUFFLENBQUM7WUFDZixVQUFVLENBQUM7Z0JBQ1QsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUNqQixDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDVixDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUVaLENBQUM7Q0FDRixDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBsb2dzLnRzXG4vLyBjb25zdCB1dGlsID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMvdXRpbC5qcycpO1xuaW1wb3J0IHsgZm9ybWF0VGltZSB9IGZyb20gJy4uLy4uL3V0aWxzL3V0aWwnO1xuXG5QYWdlKHtcbiAgZGF0YToge1xuICAgIGxvZ3M6IFtdLFxuICB9LFxuICBvbkxvYWQoKSB7XG4gICAgY29uc29sZS5sb2coJ29uTG9hZC0tLS0nKTtcbiAgICB0aGlzLnNldERhdGEoe1xuICAgICAgbG9nczogKHd4LmdldFN0b3JhZ2VTeW5jKCdsb2dzJykgfHwgW10pLm1hcCgobG9nOiBzdHJpbmcpID0+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBkYXRlOiBmb3JtYXRUaW1lKG5ldyBEYXRlKGxvZykpLFxuICAgICAgICAgIHRpbWVTdGFtcDogbG9nLFxuICAgICAgICB9O1xuICAgICAgfSksXG4gICAgfSk7XG4gIH0sXG4gIG9uU2hvdzogZnVuY3Rpb24gKG9wdCkge1xuICAgIGNvbnNvbGUubG9nKCdvblNob3ctLS0tJywgdGhpcy5yb3V0ZSk7XG4gICAgLy8gdGhyb3cgbmV3IEVycm9yKCk7XG5cbiAgICB0aGlzLmNyZWF0ZVVuaGFuZGxlZFJlamVjdGlvbigpO1xuICB9LFxuXG4gIG9uSGlkZTogZnVuY3Rpb24gKCkge1xuICAgIGNvbnNvbGUubG9nKCdvbkhpZGUgbG9ncycpO1xuICB9LFxuICBjcmVhdGVVbmhhbmRsZWRSZWplY3Rpb246IGZ1bmN0aW9uICgpIHtcbiAgICBQcm9taXNlLnJlamVjdCgndGVzdCcpLnRoZW4oY29uc29sZS5sb2cpO1xuXG4gICAgbmV3IFByb21pc2UoKHIsIGopID0+IHtcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmRhdGEuZm4oKTtcbiAgICAgIH0sIDIyMik7XG4gICAgfSkudGhlbigpO1xuICAgIC8vIC5jYXRjaChlPT5jb25zb2xlLmxvZyhlKSlcbiAgfSxcbn0pO1xuIl19