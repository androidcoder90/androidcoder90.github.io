---
layout: post
title: 黑马程序员_java基础_集合框架
category: opinion
description: 转自：黑马论坛分享
---

#四、集合框架
###1：String类：字符串(重点)
    	(1)多个字符组成的一个序列，叫字符串。
    	   生活中很多数据的描述都采用的是字符串的。而且我们还会对其进行操作。
    	   所以，java就提供了这样的一个类供我们使用。
    	(2)创建字符串对象
    		A:String():无参构造
    			**举例：
    			  String s = new String();
    			  s = "hello";
    			  sop(s);
    		B:String(byte[] bys):传一个字节数组作为参数 *****
    			**举例
    			  byte[] bys = {97,98,99,100,101};
    			  String s = new String(bys);
    			  sop(s);
    		C:String(byte[] bys,int index,int length):把字节数组的一部分转换成一个字符串 *****
    			**举例
    			  byte[] bys = {97,98,99,100,101};
    			  String s = new String(bys,1,2);
    			  sop(s);
    		D:String(char[] chs):传一个字符数组作为参数 *****
    			**举例
    			  char[] chs = {'a','b','c','d','e'};
    			  String s = new String(chs);
    			  sop(s);
    		E:String(char[] chs,int index,int length):把字符数组的一部分转换成一个字符串 *****
    			**举例
    			  char[] chs = {'a','b','c','d','e'};
    			  String s = new String(chs,1,2);
    			  sop(s);	
    		F:String(String str):把一个字符串传递过来作为参数
    			  char[] chs = {'a','b','c','d','e'};
    			  String ss = new String(s);
    			  sop(ss);
    		G:直接把字符串常量赋值给字符串引用对象(最常用) *****
    			**举例
    			  String s = "hello";
    			  sop(s);
####(3)面试题
    		A:请问String s = new String("hello");创建了几个对象。
    		  两个。一个"hello"字符串对象，在方法区的常量池；一个s对象，在栈内存。
    
    		B:请写出下面的结果
    			String s1 = new String("abc");
    			Strign s2 = new String("abc");
    			String s3 = "abc";
    			String s4 = "abc";
    
    			sop(s1==s2);  //false
    			sop(s1==s3);  //false
    			sop(s3==s4);  //true
    		C:字符串对象一旦被创建就不能被改变。
    			指的是字符串常量值不改变。
####(4)字符串中各种功能的方法
    		A:判断
    		****	boolean equals(Object anObject):判断两个字符串的内容是否相同，复写了Object的方法
    		****	boolean equalsIgnoreCase(String anotherString):判断两个字符串的内容是否相同，
    									不区分大小写
    		****	boolean contains(String s):判断一个字符串中是否包含另一个字符串
    						注意：判断字符串是否包含特殊字符.直接表示为str.contains(".")
    			boolean endsWith(String suffix):测试此字符串是否以指定的后缀结束
    			boolean startsWith(String suffix):测试此字符串是否以指定的前缀开始
    			boolean isEmpty():测试字符串是否为空
    		B:获取
    		*****	int length():返回此字符串的长度
    		*****	char charAt(int index):返回指定索引处的 char值
    		*****	int indexOf(int ch):返回指定字符在此字符串中第一次出现处的索引。 
    			int indexOf(int ch, int fromIndex):返回在此字符串中第一次出现指定字符处的索引，
    							   从指定的索引开始搜索。 
    			int indexOf(String str):返回指定子字符串在此字符串中第一次出现处的索引。 
    			int indexOf(String str, int fromIndex):返回指定子字符串在此字符串中第一次
    								出现处的索引，从指定的索引开始。 
    		***	int lastIndexOf(int ch)：返回指定字符在此字符串中最后一次出现处的索引。 
    			int lastIndexOf(int ch, int fromIndex) 
    				返回指定字符在此字符串中最后一次出现处的索引,从指定的索引处开始进行反向搜索。 
    			int lastIndexOf(String str) 
    				返回指定子字符串在此字符串中最右边出现处的索引。 
    			int lastIndexOf(String str, int fromIndex) 
    				返回指定子字符串在此字符串中最后一次出现处的索引，从指定的索引开始反向搜索。 
    		*****	String substring(int beginIndex) (注意：该方法substring的String是小写！！！)
    				返回一个新的字符串，它是此字符串的一个子字符串。 
    			String substring(int beginIndex, int endIndex) (注意该方法的String是小写！！！)
    				返回一个新字符串，它是此字符串的一个子字符串,包含头不包含尾。 
    		C:转换
    		*****	byte[] getBytes()：(很常用！)从字符串到字节数组的方法
    			void getChars(int srcBegin, int srcEnd, char[] dst, int dstBegin) 
    				将字符从此字符串复制到目标字符数组。 
    		*****	char[] toCharArray()：(很常用！)从字符串到字符数组的方法
    		****	static String copyValueOf(char[] data) 
    				返回指定数组中表示该字符序列的 String。 
    			static String copyValueOf(char[] data, int offset, int count) 
    				返回指定数组中表示该字符序列的 String。 
    		*****	static String valueOf(数据类型):把该数据类型的数据转换成字符串。
    		***	String toLowerCase()：把字符串转换成小写
    			String toUpperCase()：把字符串转换成大写
    		***	字符串的连接
    			String concat(String str):将指定字符串连接到此字符串的结尾。
    		D:替换
    			String replace(char oldChar, char newChar):用新字符替换旧字符(替换所有)
    			String replace(String target, String replacement):用新的子串换旧串
    		E:分割
    			String[] split(String regex)：根据指定的字符串把一个字符串分割成一个字符串数组
    		F:	
    			String trim():去除字符串的前后空格
    		G:	
    			int compareTo(String anotherString) 
    				按字典顺序比较两个字符串。 
    			int compareToIgnoreCase(String str) 
    				按字典顺序比较两个字符串，不考虑大小写。 
####(5)练习
    		1:模拟登录,给三次机会,并提示还有几次.
    		默认的用户名和密码为admin。 区分大小写。
    		自己从键盘输入用户名和密码。
    
    		2:给定一个字符串统计,统计大写字母,小写字母,数字出现的个数.
    		***注意:不包括特殊字符
    		从键盘输入一个不包含特殊字符的字符串(只有26个字母和0-9组成)。
    
    		3:给定一个字符串,把它变成首字母大写,其他字母小写的字符串.
    		从键盘输入一个字符串，全部26个字母组成的。
    
    		4:子串在整串中出现的次数。
    		也就是说:获取一个字符串中,指定的字串在该字符串中出现的次数.
    		例如:
    		"nbasdnbafllgnbahjnbakqqqqlnba"  在这个字符串中，多有个nba.
    
    		5:对字符串中字符进行自然顺序排序。
    		"basckd"-->"abcdks"
    
    		先留做思考内容：
    		6:两个字符串的最大相同子串。
    		两个字符串的最大相同子串。
    		比如:
    		"sadabcdfghjkl"
    		werabcdtyu"
    
###2：StringBuffer
    	(1)字符串的缓冲区，是一个容器。
    	(2)它和String的区别
    		它是缓冲区可变长度的。
    	(3)构造方法
    		StringBuffer() 构造一个其中不带字符的字符串缓冲区，初始容量为 16 个字符。
    		StringBuffer(int num) 构造一个不带字符，但具有指定初始容量的字符串缓冲区。
    		StringBuffer(String str) 构造一个字符串缓冲区，并将其内容初始化为指定的字符串内容。
