from flask import Flask, request, jsonify
import nvdlib 
import numpy as np
import matplotlib.pyplot as plt
from sklearn.linear_model import LinearRegression
from model import regressor, cyclicEncode
import os 
from dotenv import load_dotenv

load_dotenv()
api_key = os.getenv("API_KEY")

app = Flask(__name__)

@app.route('/predict', methods=['POST'])
def predict():
    data = request.json

    tech_list = data["Technologies"]

    predicted_data = {}
    for technology in tech_list:
        r = nvdlib.searchCVE(keywordSearch= technology,key = api_key, delay = 1)
        coefficients = regressor(r)

    body = {
        "coefficients": coefficients[0],
        "intercepts": coefficients[1],
        "base-score-month": coefficients[2],
        "base-score-year": coefficients[3],
    }
    
    return jsonify(body)

if __name__=="__main__":
    app.run(debug=True)


