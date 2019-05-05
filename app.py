# import Flask
from flask import Flask, render_template, request, redirect, jsonify
from data import get_all_data, end_station_location, start_station_location

# create app passing the __name__
app = Flask(__name__)

# HOME PAGE
# define what to do when the user hits the "/"
@app.route("/")
def index():
        return render_template("index.html")

@app.route("/data")
def data():
        
        return get_all_data('2019_tripdata')


@app.route("/ending_stations")
def ending_stations():

        return end_station_location('end_stations_19')


@app.route("/starting_stations")
def starting_stations():

        return start_station_location('start_stations_19')

@app.route("/tables")
def tables():
        return render_template("tables.html")

if __name__=='__main__':
    app.run(debug=True)