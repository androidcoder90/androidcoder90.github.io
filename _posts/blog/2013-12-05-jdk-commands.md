---
layout:  post
title:	jdk 常用命令
category: blog 
---
#Jdk 常用命令
###javac常用命令
    －g::生成调试信息
    －g:none:生成无调试信息
    －o:优化，可能增大类文件
    －nowarn：无警告
    －verbose:输出编译器信息
    －deprecation:输出不鼓励使用的API的程序路径
    －classpath+路径：指定用户类文件的路径。
    －sourcepath+路径：指定输入源文件的路径。
    －bootclasspath+路径：覆盖自举类文件的路径。
    －extdirs+目录:覆盖扩展类的路径
    －d + 目录：指定输出类文件的路径。
    －encoding + 编码：指定源文件中的字符集编码。
    －target + 版本：生成虚拟机的类文件
###JDK的常用命令
    native2ascii：将中文unicode码转换成ascii码的，-reverse参数可以将ascii码转换回来。
    javap：将class反编译成Java bytecodes。
    jdb：Java的debug工具。
    jps：查看JVM进程信息用的。
    keytool：生成keystore文件。
    jar：可将多个文件合并为单个JAR文件，jar是个多用途的压缩工
    具，它基于ZIP和ZLIB压缩格式的。
    javadoc：Javadoc解析Java源文件中的声明和文档注释，并产生相
    应的HTML页面，描述公有类、保护类、内部类、接口、构造函数、
    方法。在实现时，javadoc要求且依赖于Java编译器完成其工作
###Java各个目录含义
    JDK安装完成后，在安装目录下会安装很多目录和文件。这里再对
    这些目录进行简单的介绍。分类及说明如表所示
    
    bin     JDK的基本程序都在这里，如javac、java、javadoc等
    demo    和字面意思一样，java自带的一些例子程序
    jre     java的运行时的环境都在这里
    lib     java的类库
    src     java类库的源代码
    
    
