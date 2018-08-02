$(function(){
//   头部
    setTimeout(function(){
        setTimeout(function(){
            $(".header .head").css("display","none");
        },2000);
        $(".header .head").css("height","200px");
    },3000);
    //地地址栏显示隐藏
      $(".address").hover(
        function () {
            $(".address > ul").css("display","block").hover(function(){
                // $(this).css("color","red");
                console.log($(this.children));
            });
            
        },
        function () {
            $(".address > ul").css("display","none");
        }
    );
});