####(4)常用方法
    		A:增加数据
    			**append ：添加各种类型的数据
    			**insert : 在容器指定位置插入各种类型的数据。
    		B:删除数据
    			**deleteCharAt : 删除指定位置的字符
    			**delete 还可以用于清空StringBuffer的缓冲区
    		C:替换
    			**replace
    		D:获取 
    			**charAt 
    		E:长度和容量
    			**length() 元素的个数
    			**capacity 元素的理论值
    		F:获取元素的位置
    			**indexOf
    			**lastIndexOf
    		G:截取
    			**substring(int start)
    			**substring(int start,int end)
    		H:反转
    			**reverse
    	(5)字符串和StringBuffer的转换
    		String-->StringBuffer通过构造:
    			如:StringBuffer sb = new StringBuffer(String str)
    		StringBuffer--String通过toString方法 
    			如:StringBuffer sb = new StringBuffer();
    			   sb.toString();
    
###3：StringBuilder
    	和StringBuffer的功能是一样的，但是有区别：
    	StringBuffer(JDK1.0)是线程安全的。
    	StringBuilder(JDK1.5)不保证线程安全。
    
    	一般来说，我们写的程序都是单线程的，所以，用StringBuilder，效率高。
    
    	JDK版本的升级原则：
    	A:提高效率
    	B:提高安全性
    	C:简化书写
    
###4：基本数据类型的对象包装类
    	(1)为了更方便的操作每个基本数据类型，java对其提供了很多的属性和方法供我们使用。
    	(2)用途：
    		**将基本数据类型封装成对象的好处在于可以在对象中定义更多的功能操作该数据。
    		**常用的操作之一：用于基本数据类型与字符串之间的转换。
    		A:方便操作
    		B:用于和字符串进行相互转换
    	(3)基本数据类型和对象类型的对应
    		byte		Byte
    		short		Short 
    		int		Integer
    		long		Long
    		float		Float
    		double		Double
    		boolean		Boolean
    		char		Character
    	(4)构造方法
    
    		字段摘要：
    			static int MAX_VALUE 值为 2^31-1 的常量，它表示 int 类型能够表示的最大值         
    			static int MIN_VALUE  值为 -2^31 的常量，它表示 int 类型能够表示的最小值
    			static Class<Integer> TYPE 表示基本类型int的Class 实例
              
    		Integer(int value) 构造一个新分配的Integer对象，它表示指定的int值。
    		Inreger(String s) 注意：s必须是纯数字的字符串。否则会有异常NumberFormatException
    		                        
####(5)几个常用的方法
    		Integer.toBinaryString();
    			以二进制（基数 2）无符号整数形式返回一个整数参数的字符串表示形式。
    		Integer.toOctalString();
    			以八进制（基数 8）无符号整数形式返回一个整数参数的字符串表示形式。
    		Integer.toHexString();
    			以十六进制（基数 16）无符号整数形式返回一个整数参数的字符串表示形式。
    		static int Integer.parseInt(String s) 将字符串参数作为有符号的十进制整数进行解析,
    			字符串必须是int型范围内的数字字符串
    		static int Integer.parseInt(String s,int basic) 
    			使用第二个参数指定的基数,将字符串参数解析为有符号的整数.
    			字符串必须是int型范围内的数字字符串
    		short shortValue() 以short类型返回该Integer的值。          
    		int intValue() 以int类型返回该Integer的值。  
    		static Integer valueOf(int num) 返回一个表示指定的 int 值的 Integer 实例。
    		static Integer valueOf(String s) 返回保存指定的String的值的Integer对象。           
                    static Integer valueOf(String s, int radix) 
    			返回一个Integer对象，该对象中保存了用第二个参数提供的基数进行
    			解析时从指定的String中提取的值。 
    
####(6)类型转换
    		int -- Integer
    			int num = 20;
    			A:Integer i = new Integer(num);
    			B:Integer i = Integer.valueOf(num);
    		Integer -- int
    			Integer i = new Integer(20);
    			A:int num = i.intValue();
    		
    		int -- String
    			int num = 20;
    			A:String s = String.valueOf(num);
    			B:String s = ""+num;
    			C:String s = Integer.toString(num);
    		String -- int
    			String s = "20";
    			A:int num = Integer.parseInt(s);
    			B:Integer i = new Integer(s);或者Integer i = Integer.valueOf(s);
    			  int num = i.intValue();	
###6、集合框架：
    	(1)为什么出现集合类？
    		面向对象对事物的体现都是以对象的形式，为了方便对多个对象的操作，就对对象进行存储。
    		集合就是存储对象最常用的一种方式.
    	(2)数组和集合都是容器，两者有何不同？
    		**数组长度固定，而集合长度是可变的	
    		**数组值可以存储对象，还可以存储基本数据类型;而集合只能存储对象	
    		**数组存储数据类型是固定的，而集合存储的数据类型不固定		
    	(3)集合类的特点：
    		集合只能存储对象
    		集合的长度是可变的
    		集合可以存储不同类型的对象
    	(4)集合类框架(重要！！！要分清几种容器间的区别)：
    		**Collection:顶层接口
    		     |--->List:列表，元素是有序的(元素带角标索引)，可以有重复元素,可以有null元素。
    		            |--->ArrayList(JDK1.2):底层的数据结构是数组数据结构，特点是查询速度快(因为带角标)，
    						   但是增删速度稍慢,因为当元素多时，增删一个元素则所有元素的角标都得改变
    						   线程不同步。默认长度是10，当超过长度时，按50%延长集合长度。				   
    			    |--->LinkedList(JDK1.2):底层数据结构式链表数据结构(即后面一个元素记录前一个)，
    						    特点：查询速度慢，因为每个元素只知道前面一个元素，但增删速度快
    						    因为元素再多，增删一个，只要让其前后的元素重新相连即可
    						    线程是不同步的。							
    			    |--->Vector(JDK1.0):底层数据结构是数组数据结构.特点是查询和增删速度都很慢。
    						默认长度是10，当超过长度时,按100%延长集合长度。
    						线程同步。
    						(Vector功能跟ArrayList功能一模一样，已被ArrayList替代)
    
    
    		   **List使用注意！
    			|--->ArrayList:
    			(1)当往ArrayList里面存入元素没什么要求时，即只要求有序就行时；
    			   
    			(2)当往ArrayList里面存入元素要求不重复时，比如存入学生对象，当同名同姓时
    			   视为同一个人，则不往里面存储。则定义学生对象时，需复写equals方法
    			   public boolean equals(Object obj)
    			   {
    				if(!(obj instanceof Student))
    					return false;
    				Student stu = (Student)obj;
    				return this.name.equals(stu.name)&&this.age==stu.age;
    			   }
    			   则往ArrayList集合通过add存入学生对象时，集合底层自己会调用学生类的equals方法，
    			   判断重复学生则不存入。
    			 注：对于List集合，无论是add、contains、还是remove方法，判断元素是否相同，
    			     都是通过复写equals方法来判断！
    
    			|--->LinkedList
    			(1)LinkLedist的特有方法：
    				 boolean offerFirst(E e)  在此列表的开头插入指定的元素。
    				 boolean offerLast(E e) 在此列表末尾插入指定的元素。
    				 E peekFirst() 获取但不移除此列表的第一个元素；如果此列表为空，则返回 null。
    				 E peekLast() 获取但不移除此列表的最后一个元素；如果此列表为空，则返回 null。
    				 E pollFirst() 获取并移除此列表的第一个元素；如果此列表为空，则返回 null。
    				 E pollLast() 获取并移除此列表的最后一个元素；如果此列表为空，则返回 null。
    			(2)通过LinkLedist的特有方法，可以实现某些数据特殊方式的存取，比如堆栈和队列。
    
    				一般情况下，使用哪种List接口下的实现类呢？
    				如果要求增删快，考虑使用LinkedList
    				如果要求查询快，考虑使用ArrayList
    				如果要求线程安全，考虑使用Vector。
    
    
    
    		     |--->Set:集合，元素是无序的(因为没有索引)，元素不可以重复。可以有null元素。
    			    |--->HashSet(JDK1.2):底层数据结构是哈希表、存取速度快、元素唯一、线程不同步。
    					 保证性元素唯一的原理:
    					 先判断元素的hashCode值是否相同，再判断两元素的equals方法是否为true
    					 (往HashSet里面存的自定义元素要复写hashCode和equals方法，
    					 以保证元素的唯一性！)
    			    |--->TreeSet:底层数据结构式二叉树。可以对Set集合中的元素进行排序。元素有序、线程不同步。
    					 保证元素唯一性的依据：compareTo方法return 0
    					 TreeSet排序的第一种方式:让元素自身具备比较性，比如八种基本数据类型或则字符串，
    								 实现Compareble接口,覆盖compareTo方法，
    								 此方式是元素的自然顺序			 
    					 TreeSet排序的第一种方式:当元素自身不具备比较性(比如存储学生对象时)或者具备的
    								 比较性不是我们所需要的比较性时(比如想字符串的长度排序),
    								 此时就需要让集合自身具备自定义的比较性。 
    								 那如何让集合自身具备比较性呢？可在集合初始化时，
    								 就让集合具备比较方式。即定义一个类，
    								 实现Comparator接口，覆盖compare方法。
    
