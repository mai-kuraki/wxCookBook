import config from '../../utils/config.js';
Page({
    /**
     * 页面的初始数据
     */
    data: {
        maskStatus: false,
        searchInput: true,
        listShow: false,
        detailMode: false,
        keyWord: '',
        resultTotal: 0,
        pn: 0,
        rn: 30,
        detailData: {},
        resultItem: [],
        touchx: 0,
        touchy: 0,
    },

    toSearch: function () {
        let keyWord = this.data.keyWord;
        console.log(keyWord)
        wx.showLoading({ title: '加载中...' })
        wx.request({
            url: `https://apis.juhe.cn/cook/query.php?key=${config.apiKey}&menu=${encodeURIComponent(keyWord)}`,
            success: (res) => {
                wx.hideLoading();
                let data = res.data;
                console.log(data)
                if (data.resultcode == 200) {
                    this.setData({
                        resultItem: data.result.data || [],
                        resultTotal: data.result.totalNum,
                        searchInput: false,
                    });
                    setTimeout(() => {
                        this.setData({
                            listShow: true,
                        })
                    }, 150)
                } else if (data.resultcode == 202) {
                    wx.showToast({
                        title: `没有搜到 ${keyWord} 的结果`,
                        icon: 'none',
                        duration: 2000
                    })
                } else {
                    wx.showModal({
                        title: '搜索出错',
                        content: data.reason
                    })
                }
            },
            fail: () => {
                wx.hideLoading();
                wx.showModal({
                    title: '搜索出错',
                    content: '为什么'
                })
            }
        })
    },

    toDetail: function(e) {
        console.log(e);
        let position = e.touches[0];
        this.setData({
            touchx: position.clientX,
            touchy: position.clientY,
        })
        let index = e.currentTarget.dataset.index;
        let detailData = this.data.resultItem[index];
        let tags = detailData.tags;
        if(typeof tags === 'string') {
            tags = tags.split(';');
            detailData.tags = tags;
        }
        let ingredients = detailData.ingredients;
        if (typeof ingredients === 'string') {
            ingredients = ingredients.split(';');
            let ingArr = [];
            ingredients.map((data, k) => {
                ingArr.push(data.split(','));
            });
            detailData.ingredients = ingArr;
        }
        
        let burden = detailData.burden;
        if (typeof burden === 'string') {
            burden = burden.split(';');
            let burdenArr = [];
            burden.map((data, k) => {
                burdenArr.push(data.split(','));
            });
            detailData.burden = burdenArr;
        }
        console.log(detailData);
        this.setData({
            detailData: detailData,
            detailMode: true,
        });
        setTimeout(() => {
            this.setData({
                maskStatus: true,
            })
        })
    },

    backtoItem: function (e) {
        this.setData({
            maskStatus: false,
            detailMode: false,
        })
    },

    backtoSearch: function (e) {
        this.setData({
            searchInput: true,
            listShow: false,
        })
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