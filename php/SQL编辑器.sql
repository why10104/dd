create table vip(
       vipName varchar(10) not null,
       vipId char(10) not null,
       vippsword varchar(10) not null,
       vipSex varchar(10) not null,
       vipAge int not null,
       viphobby varchar(10) 
)

--添加字段
alter table biaoming add ziduan varchar(20);

insert into vip values('张三','h5xa180301','0001','男',17,'美女')
insert into vip values('李四','h5xa180302','0002','女',15,'美妆')
insert into vip values('王五','h5xa180303','0003','女',12,'篮球')
insert into vip values('赵六','h5xa180304','0004','男',18,'乒乓')
insert into vip values('熊七','h5xa180305','0005','女',20,'羽毛')
insert into vip values('白京','h5xa180306','0001','男',16,'足球')
insert into vip values('白京','h5xa180306','0001','男',16,'足球')
insert into vip values('白京','h5xa180306','0001','男',16,'足球')