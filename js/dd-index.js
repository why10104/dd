$(function(){
//   头部
//     setTimeout(function(){
//         setTimeout(function(){
//             $(".header .head").css("display","none");
//         },2000);
//         $(".header .head").css("height","200px");
//     },3000);

    //地地址栏显示隐藏  //北京
      $(".address").hover( function () {
          $(".address > ul").css("display", "block").hover(function(){
              $(this.children).hover(function () {
                  $(this).css("color", "red");
              }, function () {
                  $(this).css("color", "#646464");
              });
          });
      },
      function () {
          $(".address > ul").css("display", "none");
      });


      //搜索框
    $(".soucuo").focus(function(){
        $(this).val("");
    })
    $(".soucuo").blur(function(){
        $(this).val(function(){
            if($(this).val()==""){
                return "美特斯班威";
            }else{}
                return $(this).val();
        });
    }) ;

    //bannwer

    var mySwiper = new Swiper ('.swiper-container', {
        direction: 'vertical',
        loop: true,

        // 如果需要分页器
        pagination: {
            el: '.swiper-pagination',
        },

        // 如果需要前进后退按钮
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        // 如果需要滚动条
        scrollbar: {
            el: '.swiper-scrollbar',
        },
    });

        
});


