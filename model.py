import nvdlib 
import numpy as np
import matplotlib.pyplot as plt
from sklearn.linear_model import LinearRegression

def cyclicEncode(year_month):
    year, month = int(year_month[:4]), int(year_month[4:6])
    month_angle = 2.0 * np.pi * (month - 1) / 12 
    year_angle = 2.0 * np.pi * (year % 100) / 100  
    return [np.sin(month_angle), np.cos(month_angle), np.sin(year_angle), np.cos(year_angle)]

r = nvdlib.searchCVE(keywordSearch= "Exynos",key = "6a7fd5d3-9090-444f-97b3-3dccde149d41", delay = 1)

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

X_encoded = np.array([cyclicEncode(date) for date in x])

Y = np.array(y).reshape(-1, 1)

model = LinearRegression()
model.fit(X_encoded, Y)

future_dates = ['202501', '202502', '202503', '202504', '202505']
future_X_encoded = np.array([cyclicEncode(date) for date in future_dates])

future_y_pred = model.predict(future_X_encoded)

plt.scatter(x, y, color='blue', label='Original data')
plt.plot(future_dates, future_y_pred, color='green', label='Future predictions')

plt.xlabel('Time')
plt.ylabel('Y')
plt.title('Linear Regression with Future Predictions')

plt.grid(True)
plt.legend()
plt.show()
