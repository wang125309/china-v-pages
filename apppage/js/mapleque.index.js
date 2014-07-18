(function(){
wechatShare({
  title: "正宗凉茶的无限可能",
  desc: "夏天有三宝，V罐、好声音、加多宝",
  link: "http://wx.jdb.cn/",
  imgUrl: "/static/img/share.jpg"
});

$(
function(){
  mapleque.slide({
    contbox:$('.btn-list'),
    index:0,
    leftarr:$('.arr-left a'),
    rightarr:$('.arr-right a')
  });
  $(document.body).bind('swipeLeft',function(e){
    if (e.target.className=='btn'||e.target.tagName=='IMG'||e.target.tagName=='A')return;
    document.location.href="detail.html#0";
  });
  $(document.body).bind('swipeRight',function(e){
    if (e.target.className=='btn'||e.target.tagName=='IMG'||e.target.tagName=='A')return;
    document.location.href="detail.html#6";
  });
});
})();
