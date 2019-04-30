# import Flask
from flask import Flask, render_template, request, redirect, jsonify
from data import get_all_data

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



if __name__=='__main__':
    app.run(debug=True)