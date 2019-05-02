Drop database if exists cycle_db;
create database cycle_db;

use cycle_db;

select * from 2019_tripdata;
select count(*) from 2019_tripdata;

alter table 2019_tripdata
modify gender varchar(15);

update 2019_tripdata
set gender = "Undisclosed"
where gender = "0";

update ignore 2019_tripdata
set tripduration = format((tripduration/60), 0);

update 2019_tripdata
set birthyear = 2019 - birthyear;

alter table 2019_tripdata
add column year date;

update 2019_tripdata
set year = extract(year from starttime);

CREATE TABLE start_stations
AS
SELECT DISTINCT startstationid,
		startstationname, 
        startstationlatitude,
		startstationlongitude
FROM 2019_tripdata;

SELECT count(*) FROM end_stations;

-- insert into 2019_tripdata select * from 2018_tripdata;

-- SET @jsoncycle=(SELECT JSON_ARRAYAGG(
 --   JSON_OBJECT("id", bikeid, "usertype", usertype, "gender", gender)) 
  --  FROM 2019_tripdata);

-- SELECT JSON_PRETTY(@jsoncycle); --
