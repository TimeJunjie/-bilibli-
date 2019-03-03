//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    //被点击菜单的索引
    currentIndexNav:0,
    //首页导航数据
    navList:[],
    // 轮播图数据
    swiperList:[],
   //视频列表数据
    videosList:[]

  },
  //自定义索引导航函数
  activeNav(event){
    console.log("index:"+event.currentTarget.dataset.indexid);
     
     this.setData({
      currentIndexNav: event.currentTarget.dataset.indexid
     })
  },
  //获取轮播图数据  
  getSwiperList(){
    let that=this;
    //利用内置方法请求数据
    wx.request({
      url: 'https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/swiperList',
      success(res){
        if(res.data.code===0){
          // console.log("Swiper请求成功为：");
          that.setData({
            swiperList:res.data.data.swiperList

          })
        }
      }
    })
  },

  // 获取首页导航数据
  getNavList(){
    let that = this;//将指向微信小程序的值赋给that
    //利用小程序内置发送请求的方法
    wx.request({
      url: 'https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/navList',
      success(res){
        // console.log(res);

        //判断请求数据是否成功，0为成功
        if(res.data.code===0){
          //注意获取code的值需要.data.code
          // console.log("请求成功");
          //数据请求成功，更新setData里的数据
          that.setData({
            navList:res.data.data.navList
          })
        }
      }
    })
  },
  //获取视频列表数据  
  getVideosList() {
    let that = this;
    //利用内置方法请求数据
    wx.request({
      url: 'https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/videosList',
      success(res) {

        console.log(res);
        if (res.data.code === 0) {
          console.log("videosList请求成功为：");
          console.log(res.data.data.videosList);
          that.setData({
            videosList: res.data.data.videosList

          })
        }
      }
    })
  },

  onLoad: function () {
   //1.调用首页导航数据，调用自定义函数
   this.getNavList();
   //2.调用轮播图数据
   this.getSwiperList();
   //3.调用视频列表数据
   this.getVideosList();
  },
  
    
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
