<?php
	
	header("content-type","text/html;charset=utf-8");
	
	//一、接收前端传来的数据
	$vipnum = $_POST["vipnum"];
	$vippsword = $_POST["vippsword"];
	
	//二、保存数据
	//1、建立连接并选择数据库
	$con = mysql_connect("localhost","root","111111");
	if(!$con){
		//die("连接失败".mysql_error());
		echo "0";	
	}	
	mysql_select_db("dd",$con);
	
	//2、执行SQL语句
	$sqlStr = "insert into vip(vipnum,vippsword)
              values('".$vipnum."','".$vippsword."')";
	//echo $sqlStr;
	
	mysql_query($sqlStr,$con);
	
	//3、关闭数据库
	mysql_close($con);
	
	//三、给前端响应
	echo "注册成功";

?>