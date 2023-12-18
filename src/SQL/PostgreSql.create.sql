




CREATE TABLE ВозвратБилета (
 primaryKey UUID NOT NULL,
 ПричинаВозв VARCHAR(255) NULL,
 ДатаПокупки TIMESTAMP(3) NULL,
 Покупатель UUID NOT NULL,
 ПокупИлиВозвБ UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE ПокупИлиВозвБ (
 primaryKey UUID NOT NULL,
 Дата TIMESTAMP(3) NULL,
 ПунктОтправ VARCHAR(255) NULL,
 ПунктНазнач VARCHAR(255) NULL,
 Статус VARCHAR(11) NULL,
 БилетнаяКасса UUID NOT NULL,
 Перевозчик1 UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE Перевозчик1 (
 primaryKey UUID NOT NULL,
 Наименование VARCHAR(255) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE ПокупкаБилета (
 primaryKey UUID NOT NULL,
 Место INT NULL,
 ДатаПоездки TIMESTAMP(3) NULL,
 Покупатель UUID NOT NULL,
 ПокупИлиВозвБ UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE Покупатель (
 primaryKey UUID NOT NULL,
 ID INT NULL,
 ФИО VARCHAR(255) NULL,
 БанковскийСчет VARCHAR(255) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE Обслуживание (
 primaryKey UUID NOT NULL,
 ЧековаяЛента BOOLEAN NULL,
 ДатаПроверки TIMESTAMP(3) NULL,
 ВремяПроверки VARCHAR(255) NULL,
 ГотовКРаботе BOOLEAN NULL,
 БилетнаяКасса UUID NOT NULL,
 Оператор UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE БилетнаяКасса (
 primaryKey UUID NOT NULL,
 Наименование VARCHAR(255) NULL,
 Адрес VARCHAR(255) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE Оператор (
 primaryKey UUID NOT NULL,
 ID INT NULL,
 ФИО VARCHAR(255) NULL,
 СерияПаспорта INT NULL,
 НомерПаспорта INT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMNETLOCKDATA (
 LockKey VARCHAR(300) NOT NULL,
 UserName VARCHAR(300) NOT NULL,
 LockDate TIMESTAMP(3) NULL,
 PRIMARY KEY (LockKey));


CREATE TABLE STORMSETTINGS (
 primaryKey UUID NOT NULL,
 Module VARCHAR(1000) NULL,
 Name VARCHAR(255) NULL,
 Value TEXT NULL,
 "User" VARCHAR(255) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMAdvLimit (
 primaryKey UUID NOT NULL,
 "User" VARCHAR(255) NULL,
 Published BOOLEAN NULL,
 Module VARCHAR(255) NULL,
 Name VARCHAR(255) NULL,
 Value TEXT NULL,
 HotKeyData INT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMFILTERSETTING (
 primaryKey UUID NOT NULL,
 Name VARCHAR(255) NOT NULL,
 DataObjectView VARCHAR(255) NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMWEBSEARCH (
 primaryKey UUID NOT NULL,
 Name VARCHAR(255) NOT NULL,
 "Order" INT NOT NULL,
 PresentView VARCHAR(255) NOT NULL,
 DetailedView VARCHAR(255) NOT NULL,
 FilterSetting_m0 UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMFILTERDETAIL (
 primaryKey UUID NOT NULL,
 Caption VARCHAR(255) NOT NULL,
 DataObjectView VARCHAR(255) NOT NULL,
 ConnectMasterProp VARCHAR(255) NOT NULL,
 OwnerConnectProp VARCHAR(255) NULL,
 FilterSetting_m0 UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMFILTERLOOKUP (
 primaryKey UUID NOT NULL,
 DataObjectType VARCHAR(255) NOT NULL,
 Container VARCHAR(255) NULL,
 ContainerTag VARCHAR(255) NULL,
 FieldsToView VARCHAR(255) NULL,
 FilterSetting_m0 UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE UserSetting (
 primaryKey UUID NOT NULL,
 AppName VARCHAR(256) NULL,
 UserName VARCHAR(512) NULL,
 UserGuid UUID NULL,
 ModuleName VARCHAR(1024) NULL,
 ModuleGuid UUID NULL,
 SettName VARCHAR(256) NULL,
 SettGuid UUID NULL,
 SettLastAccessTime TIMESTAMP(3) NULL,
 StrVal VARCHAR(256) NULL,
 TxtVal TEXT NULL,
 IntVal INT NULL,
 BoolVal BOOLEAN NULL,
 GuidVal UUID NULL,
 DecimalVal DECIMAL(20,10) NULL,
 DateTimeVal TIMESTAMP(3) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE ApplicationLog (
 primaryKey UUID NOT NULL,
 Category VARCHAR(64) NULL,
 EventId INT NULL,
 Priority INT NULL,
 Severity VARCHAR(32) NULL,
 Title VARCHAR(256) NULL,
 Timestamp TIMESTAMP(3) NULL,
 MachineName VARCHAR(32) NULL,
 AppDomainName VARCHAR(512) NULL,
 ProcessId VARCHAR(256) NULL,
 ProcessName VARCHAR(512) NULL,
 ThreadName VARCHAR(512) NULL,
 Win32ThreadId VARCHAR(128) NULL,
 Message VARCHAR(2500) NULL,
 FormattedMessage TEXT NULL,
 PRIMARY KEY (primaryKey));



 ALTER TABLE ВозвратБилета ADD CONSTRAINT FK3a720b7274bf5613068de39591ac59f30f139872 FOREIGN KEY (Покупатель) REFERENCES Покупатель; 
CREATE INDEX Index3a720b7274bf5613068de39591ac59f30f139872 on ВозвратБилета (Покупатель); 

 ALTER TABLE ВозвратБилета ADD CONSTRAINT FK3a7e843ba745c0675197864c749bfbe84d2ccb9d FOREIGN KEY (ПокупИлиВозвБ) REFERENCES ПокупИлиВозвБ; 
CREATE INDEX Index3a7e843ba745c0675197864c749bfbe84d2ccb9d on ВозвратБилета (ПокупИлиВозвБ); 

 ALTER TABLE ПокупИлиВозвБ ADD CONSTRAINT FK490594a9e143656c68da29c0dd7918a64138c72f FOREIGN KEY (БилетнаяКасса) REFERENCES БилетнаяКасса; 
CREATE INDEX Index490594a9e143656c68da29c0dd7918a64138c72f on ПокупИлиВозвБ (БилетнаяКасса); 

 ALTER TABLE ПокупИлиВозвБ ADD CONSTRAINT FK4234eaee4ce0833d2978cbcb762828686f1e3af4 FOREIGN KEY (Перевозчик1) REFERENCES Перевозчик1; 
CREATE INDEX Index4234eaee4ce0833d2978cbcb762828686f1e3af4 on ПокупИлиВозвБ (Перевозчик1); 

 ALTER TABLE ПокупкаБилета ADD CONSTRAINT FK0d61acab3d422c47721e1ae739862bfd7d958709 FOREIGN KEY (Покупатель) REFERENCES Покупатель; 
CREATE INDEX Index0d61acab3d422c47721e1ae739862bfd7d958709 on ПокупкаБилета (Покупатель); 

 ALTER TABLE ПокупкаБилета ADD CONSTRAINT FKa325d6da81be40b725637a0a9f39e8b324955d81 FOREIGN KEY (ПокупИлиВозвБ) REFERENCES ПокупИлиВозвБ; 
CREATE INDEX Indexa325d6da81be40b725637a0a9f39e8b324955d81 on ПокупкаБилета (ПокупИлиВозвБ); 

 ALTER TABLE Обслуживание ADD CONSTRAINT FK5deae3ed08d218d061aa2d655f4e8132844c2e92 FOREIGN KEY (БилетнаяКасса) REFERENCES БилетнаяКасса; 
CREATE INDEX Index5deae3ed08d218d061aa2d655f4e8132844c2e92 on Обслуживание (БилетнаяКасса); 

 ALTER TABLE Обслуживание ADD CONSTRAINT FKec738dc9179d4c5d8a10b26bf5d23e2047e48d3d FOREIGN KEY (Оператор) REFERENCES Оператор; 
CREATE INDEX Indexec738dc9179d4c5d8a10b26bf5d23e2047e48d3d on Обслуживание (Оператор); 

 ALTER TABLE STORMWEBSEARCH ADD CONSTRAINT FKc4378e39870eb056aec84088683297a01d2a6200 FOREIGN KEY (FilterSetting_m0) REFERENCES STORMFILTERSETTING; 

 ALTER TABLE STORMFILTERDETAIL ADD CONSTRAINT FK921d16269835017e2a0d0e29ad6fb175454a70d0 FOREIGN KEY (FilterSetting_m0) REFERENCES STORMFILTERSETTING; 

 ALTER TABLE STORMFILTERLOOKUP ADD CONSTRAINT FKce38ef0db3f01a53acaa49fed8853fb941ad47ba FOREIGN KEY (FilterSetting_m0) REFERENCES STORMFILTERSETTING; 

