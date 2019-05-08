# import Flask
from flask import Flask, render_template, request, redirect, jsonify
from data import get_all_data, end_station_location, start_station_location, station_dropdown

# create app passing the __name__
app = Flask(__name__)

######################################################################
# HOME PAGE
######################################################################
@app.route("/")
def index():
        return render_template("index.html")

######################################################################
# DASHBOARD
######################################################################

@app.route("/dashboard")
def dashboard():
        return render_template("dashboard.html")

######################################################################
# DATA TABLE PAGE
######################################################################
@app.route("/tables")
def table_page():
        return render_template("tables.html")

######################################################################
# POPULATES DATA IN TABLE.JS
######################################################################
@app.route("/data")
def data():
        
        return get_all_data('2019_tripdata')

######################################################################
# MARKS ENDING STATIONS IN MAP.JS
######################################################################
@app.route("/ending_stations")
def ending_stations():

        return end_station_location('end_stations')

######################################################################
# MARKS STARTING STATIONS IN MAP.JS
######################################################################

@app.route("/starting_stations")
def starting_stations():

        return start_station_location('start_stations')



# @app.route("/tables", methods=["GET", "POST"])
# def tables():
#         return render_template("tables.html", end_station=station_dropdown('end_stations'))

if __name__=='__main__':
    app.run(debug=True)