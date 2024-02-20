import nvdlib 
import numpy as np
import matplotlib.pyplot as plt
from sklearn.linear_model import LinearRegression
from dotenv import load_dotenv
import os

load_dotenv()
api_key = os.getenv("API_KEY")

def cyclicEncode(year_month):
    year, month = int(year_month[:4]), int(year_month[4:6])
    month_angle = 2.0 * np.pi * (month - 1) / 12 
    year_angle = 2.0 * np.pi * (year % 100) / 100  
    return [np.sin(month_angle), np.cos(month_angle), np.sin(year_angle), np.cos(year_angle)]

def regressor(r):
    x = []
    y = []

    for eachCVE in r:
        try:
            y.append(eachCVE.v31score)
            x.append(eachCVE.published[:4]+eachCVE.published[5:7])
        except:
            try:
                y.append(eachCVE.v30score)
                x.append(eachCVE.published[:4]+eachCVE.published[5:7])
            except:
                try:
                    y.append(eachCVE.v2score)
                    x.append(eachCVE.published[:4]+eachCVE.published[5:7])
                except:
                    pass

    if(len(y)<=10):
        return None

    X = np.array(x).reshape(-1,1)

    X_encoded = np.array([cyclicEncode(date) for date in x])

    Y = np.array(y).reshape(-1, 1)

    model = LinearRegression()
    model.fit(X_encoded, Y)

    future_dates = ['202403','202404','202405','202406','202407','202408','202409','202410','202411','202412','202501', '202502', '202503', '202504', '202505''202506', '202507', '202508', '202509', '202510', '202511', '202512']
    future_X_encoded = np.array([cyclicEncode(date) for date in future_dates])

    future_X_encoded = np.array([cyclicEncode(date) for date in future_dates])
    future_predictions = model.predict(future_X_encoded)

    future_model = LinearRegression()
    future_model.fit(np.arange(len(future_dates)).reshape(-1, 1), future_predictions)

    future_coefficients = future_model.coef_
    future_intercepts = future_model.intercept_

    results = future_predictions.flatten()
    rms = np.sqrt(np.mean(results**2))

    return (future_coefficients[0][0], future_intercepts[0], np.around(results[0], decimals = 1), np.around(rms, decimals = 1))

    