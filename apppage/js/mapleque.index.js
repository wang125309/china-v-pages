(function(){
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
    document.location.href="detail.html#6";
  });
  $(document.body).bind('swipeRight',function(e){
    if (e.target.className=='btn'||e.target.tagName=='IMG'||e.target.tagName=='A')return;
    document.location.href="detail.html#0";
  });
});
})();
