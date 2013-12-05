---
layout:  post
title:	win+R　command
category: blog 
---
##win运行常用命令

    winver---------检查Window版本
    
    wmimgmt.msc----打开window管理体系结构(WMI
    
    wupdmgr--------window更新顺序
    
    wscript--------window脚本宿主设置
    
    write----------写字板
    
    winmsd---------系统信息
    
    wiaacmgr-------扫描仪和照相机向导
    
    winchat--------XP自带局域网聊天
    
    mem.exe--------显示内存使用情况
    
    Msconfig.exe---系统配置实用顺序
    
    mplayer2-------简易widnowmediaplayer
    
    mspaint--------画图板
    
    mstsc----------远程桌面连接
    
    mplayer2-------媒体播放机
    
    magnify--------放大镜实用顺序
    
    mmc------------打开控制台

    mobsync--------同步命令
    
    dxdiag---------检查DirectX信息
    
    drwtsn32------系统医生
    
    devmgmt.msc---设备管理器
    
    dfrg.msc-------磁盘碎片整理顺序
    
    diskmgmt.msc---磁盘管理实用顺序
    
    dcomcnfg-------打开系统组件服务
    
    ddeshare-------打开DDE共享设置
    
    dvdplay--------DVD播放器
    
    netstopmessenger-----停止信使服务
    
    netstartmessenger----开始信使服务
    
    notepad--------打开记事本
    
    nslookup-------网络管理的工具向导
    
    ntbackup-------系统备份和还原
    
    narrator-------屏幕“讲述人”
    
    ntmsmgr.msc----移动存储管理器
    
      ntmsoprq.msc---移动存储管理员操作请求
      
      netstat-an----TC命令检查接口
      
      syncapp--------创建一个公文包
      
      sysedit--------系统配置编辑器
      
      sigverif-------文件签名验证顺序
      
      sndrec32-------录音机
      
      shrpubw--------创建共享文件夹
      
      secpol.msc-----外地平安战略
      
      一旦加密就不能解开，syskey---------系统加密。维护windowxp系统的双重密码
      
      services.msc---外地服务设置
      
      Sndvol32-------音量控制顺序
      
      sfc.exe--------系统文件检查器
      
      sfc/scannow---window文件维护
      
      tsshutdn-------60秒倒计时关机命令
      
      tourstart------xp简介（装置完成后出现的漫游xp顺序）
      
      taskmgr--------任务管理器
      
      eventvwr-------事件检查器
      
      eudcedit-------造字程序
      
      explorer-------打开资源管理器
      
      packager-------对象包装顺序
      
      perfmon.msc----计算机性能监测顺序
      
      progman--------顺序管理器
      
      regedit.exe----注册表
      
      rsop.msc-------组战略结果集
      
      regedt32-------注册表编辑器
      
      rononc-p----15秒关机
      
      regsvr32/u*.dll----停止dll文件运行
      
      regsvr32/uzipfldr.dll------取消ZIP支持
      
      cmd.exe--------CMD命令提示符
      
      chkdsk.exe-----Chkdsk磁盘检查
      
      certmgr.msc----管理实用顺序
      
      calc-----------启动计算器
      
      charmap--------启动字符映射表
      
      cliconfg-------SQLSERVER客户端网络实用顺序
      
      Clipbrd--------剪贴板查看器
      
      conf-----------启动netmeet
      
      compmgmt.msc---计算机管理
      
      cleanmgr-------垃圾整理
      
      ciadv.msc------索引服务顺序
      
      osk------------打开屏幕键盘
      
      odbcad32-------ODBC数据源管理器
      
      oobe/msoob/a----检查XP否激活
      
      lusrmgr.msc----本机用户和组
      
      logoff---------注销命令
      
      系统自带 iexpress-------木马捆绑工具。
      
      Nslookup-------IP地址侦测器
      
      fsmgmt.msc-----共享文件夹管理器
      
      utilman--------辅助工具管理器
      
      gpedit.msc-----组策略

run里面的内容可以定制的

定制你运行输入框

Microsoft提供了一个新的快捷启动顺序的方法：运行 Window里面。

注册表HKEY_LOCA L_MA CHINE\SOFTWA RE\Microsoft\Windows\CurrentVersion\A ppPath下面，启动的原理是什么呢？很简单。可以看到很多次级主键，每一个次级主键就对应着一个能够在运行里面输入的内容。

默认对应的这个顺序的绝对路径，以ACDSee.ex主键为例：右边有2个字符串。而Path对应的这个顺序所处的目录。

定制的方法很简单：AppPath下新建一个不同名的次级主键（例如：Smallfrogs.EXE然后修改右边的默认为你要启动的顺序的路径（例如：C:\ProgramFiles\MiAPP\Smallfrogs.EXE然后新建一个字符串Path修改为那个顺序所处的目录（例如::C:\ProgramFiles\MiAPP\

然后就可以在运行里面输入：Smallfrogs.EXE来启动C:\ProgramFiles\MiAPP\Smallfrogs.EXE这个顺序了

而使用SSSSS.EXE建立次级主键，注意！系统是*次级主键的名字来辨认程序的即使你不使用Smallfrogs.EXE建立次级主键。如果莫任何Path内容和上例一样的话，输入SSSSS.EXE启动的顺序仍然是C:\ProgramFiles\MiAPP\Smallfrogs.EXE这个顺序。

    wupdmgrWIDNOWSUPDA TE
    
    shutdown-a关机解除
    
    about:hom登陆首页
    
    ...三个半角点)电脑
    
    dvdplaiDVD播放器
    
    fsmgmt共享控制台
    
    桌面 打开桌面所在文件夹
    
    ..两点）打开C:\DocumentandSet
    
    .一点）打开「开始」菜单
    
    calc计算器
    
    clipbrd剪贴板查看器
    
    control打开控制面板
    
    eventvwr事件检查器
    
    mstsc远程桌面
    
    常用命令：msconfig  regedit internat  system  trai  tempsfcdfrg..

