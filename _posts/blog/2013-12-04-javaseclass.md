---
layout:  post
title:	java 设计模式
category: blog 
---

#java 设计模式
##单例模式
###懒汉模式
	　package singleton;
	
	　　/**
	
	　　* 懒汉式单例
	
	　　* @author 蒋明原
	
	　　*
	
	　　*/
	
	　　public class LazySingleton {
	
	　　/**
	
	　　* 阻止外界使用new实例化对象
	
	　　*/
	
	　　private LazySingleton() {
	
	　　}
	
	　　/**
	
	　　* 只有在调用getInstance()时此类才会被装载
	
	　　* 在SingletonKerriganF.java中说明了加载顺序
	
	　　*/
	
	　　private static class SingletonHolder {
	
	　　/**
	
	　　* 对象实例,jvm保证只初始化一次
	
	　　*/
	
	　　static final LazySingleton INSTANCE = new LazySingleton();
	
	　　}
	
	　　/**
	
	　　* 获取实例
	
	　　* @return 返回唯一实例
	
	　　*/
	
	　　public LazySingleton getInstance() {
	
	　　return SingletonHolder.INSTANCE;
	
	　　}
	
	　　}