####**Set集合使用注意事项：
    			(1)HashSet:
    			      通过new的方式往HashSet里面存的元素的hashCode都不同，但通常我们定义对象，
    			      比如学生对象时，虽然是new的两个学生对象，但是当他们name和age一样时，我们认为是
    			      同一个对象，所以为了保证元素的唯一性，我们通常在往HashSet集合里面存储元素时，
    			      在定义对象的类中通常复写hashCode和equals方法。
    			      public int hashCode()
    			      {
    				return name.hashCode()+age*39;
    			      }
    			      public boolean equals(Object obj)
    			      {
    				if(!(obj instanceof Student))
    					return false;
    				Student stu = (Student)obj;
    				return this.name.equals(stu.name)&&this.age==stu.age;
    			      }
    
    			     HashSet是如何保证元素唯一性的呢？
    			      **如果两元素的hashCode值不同，则不会调用equals方法
    			      **如果两元素的hashCode值相同，则继续判断equals是否返回true；
    			      **hashCode和equals方法虽然定义在自定义对象类里面，但不是我们手动调用
    			        而是往HashSet集合里面存储元素的时候，集合底层自己调用hashCode和equals
    				它自己拿对象去判断，自己判断两元素是否是同一个元素。
    
####(2)TreeSet:
    			     TreeSet要求往里面存的元素具备比较性，否则会报错。
    			     TreeSet排序的第一种方式:让元素自身具备比较性
    				  定义对象类，实现Compareble接口,复写compareTo方法，此方式是元素的自然顺序
    				  class Student implements Comparable
    				  {
    					private String name;
    					private int age;
    					public Student(String name,int age)
    					{
    						this.name=name;
    						this.age=age;
    					}
    					public String getName()
    					{
    						return name;
    					}
    					public int getAge()
    					{
    						return age;
    					}
    					public int compareTo(Object obj)
    					{
    						if(!(obj instanceof Student))
    							throw new RuntimeException("不是学生对象！");
    						Student stu = (Student)obj;
    						int num = this.age-stu.age;
    						if(num==0)
    							return this.name.compareTo(stu.name);
    						return num;
    					}
    				  }
    			    TreeSet排序的第一种方式:让集合具备比较性
    					 当元素自身不具备比较性(比如存储学生对象时)或者具备的
    					 比较性不是我们所需要的比较性时(比如想字符串的长度排序),
    					 此时就需要让集合自身具备自定义的比较性。 
    					 那如何让集合自身具备比较性呢？可在集合初始化时，
    					 就让集合具备比较方式。即定义一个类，
    					 实现Comparator接口，覆盖compare方法。
    				 class StringLengthComparator implements Comparator
    				 {
    					public int compare(Object obj1,Object obj2)
    					{
    						String s1 = (String)obj1;
    						String s2 = (String)obj2;
    						int num = new Integer(s1.length()).compareTo(new Integer(s2.length()));
    						if(num==0)
    							return s1.compareTo(s2);
    						return num;
    					}
    				 }
    				 class TreeSetTest
    				 {
    					public static void main(String[] args)
    					{
    						TreeSet ts = new TreeSet(new StringLengthComparator());
    						ts.add("addfg");
    						ts.add("dfg");
    						ts.add("agtuug");
    						ts.add("vgjkg");
    						sop(ts);
    					}
    				 }
    
    				 
    								 	
    			     基本数据类型或字符串对象均实现了Comparable接口，故同种类型基本数据间具备比较性，即自然顺序。
    	
    			      
    	**Map:顶层接口,该集合存储的是键值对,而且键是唯一的,Map和Set很像,Set集合底层就是使用了Map集合。
    		Map集合没有迭代器，要取出元素必须先将Map集合转换成Set集合才能遍历元素
    	   |--->HashTable(JDK1.0): 
    		底层是哈希表数据结构；
    		不可以使用null键和null值；
    		用作键的对象必须实现hashCode和equals方法来保证键的唯一性
    		线程同步，效率低
    	   |--->HashMap(JDK1.2):
    		底层是哈希表数据结构；
    		允许使用null键和null值；
    		线程不同步，效率高；
    		保证元素唯一性的:
    			 原理：先判断元素的hashCode值是否相同，再判断两元素的equals方法是否为true
    			 (往HashSet里面存的自定义元素要复写hashCode和equals方法，
    			 以保证元素的唯一性！)
    
