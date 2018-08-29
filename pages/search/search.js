import config from '../../utils/config.js';
Page({
    toSearch: function() {
        let keyWord = this.data.keyWord;
        wx.showLoading({title: '加载中...'})
        wx.request({
            url: `http://apis.juhe.cn/cook/query.php?key=${config.apiKey}&menu=${encodeURIComponent(keyWord)}`,
            success: (res) => {
                wx.hideLoading();
                let data = res.data;
                console.log(data)
                if (data.resultcode == 200) {
                    this.setData({
                        resultItem: data.result.data || [],
                        resultTotal: data.result.totalNum,
                    })
                } else if (data.resultcode == 202){
                    wx.showToast({
                        title: `没有搜到 ${keyWord} 的结果`,
                        icon: 'none',
                        duration: 2000
                    })
                }else {
                    wx.showModal({
                        title: '搜索出错',
                        content: data.reason
                    })
                }
            }
        })
    },
    /**
     * 页面的初始数据
     */
    data: {
        keyWord: '',
        resultTotal: 0,
        pn: 0,
        rn: 30,
        resultItem: [],
    },

    bindKeyInput: function (e) {
        this.setData({
            keyWord: e.detail.value
        })
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function() {

    }
})