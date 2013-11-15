How to install MySQL
	yum install mysql-server mysql php-mysql
	#Set the MySQL service to start on boot
	chkconfig --levels 235 mysqld on
	#start
	service mysqld start
	#Log into MySQL
	mysql -u root
	#Set the root user password for all local domains
	SET PASSWORD FOR 'root'@'localhost' = PASSWORD('new-password');
	SET PASSWORD FOR 'root'@'localhost.localdomain' = PASSWORD('new-password');
	SET PASSWORD FOR 'root'@'127.0.0.1' = PASSWORD('new-password');
	#Drop the Any user
	DROP USER ''@'localhost';
	DROP USER ''@'localhost.localdomain';