####s    
    		class Student {
    			private String name;
    			private int age;
    			public Student(String name, int age) {
    				super();
    				this.name = name;
    				this.age = age;
    			}
    			public int getAge() {
    				return age;
    			}
    			public void setAge(int age) {
    				this.age = age;
    			}
    			public String getName() {
    				return name;
    			}
    			public void setName(String name) {
    				this.name = name;
    			}
    			
    			@Override
    			public int hashCode(){
    				return name.hashCode()+age*34;
    			}
    			@Override
    			public boolean equals(Object obj){
    				
    				if(!(obj instanceof Student))
    					return false;
    				Student stu = (Student)obj;
    				return this.name.equals(stu.name)&&this.age==stu.age;
    			}
    		public class HashMapDemo1 {
    			public static void main(String[] args) {
    				Map<Student , String> hmap = new HashMap<Student , String>();
    				hmap.put(new Student("001",20), "beijing");
    				hmap.put(new Student("002",25), "hebei");
    				hmap.put(new Student("003",50), "hainan");
    				hmap.put(new Student("001",20), "beijing");
    				
    				System.out.println(hmap.size());
    				Set<Student> keySet = hmap.keySet();
    				Iterator<Student> it = keySet.iterator();
    				while(it.hasNext()){
    					Student stu = it.next();
    					String addr = hmap.get(stu);
    					System.out.println(stu.getName()+".."+stu.getAge()+"::"+addr);
    				}	
    			}	
    		}			
####|--->TreeMap(JDK1.0):
    		底层是二叉树结构；
    		允许使用null键和null值；
    		线程不同步；
    		可以给Map集合中的键进行排序.
    		TreeMap排序的第一种方式:让元素自身具备比较性，比如八种基本数据类型或则字符串，
    				 实现Compareble接口,覆盖compareTo方法，
    				 此方式是元素的自然顺序			 
    		TreeMap排序的第一种方式:当元素自身不具备比较性(比如存储学生对象时)或者具备的
    				 比较性不是我们所需要的比较性时(比如想字符串的长度排序),
    				 此时就需要让集合自身具备自定义的比较性。 
    				 那如何让集合自身具备比较性呢？可在集合初始化时，
    				 就让集合具备比较方式。即定义一个类，
    				 实现Comparator接口，覆盖compare方法。
    		class Student implements Comparable<Student>{
    			private String name;
    			private int age;
    			public Student(String name, int age) {
    				super();
    				this.name = name;
    				this.age = age;
    			}
    			public int getAge() {
    				return age;
    			}
    			public void setAge(int age) {
    				this.age = age;
    			}
    			public String getName() {
    				return name;
    			}
    			public void setName(String name) {
    				this.name = name;
    			}
    			@Override
    			public int compareTo(Student stu) {
    				int num = new 	Integer(this.age).compareTo(new Integer(stu.age));
    				if(num==0)
    					return this.name.compareTo(stu.name);
    				return num;
    			}			
    		}
    
    		public class HashMapDemo1 {
    			public static void main(String[] args) {
    							
    				Map<Student , String> tmap = new TreeMap<Student , String>();
    				tmap.put(new Student("001",20), "beijing");
    				tmap.put(new Student("002",25), "hebei");
    				tmap.put(new Student("003",50), "hainan");
    				tmap.put(new Student("001",20), "beijing");
    				
    				System.out.println(tmap.size());
    				Set<Student> keySet1 = tmap.keySet();
    				Iterator<Student> it1 = keySet1.iterator();
    				while(it1.hasNext()){
    					Student stu = it1.next();
    					String addr = tmap.get(stu);
    					System.out.println(stu.getName()+".."+stu.getAge()+"::"+addr);		
    				}
    			}
    		}
    	
    
    	**Iterator：对collection进行迭代的迭代器.迭代器取代了Enumeration。
    		迭代器和枚举的区别：
    		迭代器允许调用者利用定义良好的语义在迭代期间从迭代器所指向的collection移除元素
    		方法名称得到了改进，简化书写 
    	**LisIterator：系列表迭代器，允许程序员按任一方向遍历列表、迭代期间修改列表		
    	**Comparable：此接口强行对实现它的每个类的对象进行整体自然排序。使元素具备比较性
    	**Comparator：强行对某个对象collection进行整体排序的比较函数，使集合具备比较性
    	**Collections：此类完全由在 collection 上进行操作或返回 collection 的静态方法组成。
    	**Arrays：此类包含用来操作数组(比如排序和搜索)的各种静态方法
    
###7、集合类各容器方法：
    **接口Collection方法摘要(没有构造方法)		
    	a)添加：							
    		i.  boolean add(E e)							
    		j.  boolean addAll(Collection c)
    	b)删除：
    		i.  void clear():清空容器
    		j.  boolean remove(Objec object):
    		k.  boolean removeAll(Collection c):
    	c)判断：
    		i.  boolean contains(Object object):判断是否包含此元素
    		j.  boolean containsAll(Collection c):判断是否包含一堆元素
    		k.  boolean equals(Object object):比较此collection与指定对象是否相等
    		m.  boolean isEmpty():判断是否集合为空
    	d)获取：
    		h.  Iterator iterator():取出
    		i.  int hashCode():返回此collection的哈希值
    		j.  int size():返回此collection中元素的个数
    		k.  boolean retainAll(Collection c):取交集
    		m.  Object toArray():返回此collection中所有元素的数组
    		n.  T[] toArray(T[] a):返回包含此collection中所有元素的数值。
####*****List集合子类及其方法
    	(1)List接口是Collection接口的一个子接口。
    	(2)List接口中的元素有如下特点(对角标的操作都是特有方法，因为有序)：
    		A:元素有序(存储顺序和取出顺序一致)
    		B:元素可以重复
    	(3)List接口中的特有方法
    		A:add(int index,Object obj):在指定位置加入元素
    		B:remove(int index):移除指定位置的元素
    		C:set(int index,Object obj):修改指定位置的元素
    		D:get(int index):获取指定位置的元素
    		E:indexOf(Object obj):获取指定元素的位置
    		F:subList(int start,int end):从一个大的List中截取一个小的List
    		G:listIterator():返回一个List接口特有的迭代器
####(1)、ArrayList：
        |--->构造方法摘要：(少用，不是重点)
    	ArrayList()：构造一个初始容量为 10 的空列表。
    	ArrayList(Collection<? extends E> c)： 构造一个包含指定 collection 的元素的列表，						   
    	ArrayList(int initialCapacity)： 构造一个具有指定初始容量的空列表。
        |--->方法摘要：
    	|--->添加：
    	boolean add(E e)： 将指定的元素添加到此列表的尾部。
    	void add(int index, E element)： 将指定的元素插入此列表中的指定位置。
    	boolean addAll(Collection<? extends E> c):按照指定 collection 的迭代器所返回的元素顺序，
    						 将该 collection 中的所有元素添加到此列表的尾部 
    	boolean addAll(int index, Collection<? extends E> c)： 从指定的位置开始，将指定 collection
    							       中的所有元素插入到此列表中。 
    	|--->删除：
    	void clear(): 移除此列表中的所有元素。
    	E remove(int index): 移除此列表中指定位置上的元素。 
    	boolean remove(Object o): 移除此列表中首次出现的指定元素（如果存在）。
    	protected  void removeRange(int fromIndex, int toIndex): 
    			移除列表中索引在 fromIndex（包括）和 toIndex（不包括）之间的所有元素。
    	boolean removeAll(Collection<?> c): 从列表中移除指定 collection 中包含的其所有元素 
    	|--->获取：
    	E get(int index): 返回此列表中指定位置上的元素。
    	int indexOf(Object o): 返回此列表中首次出现的指定元素的索引，或如果此列表不包含元素，则返回 -1。
    	int lastIndexOf(Object o) 返回此列表中最后一次出现的指定元素的索引，或如果此列表不包含索引，则返回 -1。   
    	public List<E> subList(int fromIndex,int toIndex): 返回列表中指定的 fromIndex（包括 ）										   和 toIndex（不包括）之间的部分视图。
    	Iterator<E> iterator(): 返回按适当顺序在列表的元素上进行迭代的迭代器。
    	ListIterator<E> listIterator(int index):返回列表中元素的列表迭代器(按适当顺序),从列表的指定位置开始。
    	|--->修改：(特有方法！！)
    		E set(int index, E element): 用指定的元素替代此列表中指定位置上的元素。 
####(2)LinkedList:
    	|--->构造方法摘要：
    		LinkedList(): 构造一个空列表。 
    		LinkedList(Collection<? extends E> c): 构造一个包含指定 collection 中的元素的列表，
    						       这些元素按其 collection 的迭代器返回的顺序排列。
    	|--->方法摘要:(特有的)
    		|--->添加
    			void addFirst(E e): 将指定元素插入此列表的开头。 
    			void addLast(E e): 将指定元素添加到此列表的结尾。 
    		|--->获取元素，但不删除元素
    			 E get(int index): 返回此列表中指定位置处的元素。           
    			 E getFirst(): 返回此列表的第一个元素。          
    			 E getLast(): 返回此列表的最后一个元素。
    		|--->获取元素且删除元素
    			 E remove()： 获取并移除此列表的头（第一个元素）。          
    			 E remove(int index)： 移除此列表中指定位置处的元素。         
    			 boolean remove(Object o)： 从此列表中移除首次出现的指定元素（如果存在）。         
    			 E removeFirst()： 移除并返回此列表的第一个元素。 
    			 E removeLast(): 移除并返回此列表的最后一个元素。
    		|--->修改
    			 E set(int index, E element) 将此列表中指定位置的元素替换为指定的元素。 
