import nvdlib 
import numpy as np
import matplotlib.pyplot as plt
from sklearn.linear_model import LinearRegression
r = nvdlib.searchCVE(keywordSearch= "Exynos",key = "6a7fd5d3-9090-444f-97b3-3dccde149d41", delay = 1)

x = []
y = []
for eachCVE in r:
    try:
        y.append(eachCVE.v31score)
        x.append(int(eachCVE.published[:4]))
    except:
        try:
            y.append(eachCVE.v30score)
            x.append(int(eachCVE.published[:4]))
        except:
            try:
                y.append(eachCVE.v2score)
                x.append(int(eachCVE.published[:4]))
            except:
                pass

X = np.array(x).reshape(-1,1)
Y = np.array(y).reshape(-1,1)

model = LinearRegression()
model.fit(X, Y)

future_X = np.array([[2025], [2026], [2027], [2028], [2029], [2030], [2031], [2032],[2033],[2034], [2035], [2036], [2037]])
future_y_pred = model.predict(future_X)

plt.scatter(X, Y, color='blue', label='Original data')
plt.plot(X, model.predict(X), color='red', label='Regression curve')
plt.scatter(future_X, future_y_pred, color='green', label='Future predictions')

plt.xlabel('Time')
plt.ylabel('Y')
plt.title('Linear Regression with Future Predictions')


plt.grid(True)
plt.show()