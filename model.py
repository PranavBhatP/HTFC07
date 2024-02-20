import nvdlib 
import numpy as np
import matplotlib.pyplot as plt
from sklearn.linear_model import LinearRegression
from dotenv import load_dotenv
import os
import json
import json

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

def analysis(base):
    f = open("nvdcve-1.1-2023.json","r", encoding = "utf-8")
    cve_data = json.load(f)
    vectors = {}
    count = 0
    for cve_item in cve_data['CVE_Items']:
        try:
            base_score = cve_item['impact']['baseMetricV3']['cvssV3']['baseScore']
            if base == base_score:
                count+=1
                attack_vector = cve_item['impact']['baseMetricV3']['cvssV3']['attackVector']
                attack_complexity = cve_item['impact']['baseMetricV3']['cvssV3']['attackComplexity']
                if(attack_vector not in vectors):
                    vectors[attack_vector] = [1,0,0,0]
                else:
                    vectors[attack_vector][0]+=1
                
                if(attack_complexity=="LOW"):
                    vectors[attack_vector][1]+=1
                elif(attack_complexity=="MEDIUM"):
                    vectors[attack_vector][2]+=1
                elif(attack_complexity=="HIGH"):
                    vectors[attack_vector][3]+=1

        except KeyError:
            continue
    
    results = {}
    for vector in vectors:
        results[vector] = (vectors[vector][0]/count)*(((vectors[vector][1]/vectors[vector][0])*0.8)+((vectors[vector][2]/vectors[vector][0])*0.6)+((vectors[vector][3]/vectors[vector][0])*0.4))
    sorted_results = sorted(results.items(), key=lambda x: x[1], reverse=True)
    results = {}
    for i in sorted_results:
        results[i[0]] = i[1]
    return results