####(3)Vector
    	|--->构造方法摘要：
    		Vector(): 构造一个空向量，使其内部数据数组的大小为 10，其标准容量增量为零。          
    		Vector(Collection<? extends E> c):  构造一个包含指定 collection 中的元素的向量，
    						    这些元素按其 collection 的迭代器返回元素的顺序排列。
    	|--->方法摘要：
    		|--->添加：
    			boolean add(E e): 将指定元素添加到此向量的末尾。
    			void add(int index, E element): 在此向量的指定位置插入指定的元素。         
    			boolean addAll(Collection<? extends E> c):
    					 将指定 Collection 中的所有元素添加到此向量的末尾， 
    					 按照指定 collection 的迭代器所返回的顺序添加这些元素。 
    			boolean addAll(int index, Collection<? extends E> c): 在指定位置将指定 Collection 中的所有元素插入到此向量中。
    		|--->获取:
    			Enumeration<E> elements(): 返回此向量的组件的枚举。
    			   Vector特有的取出方式:
    			   枚举和迭代器很像，其实枚举和迭代器是一样的，只是因为枚举的名称和方法的名称
    			   名字都过长，所以枚举被迭代器取代了。
    			|--->枚举Enumeration的方法摘要：
    				 boolean hasMoreElements(): 测试此枚举是否包含更多的元素。 
    				 E nextElement(): 如果此枚举对象至少还有一个可提供的元素，
    						  则返回此枚举的下一个元素。 
    *****Set集合子类及其方法
    (1)HashSet:它不保证set的迭代顺序;特别是它不保证该顺序恒久不变.此类允许使用null元素。 
    	|--->构造方法：
    		HashSet() 构造一个新的空 set，其底层 HashMap 实例的默认初始容量是 16，加载因子是 0.75。
    		HashSet(Collection<? extends E> c) 构造一个包含指定 collection 中的元素的新 set。
    	|--->方法摘要：
    		boolean add(E e) 如果此 set 中尚未包含指定元素，则添加指定元素。   
    		void clear() 从此 set 中移除所有元素。	  
    		Object clone() 返回此 HashSet 实例的浅表副本：并没有复制这些元素本身。 	  
    		boolean contains(Object o) 如果此 set 包含指定元素，则返回 true。 	  
    		boolean isEmpty() 如果此 set 不包含任何元素，则返回 true。 	  
    		Iterator<E> iterator() 返回对此 set 中元素进行迭代的迭代器。 	  
    		boolean remove(Object o) 如果指定元素存在于此 set 中，则将其移除。	   
    		int size() 返回此 set 中的元素的数量（set 的容量）。  
####(2)TreeSet:使用元素的自然顺序对元素进行排序，或者根据创建 set 时提供的 Comparator 进行排序.
    	|--->构造方法：
    		TreeSet() 构造一个新的空 set，该set根据其元素的自然顺序进行排序。          
    		TreeSet(Collection<? extends E> c) 
    			 构造一个包含指定 collection 元素的新 TreeSet，它按照其元素的自然顺序进行排序。 
    		TreeSet(Comparator<? super E> comparator)  构造一个新的空 TreeSet，它根据指定比较器进行排序。
    	|--->方法摘要：
    		添加：
    		 boolean add(E e)  将指定的元素添加到此 set（如果该元素尚未存在于 set 中）。
    		 boolean addAll(Collection<? extends E> c) 将指定 collection 中的所有元素添加到此 set 中。
    		 删除：
    		  void clear() 移除此 set 中的所有元素。 
    		  boolean remove(Object o)  将指定的元素从 set 中移除（如果该元素存在于此 set 中）。 
    		  E pollFirst() 获取并移除第一个（最低）元素；如果此 set 为空，则返回 null。 
    		  E pollLast() 获取并移除最后一个（最高）元素；如果此 set 为空，则返回 null。 
    		获取：
    		  Iterator<E> iterator()  返回在此 set 中的元素上按升序进行迭代的迭代器。
    		  E first() 返回此 set 中当前第一个（最低）元素。
    		  E last() 返回此 set 中当前最后一个（最高）元素。
    		  int size()  返回 set 中的元素数（set 的容量）。
    		判断：
    		 boolean isEmpty()  如果此 set 不包含任何元素，则返回 true。 
    		 boolean contains(Object o) 如果此 set 包含指定的元素，则返回 true。 
###   
    **Map:将键映射到值的对象。Map集合没有迭代器！Map集合特点：该集合存储键值对。而且键是唯一的。
    	|--->方法摘要：
    	   |--->添加：
    	      V put(K key, V value) 将指定的值与此映射中的指定键关联（可选操作）。           
    	      void putAll(Map<? extends K,? extends V> m) 从指定映射中将所有映射关系复制到此映射中
    	   |--->删除：
                  void clear()  从此映射中移除所有映射关系（可选操作）。 
    	      V remove(Object key) 如果存在一个键的映射关系，则将其从此映射中移除（可选操作）。
    	   |--->判断
    	      boolean containsKey(Object key) 如果此映射包含指定键的映射关系，则返回 true。 
                  boolean containsValue(Object value) 如果此映射将一个或多个键映射到指定值，则返回 true。
                  boolean isEmpty() 如果此映射未包含键-值映射关系，则返回 true。 
               |--->获取
    	      int size() 返回此映射中的键-值映射关系数。 
                  Collection<V> values()  返回此映射中包含的值的 Collection 视图。
    
          重点：Map集合没有迭代器，以下是Map的两种取出方式：
          第一种：Set<K> keySet()
    		返回此映射中包含的键的Set视图，将Map集合中所有的键存入Set集合，然后再通过Set集合的
    		迭代器取出所有的键，再根据get方法获取每个键的值；
          第二种：Set<Map.Entry<K,V>> entrySet() 
    		返回此映射中包含的映射关系的Set视图，将Map集合中的映射关系存入到Set集合中，
    		这个映射关系的数据类型是Map.entry,再通过Map.Entry类的方法再要取出关系里面的键和值
    		Map.Entry的方法摘要：
    			boolean equals(Object o)  比较指定对象与此项的相等性。			  
    			K getKey()  返回与此项对应的键。			  
    			V getValue() 返回与此项对应的值。			   
    			int hashCode() 返回此映射项的哈希码值。
    			V setValue(V value) 用指定的值替换与此项对应的值(特有！！！)。
###8、Map集合和Collection集合的区别？
    	1，
    	Map中一次存储是键值对。
    	Collection中一次存储是单个元素。
    	2，
    	Map的存储使用的put方法。
    	Collection存储使用的是add方法。 
    	3，
    	Map集合没有迭代器，Map的取出，是将Map转成Set，在使用迭代器取出。
    	Collection取出，使用就是迭代器。
    	4，
    	如果对象很多，必须使用集合存储。
    	如果元素存在着映射关系，可以优先考虑使用Map存储或者用数组，
    	如果没有映射关系，可以使用Collection存储。
###8、迭代器：Iterator(Map集合没有迭代器)
    	(1)迭代器就是取出集合元素的方式
    	(2)迭代器的作用
    		因为每个集合中元素的取出方式都不一样，于是就把元素的取出方式进行抽取，并定义在集合内部，
    		这样取出方式就可以直接访问集合内部的元素；
    		而每个容器的数据结构不同，所以取出动作的细节也不一样，但是有共性内容：判断和取出。
    		那么就将共性内容进行抽取，从而形成了接口Iterater
    	(3)获取迭代器的方法：
    		Iterator<E> iterator() 返回在此 collection 的元素上进行迭代的迭代器。 
    		Iterator<E> iterator() 返回在此 set 中的元素上进行迭代的迭代器。      
    	(3)迭代器方法：
    		boolean hasNext() 如果仍有元素可以迭代,则返回 true。
    		E next() 返回迭代的下一个元素。       
    		void remove() 从迭代器指向的collection中移除迭代器返回的最后一个元素（可选操作）。
