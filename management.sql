use management;

CREATE TABLE CUSTOMER(
	id INT PRIMARY KEY auto_increment,
    image VARCHAR(1024),
    name varchar(64),
    birthday varchar(64),
    gender varchar(64),
    job varchar(64),
    createDate datetime,
    isDeleted INT
) DEFAULT CHARACTER SET UTF8 COLLATE utf8_general_ci;



INSERT INTO CUSTOMER VALUES (1,'https://placeimg.com/64/64/1','박태원','931129','남','회사원',now(),0);
INSERT INTO CUSTOMER VALUES (2,'https://placeimg.com/64/64/2','나하나','960529','여','대학생',now(),0);
INSERT INTO CUSTOMER VALUES (3,'https://placeimg.com/64/64/3','홍길동','941129','남','도적',now(),0);