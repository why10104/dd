$(function(){
//   头部
    setTimeout(function(){
        setTimeout(function(){
            $(".header .head").css("display","none");
        },2000);
        $(".header .head").css("height","200px");
    },3000);

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

    var mySwiper1 = new Swiper ('.cont1 .swiper-container', {
        direction: 'horizontal',
        loop: true,
        autoplay:true,
        effect : 'fade',

        // 如果需要分页器
        pagination: {
            el: '.swiper-pagination',
            clickable:true,
            renderBullet: function (index, className) {
                return '<span class="' + className + '">' + (index + 1) + '</span>';
            },
        },

        // 如果需要前进后退按钮
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
            hideOnClick :true,
        },

    });

    var mySwiper2 = new Swiper ('.cont2 .swiper-container', {
        direction: 'horizontal',
        loop: true,
        autoplay:true,
        effect : 'fade',

        // 如果需要前进后退按钮
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
            hideOnClick :true,
        },

    });

    var mySwiper3 = new Swiper ('.b-r-t .swiper-container', {
        direction: 'horizontal',
        loop: true,
        autoplay:true,
        effect : 'fade',
        speed: 2000,

        // 如果分页符
        pagination: {
            el: '.btt1 .swiper-pagination',
            clickable:true,
        },
        // 如果需要前进后退按钮
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
            hideOnClick :true,
        },
    });

    //侧边栏效果
    $(".as1").hover(function(){
        $(this).children().css("left","-79px");
    },function(){
        $(this).children().css("left","100px");
    });


    $(".ass1").hover(function(){
        $(".imms").css("left","-350px");
    },function(){
        $(".imms").css("left","100px");
    });

    $(window).scroll(function(){//滚动事件获取//判断滚动条高度
        var $scroll = $(document).scrollTop();
        if($scroll>700){//判断滚动条高度
            $(".asids3").show();
        }else{
            $(".asids3").hide();
        }
    });


    //吸顶效果
    $(window).scroll(function(){//滚动事件获取//判断滚动条高度
        var $scroll = $(document).scrollTop();
        if($scroll>600){//判断滚动条高度
            $(".top-dd").css("display","block");
        }else{
            $(".top-dd").css("display","none");
        }
    });

    
});