###9、列表迭代器：ListIterator
    	(1)List集合特有的迭代器ListIterator是Iterator的子接口，在迭代时，不可以通过集合对象的
    	   方法操作集合中的元素，因为会发生ConcurrentModificationException(当方法检测到对象的并发修改，
    	   但不允许这种修改时，抛出此异常)
    	(2)Iterator方法有限，只能对元素进行判断、取出和删除的操作
    	   ListIterator可以对元素进行添加和修改动作等。
    	(3)获取列表迭代器方法：
    		ListIterator<E> listIterator() 返回此列表元素的列表迭代器（按适当顺序）。 
    		ListIterator<E> listIterator(int index) 
    			返回此列表中的元素的列表迭代器（按适当顺序），从列表中指定位置开始。 
    	(4)列表迭代器方法：
    		void add(E e) 将指定的元素插入列表（可选操作）。
    		boolean hasPrevious()  如果以逆向遍历列表，列表迭代器有多个元素，则返回 true。 
    		int nextIndex() 返回对 next 的后续调用所返回元素的索引。         
    		E previous() 返回列表中的前一个元素。 	  
    		int previousIndex() 返回对 previous 的后续调用所返回元素的索引。 	  
    		void set(E e) 用指定元素替换 next 或 previous 返回的最后一个元素（可选操作）。 
###10、堆栈和队列
    	堆栈：先进后出，比如杯子里的水
    	队列：先进先出，比如水管的水
###11、集合类各种容器的使用注意细节：
    	(1)迭代器：
    		**迭代器的next方法是自动向下取元素，要避免出现NoSuchElementException。
    		  也就是在迭代循环中调用一次next方法一次就要hasNext判断一次，比如语句
    		  sop(it.next()+"..."+it.next())会发生上述异常。
    		**迭代器的next方法返回值类型是Object，所以要记得类型转换,应用泛型后就不用强转
    	(2)List集合：
    		**List集合里面的元素因为是带角标，所以List集合里面的元素都是有序的，
    		  另外List集合可以包含重复元素，也可以包含null。  
    		**List集合有迭代器Iterator，还有一个特有迭代器列表ListIterator
    		**List集合中判断元素是否相同都是用equals方法，无论contains、remove都依赖equals方法
    		  比如往ArrayList集合里面存放学生，同名同年龄视为同一个人，此时就需要在学生类复写Object类
    		  里面的equals方法(非常重要！！！要注意！！)
####(3)Set集合：
    		**Set接口里面存放的是元素是无序的，不可以有重复元素，可以包含null
    		**Set集合只有一种取出方式，就是迭代器Iterator
    		**Set集合功能和Collection是一致的，没有特殊方法
    	    |--->HashSet:
    		**集合里面存放的元素是无序的，唯一的
    		**底层数据结构是哈希表，哈希表结构的数据都是无序的，哈希表结构的操作效率都高效
    		**线程不同步
    		**保证元素唯一性的原理是：通过复写hashCode和equals方法
    			****如果两元素的hashCode值相同，则继续判断两元素equals是否为真
    			****如果两元素的hashCode值不同，则不会调用equals方法。
    		**当我们往HashSet集合存放自定义的元素时(比如学生对象)，通常都要复写hashCode和equals方法，
    		  而且hashCode和equals方法不通过我们调用，HashSet集合底层内部自己调用，自己拿元素去比较
    	    |--->TreeSet
    		**TreeSet集合可以对存放的元素进行排序，弥补了Set集合元素无序的缺点，且元素是唯一的
    		**底层数据结构是二叉树，二叉树结构都是有序的
    		**线程不同步
    		**TreeSet集合要求往集合里存放的元素自身具备比较性，否则会报错
    		**TreeSet集合保证元素唯一性的依据是：通过compareTo或者compare方法中的来保证元素的唯一性。
    			TreeSet排序的第一种方式:让元素自身具备比较性，
    						定义元素类实现Compareble接口，覆盖compare方法，
    						此方式是元素的自然顺序。
    			TreeSet排序的第二种方式:让集合具备比较性
    						当元素自身不具备比较性或者具备的比较性不是
    						我们所需要的比较性时，此时就需要让集合具备自定义的比较性。
    						那如何让集合自身具备比较性呢？
    						可在集合初始化时，就让集合具备比较方式。
    						即定义一个类，实现Comparator接口，覆盖compare方法。
    			注：
    			**判断元素唯一时，当主要条件一样时，判断次要条件
    			**两种排序方式都在时，以比较器为主！！！
    	(4)Map集合：
    		|--Hashtable
    			底层是哈希表结构
    			线程安全的，并且键和值不能为null。
    		|--HashMap
    			底层是哈希表结构
    			线程不安全的，键和值可以为null。
    			|--LinkedHashMap
    				底层是链表和哈希表
    				线程不安全
    		|--TreeMap
    			底层是二叉树
    			线程不安全的
###12、如果你想将一组对象按一定顺序存取，在不考虑并发访问的情况下会使用____C_____ , 
    	反之则会使用____A_____；如果你想存储一组无序但唯一的对象，你会使用___B______ ; 
    	如果你想按关键字对对象进行存取，在不考虑并发访问的情况下会使用___D______ ,反之则会使用_____E____。
    A. Vector
    B. HashSet
    C. ArrayList
    D. HashMap
    E. Hashtable
###13、泛型：
    	(1)为什么会出现泛型？
    		因为集合存放的数据类型不固定，故往集合里面存放元素时，存在安全隐患，
    		如果在定义集合时，可以想定义数组一样指定数据类型，那么就可以解决该类安全问题。
    		JDK1.5后出现了泛型，用于解决集合框架的安全问题。
    		泛型是一个类型安全机制。
    	(2)泛型定义格式：通过<>来定义要操作的引用数据类型
    		ArrayList<String> al = new ArrayList<String>;
    	(3)泛型的好处：
    		**将运行时期出现的ClassCastException(类型转换异常)问题转移到编译时期；
    		**避免了强制转换的麻烦
    	(4)什么时候定义泛型？
    		泛型在集合框架中很常见，只要见到<>就要定义泛型。其实<>就是用来接收类型的。
    		当使用集合时，将集合中要存储的数据类型作为参数传递到<>中即可
####(5)泛型的形式
    		**泛型类：即自定义泛型类
    			A：当类中要操作的引用数据类型不确定时，早起定义Object来完成扩展，现在定义泛型来完成
    			B：局限性：泛型类定义的泛型，在整个类中有效，如果该泛型类的方法被调用，
    			   当泛型类的对象明确要操作的类型后，所有要操作的类型就被固定。
    		**泛型方法：泛型放在返回值前面，修饰符的后面
    			A:为了避免泛型类的局限性，让不同方法可以操作不同的类型，而且类型还不确定，
    			  则可以将泛型定义在方法上
    			B:特殊之处：静态方法不可以反问类上定义的泛型
    			  如果静态方法操作的应用数据类型不确定，可以讲泛型定义在静态方法上
    		**泛型接口：
    			当泛型定义在接口上时，则子类中要指定实现接口类型，同时还可以子类也可以定义为泛型类
####(6)泛型的高级应用：？通配符
    		**当指定两种泛型的集合，则迭代时也要定义两种泛型的迭代器，麻烦，此时可通过将迭代器的泛型
    		  改为？，如Iterator<?> it=al.iterator();
    		**两种泛型限定
    			向上限定： ? extends E  ;E可以接收E类型或者E的子类
    			向下限定： ? super E  ;E可以接收E类型或者E的父类
