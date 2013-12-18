---
layout:     post
title:   svn merge via diffmerge
category: blog
description: 
---

# Preface
diffmerge 是一款非常棒的diff工具，利用diffmerge 可以很好的做到svn merge（交互）.

# install diffmerge
在此下载<http://sourcegear.com/diffmerge/downloads.php>

	sudo cp diffmerge /usr/bin/ #放到任一系统$PATH

# Config

>> 以下提到的svn配置文件在这里：<https://github.com/hilojack/config/tree/master/svn>

## 编写diffmerge.sh
	cp diffmerge.sh ~/.subversion/
	chmod a+x ~/.subversion/diffmerge.sh
## 调用diffmerge.sh
编写~/.subversion/config

	diff3-cmd = /Users/hilojack/.subversion/diffmerge.sh
	diff-cmd = /Users/hilojack/.subversion/diffmerge.sh
	merge-tool-cmd = diff3


## 执行svn merge 吧
	svn merge https://host/path*****
	--- Merging r97392 through r98012 into 'a.php':
	UG   a.php
	--- Merging r97392 through r98012 into 'b.php'
	 G   b.php
