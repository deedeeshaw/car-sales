import json
from sqlalchemy import inspect
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func

import pandas as pd

from config import key

import pymysql
pymysql.install_as_MySQLdb()

engine = create_engine(f"mysql://root:{key}@localhost:3306/cycle_db")

# reflect an existing database into a new model
Base = declarative_base()

# Create our session (link) from Python to the DB
session = Session(engine)

# inspector = inspect(engine)

######################################################################
# TO CREATE TABLE
######################################################################
def get_all_data(table_name):
    session.query(table_name)

    with engine.connect() as con:

        cycles_df= pd.read_sql_table(table_name, con, columns=["year", "startstationname",\
         "endstationname", "usertype", "gender", "birthyear", "tripduration"])
    session.close()
    return cycles_df.head(1000).to_json(orient='records')


######################################################################
# FOR ENDING STATION MARKERS
######################################################################

def end_station_location(table_name):
    session.query(table_name)

    with engine.connect() as con:
        end_station_df=pd.read_sql_table(table_name, con)
        session.close()
    # print(end_station_df.to_json(orient='records')
    return end_station_df.to_json(orient='records')

######################################################################
# FOR STARTING STATION MARKERS
######################################################################
def start_station_location(table_name):
    session.query(table_name)

    with engine.connect() as con:
        start_station_df=pd.read_sql_table(table_name, con)
        session.close()
    
    return start_station_df.to_json(orient='records')