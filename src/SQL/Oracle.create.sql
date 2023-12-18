



CREATE TABLE "ВозвратБилета"
(

	"primaryKey" RAW(16) NOT NULL,

	"ПричинаВозв" NVARCHAR2(255) NULL,

	"ДатаПокупки" DATE NULL,

	"Покупатель" RAW(16) NOT NULL,

	"ПокупИлиВозвБ" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "ПокупИлиВозвБ"
(

	"primaryKey" RAW(16) NOT NULL,

	"Дата" DATE NULL,

	"ПунктОтправ" NVARCHAR2(255) NULL,

	"ПунктНазнач" NVARCHAR2(255) NULL,

	"Статус" NVARCHAR2(11) NULL,

	"БилетнаяКасса" RAW(16) NOT NULL,

	"Перевозчик1" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Перевозчик1"
(

	"primaryKey" RAW(16) NOT NULL,

	"Наименование" NVARCHAR2(255) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "ПокупкаБилета"
(

	"primaryKey" RAW(16) NOT NULL,

	"Место" NUMBER(10) NULL,

	"ДатаПоездки" DATE NULL,

	"Покупатель" RAW(16) NOT NULL,

	"ПокупИлиВозвБ" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Покупатель"
(

	"primaryKey" RAW(16) NOT NULL,

	"ID" NUMBER(10) NULL,

	"ФИО" NVARCHAR2(255) NULL,

	"БанковскийСчет" NVARCHAR2(255) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Обслуживание"
(

	"primaryKey" RAW(16) NOT NULL,

	"ЧековаяЛента" NUMBER(1) NULL,

	"ДатаПроверки" DATE NULL,

	"ВремяПроверки" NVARCHAR2(255) NULL,

	"ГотовКРаботе" NUMBER(1) NULL,

	"БилетнаяКасса" RAW(16) NOT NULL,

	"Оператор" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "БилетнаяКасса"
(

	"primaryKey" RAW(16) NOT NULL,

	"Наименование" NVARCHAR2(255) NULL,

	"Адрес" NVARCHAR2(255) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Оператор"
(

	"primaryKey" RAW(16) NOT NULL,

	"ID" NUMBER(10) NULL,

	"ФИО" NVARCHAR2(255) NULL,

	"СерияПаспорта" NUMBER(10) NULL,

	"НомерПаспорта" NUMBER(10) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMNETLOCKDATA"
(

	"LockKey" NVARCHAR2(300) NOT NULL,

	"UserName" NVARCHAR2(300) NOT NULL,

	"LockDate" DATE NULL,

	 PRIMARY KEY ("LockKey")
) ;


CREATE TABLE "STORMSETTINGS"
(

	"primaryKey" RAW(16) NOT NULL,

	"Module" nvarchar2(1000) NULL,

	"Name" nvarchar2(255) NULL,

	"Value" CLOB NULL,

	"User" nvarchar2(255) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMAdvLimit"
(

	"primaryKey" RAW(16) NOT NULL,

	"User" nvarchar2(255) NULL,

	"Published" NUMBER(1) NULL,

	"Module" nvarchar2(255) NULL,

	"Name" nvarchar2(255) NULL,

	"Value" CLOB NULL,

	"HotKeyData" NUMBER(10) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMFILTERSETTING"
(

	"primaryKey" RAW(16) NOT NULL,

	"Name" nvarchar2(255) NOT NULL,

	"DataObjectView" nvarchar2(255) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMWEBSEARCH"
(

	"primaryKey" RAW(16) NOT NULL,

	"Name" nvarchar2(255) NOT NULL,

	"Order" NUMBER(10) NOT NULL,

	"PresentView" nvarchar2(255) NOT NULL,

	"DetailedView" nvarchar2(255) NOT NULL,

	"FilterSetting_m0" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMFILTERDETAIL"
(

	"primaryKey" RAW(16) NOT NULL,

	"Caption" nvarchar2(255) NOT NULL,

	"DataObjectView" nvarchar2(255) NOT NULL,

	"ConnectMasterProp" nvarchar2(255) NOT NULL,

	"OwnerConnectProp" nvarchar2(255) NULL,

	"FilterSetting_m0" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMFILTERLOOKUP"
(

	"primaryKey" RAW(16) NOT NULL,

	"DataObjectType" nvarchar2(255) NOT NULL,

	"Container" nvarchar2(255) NULL,

	"ContainerTag" nvarchar2(255) NULL,

	"FieldsToView" nvarchar2(255) NULL,

	"FilterSetting_m0" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "UserSetting"
(

	"primaryKey" RAW(16) NOT NULL,

	"AppName" nvarchar2(256) NULL,

	"UserName" nvarchar2(512) NULL,

	"UserGuid" RAW(16) NULL,

	"ModuleName" nvarchar2(1024) NULL,

	"ModuleGuid" RAW(16) NULL,

	"SettName" nvarchar2(256) NULL,

	"SettGuid" RAW(16) NULL,

	"SettLastAccessTime" DATE NULL,

	"StrVal" nvarchar2(256) NULL,

	"TxtVal" CLOB NULL,

	"IntVal" NUMBER(10) NULL,

	"BoolVal" NUMBER(1) NULL,

	"GuidVal" RAW(16) NULL,

	"DecimalVal" NUMBER(20,10) NULL,

	"DateTimeVal" DATE NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "ApplicationLog"
(

	"primaryKey" RAW(16) NOT NULL,

	"Category" nvarchar2(64) NULL,

	"EventId" NUMBER(10) NULL,

	"Priority" NUMBER(10) NULL,

	"Severity" nvarchar2(32) NULL,

	"Title" nvarchar2(256) NULL,

	"Timestamp" DATE NULL,

	"MachineName" nvarchar2(32) NULL,

	"AppDomainName" nvarchar2(512) NULL,

	"ProcessId" nvarchar2(256) NULL,

	"ProcessName" nvarchar2(512) NULL,

	"ThreadName" nvarchar2(512) NULL,

	"Win32ThreadId" nvarchar2(128) NULL,

	"Message" nvarchar2(2000) NULL,

	"FormattedMessage" nvarchar2(2000) NULL,

	 PRIMARY KEY ("primaryKey")
) ;



ALTER TABLE "ВозвратБилета"
	ADD CONSTRAINT "ВозвратБилет_5495" FOREIGN KEY ("Покупатель") REFERENCES "Покупатель" ("primaryKey");

CREATE INDEX "ВозвратБилет_5496" on "ВозвратБилета" ("Покупатель");

ALTER TABLE "ВозвратБилета"
	ADD CONSTRAINT "ВозвратБилет_1287" FOREIGN KEY ("ПокупИлиВозвБ") REFERENCES "ПокупИлиВозвБ" ("primaryKey");

CREATE INDEX "ВозвратБилет_1248" on "ВозвратБилета" ("ПокупИлиВозвБ");

ALTER TABLE "ПокупИлиВозвБ"
	ADD CONSTRAINT "ПокупИлиВозвБ_742" FOREIGN KEY ("БилетнаяКасса") REFERENCES "БилетнаяКасса" ("primaryKey");

CREATE INDEX "ПокупИлиВозв_2937" on "ПокупИлиВозвБ" ("БилетнаяКасса");

ALTER TABLE "ПокупИлиВозвБ"
	ADD CONSTRAINT "ПокупИлиВозв_4074" FOREIGN KEY ("Перевозчик1") REFERENCES "Перевозчик1" ("primaryKey");

CREATE INDEX "ПокупИлиВозв_4559" on "ПокупИлиВозвБ" ("Перевозчик1");

ALTER TABLE "ПокупкаБилета"
	ADD CONSTRAINT "ПокупкаБилета_590" FOREIGN KEY ("Покупатель") REFERENCES "Покупатель" ("primaryKey");

CREATE INDEX "ПокупкаБилета_683" on "ПокупкаБилета" ("Покупатель");

ALTER TABLE "ПокупкаБилета"
	ADD CONSTRAINT "ПокупкаБилет_6927" FOREIGN KEY ("ПокупИлиВозвБ") REFERENCES "ПокупИлиВозвБ" ("primaryKey");

CREATE INDEX "ПокупкаБилет_9108" on "ПокупкаБилета" ("ПокупИлиВозвБ");

ALTER TABLE "Обслуживание"
	ADD CONSTRAINT "Обслуживание__2127" FOREIGN KEY ("БилетнаяКасса") REFERENCES "БилетнаяКасса" ("primaryKey");

CREATE INDEX "Обслуживание__9019" on "Обслуживание" ("БилетнаяКасса");

ALTER TABLE "Обслуживание"
	ADD CONSTRAINT "Обслуживание__6229" FOREIGN KEY ("Оператор") REFERENCES "Оператор" ("primaryKey");

CREATE INDEX "Обслуживание__4868" on "Обслуживание" ("Оператор");

ALTER TABLE "STORMWEBSEARCH"
	ADD CONSTRAINT "STORMWEBSEARCH_FSTORMFILT_6521" FOREIGN KEY ("FilterSetting_m0") REFERENCES "STORMFILTERSETTING" ("primaryKey");

ALTER TABLE "STORMFILTERDETAIL"
	ADD CONSTRAINT "STORMFILTERDETAIL_FSTORMF_2900" FOREIGN KEY ("FilterSetting_m0") REFERENCES "STORMFILTERSETTING" ("primaryKey");

ALTER TABLE "STORMFILTERLOOKUP"
	ADD CONSTRAINT "STORMFILTERLOOKUP_FSTORMF_1583" FOREIGN KEY ("FilterSetting_m0") REFERENCES "STORMFILTERSETTING" ("primaryKey");


