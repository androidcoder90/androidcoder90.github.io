---
layout:     post
title:   黑马程序员_javascript基础
category: blog
description: ASP.Net+Android+IOS开发、.Net培训、期待与您交流！
---
#javaScript
###javaScript概述
    javaScript是基于对象和事件的脚本语言
    特性:
    a.安全性:不允许直接访问本地硬盘,它可以做信息的动态交互
    b.跨平台性:只要是可以解释JS的浏览器都可以执行,与平台无关

###javaScript与java区别
    a.JS是netscape公司产品,java是sun公司产品,现在sun属于oracle
    b.JS是基于对象,java是对面对象
    c.JS只要解释就可以执行,java需要先编译成字节码,再执行
    d.JS是弱类型,java是强类型.
    
    <script type="text/javascript" >
       	alert("kkk");
    </script>
    
###javaScript语法
      任何语言都有自己的语法规则,JS语法与java有些相像,在JS中一样有变量,语句,函数,数组等常见的组成元素.
      
      1.变量
      
      定义变量 ：var x=3;
                 var y="xs"
                 var y='asb'
                 alert(x);
      特殊常量值.undefined
      
      2.语句
      
        a.判断结构（if语句）
          注：var x=3;
          if(x==4)//可以进行比较运算
          if(x=4)//可以进行赋值运算，而且同样可以进行判断，不报错
          因为在JS中0就是false.非0就是true(通常用1表示)
          所以if(x=4)结果是true
          eg:var x=3;
            if(x=4)
              alert("yes");
            else
              alert("no");
            
        b.选择结构(switch语句)
          switch只接受四种类型byte,short,int,char
          eg：var x='abc';
          	  switch(x)
          	  {
            		case "ab":
              		 alert('a')
              		 break;
            		case "aa":
              		  alert('c');
              		  break;
            		default:
            		  alert('d')
            		  break;
          	   }
            c.
