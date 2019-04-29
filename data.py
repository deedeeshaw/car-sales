import json
from sqlalchemy import inspect
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func

import pandas as pd

# from config import key

import pymysql
pymysql.install_as_MySQLdb()

engine = create_engine("mysql://root:Eye@m5mart@localhost:3306/cycle_db")

# reflect an existing database into a new model
Base = declarative_base()

# Create our session (link) from Python to the DB
session = Session(engine)

# inspector = inspect(engine)


def get_all_data(table_name):
    session.query(table_name)

    with engine.connect() as con:

        cycles_df= pd.read_sql_table(table_name, con, columns=["year", "startstationname", "startstationlatitude",\
        "startstationlongitude", "endstationname", "endstationlatitude", "endstationlongitude",\
        "usertype", "gender", "birthyear", "tripduration"])

    return cycles_df.head(100).to_json(orient='records')
    
