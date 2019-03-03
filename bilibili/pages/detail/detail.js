// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
    videoInfo:[],  //视频详情页数据
    othersList:[], //推荐视频数据
    commentData:[],  //评论列表总信息
    commentList:[], //评论列表数据
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // options.id 为跳转时所带的参数id
    // console.log("options.id:");
    // 
    let videoId=options.id;
    // 调用获得当前视频的详情数据，并以videoId作为参数标识
    this.getCurrentVideo(videoId);
    // console.log(videoId);
    // 调用获得推荐视频的数据，并以videoId作为参数标识
    this.getOthersList(videoId);
    // 调用获得评论列表的数据，并以videoId作为参数标识
    this.getCommentList(videoId);

  },
  /**
   * 根据视频的id获得视频详情,需要传送参数videoId作为标识
   */
  getCurrentVideo(videoId){
    let that = this;
    //获取视频详情信息
    wx.request({
      url: 'https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/videoDetail?id=' + videoId,
        success(res){
         console.log(res);
          if(res.data.code===0){
            console.log("链接成功id为" + videoId);
            that.setData({
              videoInfo:res.data.data.videoInfo
            })
          }
        }

    })
  },

  /**
   * 获取推荐视频数据
   */
  getOthersList(videoId){
    let that = this;
    wx.request({
      url: 'https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/othersList?id'+videoId,
      success(res){
        //数据连接成功
        if(res.data.code===0){
          console.log("othersList请求成功");
           that.setData({
             othersList:res.data.data.othersList
           })
        }
      }
    })

  },
  /**
    * 获取评论列表数据
    */
  getCommentList(videoId) {
    let that = this;
    wx.request({
      url: 'https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/commentsList?id' + videoId,
      success(res) {
        //数据连接成功
        if (res.data.code === 0) {
          console.log("commentList请求成功");
          that.setData({
            commentList: res.data.data.commentData.commentList,
            commentData: res.data.data.commentData
          })
        }
      }
    })

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})