###14、高级for循环
    	(1)JDK1.5新特性，代替迭代器使用时的不爽，简化书写，底层原理是迭代器凡是支持迭代器的都支持高级for循环
    	   高级for循环，只用于集合和数组的遍历，集合只能用Collection不能用Map集合
    	   只能把Map集合转化成Set集合，才能用for循环。
    	(2)格式
    		for(数据类型 变量名:被遍历的集合(Collection)或者数组)
    		{
    			
    		}
            (3)局限性：
    		必须要有遍历的目标
    		对集合或者数组进行遍历时，只能获取集合元素，不能对集合元素进行操作
    		迭代器除了遍历，还可以进行remove操作集合中的元素
    		列表迭代器还可以在遍历过程中进行增删改查的操作
    	(4)传统for循环和高级for循环的区别
    		高级for循环有一个局限性，就是必须要有遍历的目标(集合或者数组)
    		遍历数组时建议使用传统for循环，因为可以定义角标，比如打印100次helloworld时用传统for循环方便
###15、可变参数
    	(1)数组的可变参数
    		格式：
    			int... arr
    	(3)方法的可变参数
    		格式：
    			public static void show(String str，int... arr)
    			{
    
    			}
    		注意：可变参数一定要放在参数列表的最后面
###16、静态导入：
    	**import static java.util.Arrays.*  导入的是Arrays这个类中所有的静态方法
    	**当类名重名时，需要制定具体的报名
    	**当方法重名时，需要制定具体所属的对象或者类
###17、Collections类：
    	(1)此类完全由在 collection 上进行操作或返回 collection 的静态方法组成。
    	(2)静态方法摘要：
    		static <T> boolean addAll(Collection<? super T> c, T... elements) 
    			将所有指定元素添加到指定 collection 中。
    		static <T> void fill(List<? super T> list, T obj) 
    			使用指定元素替换指定列表中的所有元素。
    		static <T> boolean replaceAll(List<T> list, T oldVal, T newVal) 
    			使用另一个值替换列表中出现的所有某一指定值。 
    		static void reverse(List<?> list) 
    			反转指定列表中元素的顺序。 
    		static <T> Comparator<T>  reverseOrder() 
    			返回一个比较器，它强行逆转实现了 Comparable 接口的对象 collection 的自然顺序
    		static <T> Comparator<T> reverseOrder(Comparator<T> cmp) 
    			返回一个比较器，它强行逆转指定比较器的顺序。 
    	(3)Collections类特牛的方法：
    		集合有一个共同的缺点，那就是线程不安全，被多线程操作时，容易出现问题，虽然可以自己加锁
    		但是麻烦。Collections提供特牛的方法，就是给它一个不同步的集合，它返回一个同步的安全的集合
    
    		static <T> Collection<T> synchronizedCollection(Collection<T> c) 
    			返回指定 collection 支持的同步（线程安全的）collection。 
    		static <T> List<T>  synchronizedList(List<T> list) 
    			返回指定列表支持的同步（线程安全的）列表。 
    		static <K,V> Map<K,V> synchronizedMap(Map<K,V> m) 
    			返回由指定映射支持的同步（线程安全的）映射。 
    		static <T> Set<T> synchronizedSet(Set<T> s) 
    			返回指定 set 支持的同步（线程安全的）set。 
    		static <K,V> SortedMap<K,V> synchronizedSortedMap(SortedMap<K,V> m)
    			返回指定有序映射支持的同步（线程安全的）有序映射。 
    		static <T> SortedSet<T>  synchronizedSortedSet(SortedSet<T> s)
    			返回指定有序 set 支持的同步（线程安全的）有序 set。 
###18、Arrays类：
    	此类包含用来操作数组（比如排序和搜索）的各种方法。里面都是静态方法。
    	如果指定数组引用为 null，则此类中的方法都会抛出 NullPointerException。
    	(1)静态方法摘要：
    		static <T> List<T> asList(T... a)
    			返回一个受指定数组支持的固定大小的列表。
    		注意：
    			A:该方法将一个数组变成集合后，不可以使用集合的增删方法，因为数组的长度是固定的！
    		          如果增删，则发生UnsupportedOprationException(不支持操作异常)
    			B:如果数组中的元素都是基本数据类型，则该数组变成集合时，会将该数组作为集合的一个
    			  元素出入集合
    			C:如果数组中的元素都是对象，如String，那么数组变成集合后，数组中的元素就直接转成
    			  集合中的元素
###19、数组变集合以及集合变数组的对比：
    	(1)数组变集合：
    		方法：static <T> List<T> asList(T... a) 返回一个受指定数组支持的固定大小的列表。
    		好处：可以使用集合的思想和方法操作数组中的元素，数组是一个对象，但是数组中的功能很少
    	(2)集合变数组：
    		方法：Collction中的toArray方法
    		好处：可以限定对集合元素的操作，防止对集合的元素进行增删，因为数组长度是固定的。
    
###20、Collections类和Arrays类的使用。(重点)
    	A:Collections
    		排序
    		二分查找
    		发转
    	B:Arrays
    		把数组变成字符串输出
    		排序
    		二分查找
###21、System：
    	(1)描述系统信息的类
    	(2)该类没有构造方法，该类的方法和属性都是静态的
    	(3)字段摘要：
    		static InputStream in  “标准”输入流。   
    		static PrintStream out  “标准”输出流。         
    	(4)方法摘要：
    		static void exit(int status) 终止当前正在运行的 Java 虚拟机。 
    		static void gc() 运行垃圾回收器。
    		static Properties getProperties()  确定当前的系统属性          
    		static String getProperty(String key) 获取指定键指示的系统属性。     
    		static String getProperty(String key, String def) 获取用指定键描述的系统属性。 
    		static void setIn(InputStream in) 重新分配“标准”输入流。           
    		static void setOut(PrintStream out) 重新分配“标准”输出流。 
    		static void setProperties(Properties props) 将系统属性设置为 Properties 参数。           
    		static String setProperty(String key, String value) 设置指定键指示的系统属性。
###22、Runtime:
    	(1)每个 Java 应用程序都有一个 Runtime 类实例，使应用程序能够与其运行的环境相连接。
    	   可以通过 getRuntime 方法获取当前运行时。 应用程序不能创建自己的 Runtime 类实例。
    	(2)该类没有构造函数，也就是它不能直接创建对象，但是它里里面的方法又不是静态的
    	   ，故它一定有一个方法返回本类对象
    	(3)故该类是单例设计模式，保证在内存中只有一个对象
    	(4)方法摘要：
    		Process exec(String command) 在单独的进程中执行指定的字符串命令
    		void gc() 运行垃圾回收器。
    		static Runtime getRuntime() 返回与当前 Java 应用程序相关的运行时对象
    		void exit(int status) 通过启动虚拟机的关闭序列，终止当前正在运行的 Java 虚拟机
###23、Date:
    	(1)Date接口表示特定的瞬间，精确到毫秒
    	(2)构造方法
    		Date() 分配 Date 对象并初始化此对象，以表示分配它的时间（精确到毫秒）。
    		Date(long date) 分配Date对象并初始化此对象，以表示自从标准基准时间（称为“历元（epoch）”，
    			 即1970年1月1日00:00:00GMT）以来的指定毫秒数。
    	(3)方法摘要：
    		int compareTo(Date anotherDate) 比较两个日期的顺序。          
    		boolean equals(Object obj) 比较两个日期的相等性。
###24、Calendar：
    	(1)直接已知子类： GregorianCalendar 
    	(2)构造方法：
    		protected  Calendar() 构造一个带有默认时区和语言环境的 Calendar。         
    		protected  Calendar(TimeZone zone, Locale aLocale)  构造一个带有指定时区和语言环境的 Calendar。         
    	(3)方法摘要：
    		static Calendar getInstance() 使用默认时区和语言环境获得一个日历。
    
    
