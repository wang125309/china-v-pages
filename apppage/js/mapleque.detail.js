(function(){
$(function(){
    var index=document.location.hash||'';
    index=index.length>0?index.substr(1):1;
    mapleque.rotate({
      contbox:$('.section-list'),
      dotbox:$('.dot-bar'),
      dotcur:'cur',
      index:index,
      rotate:25
    });
    $('#fan-center').bind('click',function(){
        if ($('.alertify-log-show').length == 0){
            alertify.set({ delay: 2000});
            alertify.log("粉丝中心即将开启，敬请期待！");
        }
    });
    $('#jiaV').bind('click',function(){
        if ($('.alertify-log-show').length == 0){
            alertify.set({ delay: 2000});
            alertify.log("为正宗好声音加V投票活动在18日节目首播结束后马上开始哦~");
        }
    });
  });
})();
