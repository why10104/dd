$(function(){
// 页面转换
  $(".h1").click(function(){
      $(".login1").css("display","none");
      setInterval(function(){
          $('.box1').css("display","block");

          $('.ag1').css("display","none");
      },10000);
      $(".login2").css("display","block");
  });
  $(".h2").click(function(){
      $(".login1").css("display","block");
      $(".login2").css("display","none");
  });

    $('.ag1').hover(function(){
        $(".g1").css({"margin":0, "display":"inline-block"});
        $(".g2").css("display","inline-block");
    },function(){
        $(".g1").css({"margin":"9px auto", "display":"block"});
        $(".g2").css("display","none");
    });

    $('.xs').click(function(){
        $('.box1').css("display","none");
        $(".ag1").css("display","block");
        $(".g1").css({"margin":"9px auto", "display":"block"});
       
    });

   //验证会员
    
   $('.ts11').on("focus",function(){
       $(this).val("");
       $('.b1').text("请输入邮箱、昵称、手机号");
   }).on("blur",function(){
       if($(this).val() ==""){
           $(this).val("邮箱、昵称、手机号");
       }
       $('.b1').text("");
   });

    $('.ints12').on("focus",function(){
       $(this).val("");
       $('.b2').text("请填写6-20位长度的字符密码");
   }).on("blur",function(){
       if($(this).val() ==""){
           $(this).val("密码");
       }
       $('.b2').text("");
   });

    $('.cs4').hover(function(){
        $('.boot').css("display","block")
    },function(){
        $('.boot').css("display","none")
    });
    
  
});