##25、jdk1.5的新特性
####(1)静态导入：
    		**import语句可以导入一个类或某个包中的所有类
    		**import static语句导入一个类中的某个静态方法或所有静态方法
    		  静态导入后，静态方法前面就不用写类名.方法的方式类调用
    		**语法举例： 
    			import static java.lang.Math.sin;//导入一个静态方法
    			import static java.lang.Math.*; //导入一个类中的所有静态方法
    		**静态导入使用注意：
    			当类名重复时，需要制定具体的包名；
    			当方法重名时，需要制定具体所属的对象或者类
####(2)可变参数：
    		**可变参数的特点：
    			*可变参数只能出现在参数列表的最后；
    			*...位于变量类型和变量名之间，前后有无空格都可以;
    			*调用可变参数的方法时，编译器为该可变参数隐含创建一个数组，
    			 在方法体中以数组的形式访问可变参数。
    		**可变参数举例：
    			*变量类型... 变量名 如 int... arr 表示可变参数数组
    			*public static void show(String str , int... arr){}
####(3)增强for循环：
    		**语法：
    			for ( type 变量名：集合变量名 )  { … } 
    		**注意事项：
    			迭代变量必须在( )中定义！
    			集合变量可以是数组或实现了Iterable接口的集合类
    		**举例： 
    			public static int add(int x,int ...args) {
    				int sum = x;
    				for(int arg:args) {
    					sum += arg;
    				}
    				return sum;
    			}
    		**增强for循环代替了迭代器使用的不爽，简化书写
    		**增强for循环局限性：
    			对集合或者数组进行遍历时，只能取元素，不能对集合进行操作
####(4)基本数据类型的自动装箱和拆箱
    		**基本数据类型
    			byte	--->	Byte
    			short	--->	Short
    			int	--->	Integer
    			long	--->	Long
    			float	--->	Float
    			double	--->	Double
    			char	--->	Character
    			boolean	--->	Boolean
    		**例子：
    			**装箱：自动把一个基本数据类型的数据装箱成一个该类型数据的对象引用
    				Integer i = 3;(jdk1.5之前这样写是不行的，编译报错)
    			**拆箱：自动把一个基本数据类型的对象引用拆箱成一个基本数据类型的数据，再参与运算
    				Integer i = 12;
    				sop(i+4);
    			**享元模式：
    				Integer num1 = 12;
    				Integer num2 = 12;
    				System.out.println(num1 == num2);//打印true
    
    				Integer num5 = Integer.valueOf(12);
    				Integer num6 = Integer.valueOf(12);
    				System.out.println(num5 == num6);//打印true
    
    				Integer num3 = 129;
    				Integer num4 = 129;
    				System.out.println(num3 == num4);//打印false
    
    				为什么前面的返回true而后面的运算返回false呢？
    				对于基本数据类型的整数，装箱成Integer对象时，如果该数值在一个字节内,(-128~127)，
    				一旦装箱成Integer对象后，就把它缓存到磁里面，当下次，又把该数值封装成Integer对象时
    				会先看磁里面有没有该对象，有就直接拿出来用，这样就节省了内存空间。因为比较小的整数，
    				用的频率比较高，就没必要每个对象都分配一个内存空间。
    				这就是享元模式！比如26个英文字母，10个阿拉伯数字
####(5)枚举
    		**为什么要有枚举？
    			问题：要定义星期几或性别的变量，该怎么定义？假设用1-7分别表示星期一到星期日，
    			但有人可能会写成int weekday = 0;或即使使用常量方式也无法阻止意外。
    
    			枚举就是要让某个类型的变量的取值只能为若干个固定值中的一个，否则，编译器就会报错。
    			枚举可以让编译器在编译时就可以控制源程序中填写的非法值，
    			普通变量的方式在开发阶段无法实现这一目标。
    		**用普通类如何实现枚举的功能？定义一个Weekday类来模拟实现：
    			步骤：
    				*私有化构造方法
    				*每个元素分别用一个公有的静态成员变量表示(public static final)
    				*可以有若干公有方法或抽象方法。采用抽象方法定义nextDay就将大量的if.else语句
    				 转移成了一个个独立的类。
    		**枚举的应用：
    			举例：定义一个Weekday的枚举。
    			扩展：枚举类的values,valueOf,name,toString,ordinal等方法
    			     （记住，讲课时要先于自定义方法前介绍，讲课更流畅）
    			总结：枚举是一种特殊的类，其中的每个元素都是该类的一个实例对象。 
    			      例如可以调用WeekDay.SUN.getClass().getName和WeekDay.class.getName()。
    		**枚举的高级应用：
    			**枚举就相当于一个类，其中也可以定义构造方法、成员变量、普通方法和抽象方法。
    			**枚举元素必须位于枚举体中的最开始部分，枚举元素列表的后要有分号与其他成员分隔。
    			  把枚举中的成员方法或变量等放在枚举元素的前面，编译器报告错误。
    			**带构造方法的枚举
    			  构造方法必须定义成私有的
    			  如果有多个构造方法，该如何选择哪个构造方法？
    			  枚举元素MON和MON()的效果一样，都是调用默认的构造方法。
    			**带方法的枚举
    			  定义枚举TrafficLamp
    			  实现普通的next方法
    			  实现抽象的next方法：每个元素分别是由枚举类的子类来生成的实例对象，
    			  这些子类采用类似内部类的方式进行定义。增加上表示时间的构造方法	  
    			**枚举只有一个成员时，就可以作为一种单例的实现方式。		
####(6)泛型：
    		**泛型是提供给javac编译器使用的，可以限定集合中的输入类型，让编译器挡住源程序中的非法输入，
    		  编译器编译带类型说明的集合时会去除掉“类型”信息，使程序运行效率不受影响，
    		  对于参数化的泛型类型，getClass()方法的返回值和原始类型完全一样。
    		  由于编译生成的字节码会去掉泛型的类型信息，只要能跳过编译器，
    		  就可以往某个泛型集合中加入其它类型的数据，例如，用反射得到集合，再调用其add方法即可。
    		**ArrayList<E>类定义和ArrayList<Integer>类引用中涉及如下术语：
    			整个称为ArrayList<E>泛型类型
    			ArrayList<E>中的E称为类型变量或类型参数
    			整个ArrayList<Integer>称为参数化的类型
    			ArrayList<Integer>中的Integer称为类型参数的实例或实际类型参数
    			ArrayList<Integer>中的<>念着typeof
    			ArrayList称为原始类型
    		**参数化类型与原始类型的兼容性：
    			参数化类型可以引用一个原始类型的对象，编译报告警告，
    			例如，Collection<String> c = new Vector();//可不可以，不就是编译器一句话的事吗？
    			原始类型可以引用一个参数化类型的对象，编译报告警告，
    			例如，Collection c = new Vector<String>();//原来的方法接受一个集合参数，新的类型也要能传进去
    		**参数化类型不考虑类型参数的继承关系：
    			Vector<String> v = new Vector<Object>(); //错误!///不写<Object>没错，写了就是明知故犯
    			Vector<Object> v = new Vector<String>(); //也错误!
    			编译器不允许创建泛型变量的数组。即在创建数组实例时，
    			数组的元素不能使用参数化的类型，
    			例如，下面语句有错误：
    				Vector<Integer> vectorList[] = new Vector<Integer>[10];
    		**泛型限定：
    			**限定通配符的上边界：
    				正确：Vector<? extends Number> x = new Vector<Integer>();
    				错误：Vector<? extends Number> x = new Vector<String>();
    			**限定通配符的下边界：
    				正确：Vector<? super Integer> x = new Vector<Number>();
    				错误：Vector<? super Integer> x = new Vector<Byte>();
    			**提示：
    				限定通配符总是包括自己。
    				?只能用作引用，不能用它去给其他变量赋值
    				Vector<? extends Number> y = new Vector<Integer>();
    				Vector<Number> x = y;
    				上面的代码错误，原理与Vector<Object > x11 = new Vector<String>();相似，
    				只能通过强制类型转换方式来赋值。
