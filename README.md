# CRYPTONITE AI

<p align="center">
  <a href="https://docs.google.com/document/d/1-vwvX7vXcJSboqXP7iP0yKwkzDYiI0UwX4dt-sDmjvI/edit">🔗Google Drive Link🔗</a>
</p>

<p align="center">
  <img src="https://github.com/PranavBhatP/HTFC07/assets/63557880/deaeefd4-f79d-481b-82a8-fed2501d88c9" alt="Download">
  <img src="https://github.com/PranavBhatP/HTFC07/assets/63557880/1cdcba26-9062-4712-a411-d7d677a5f9ca" alt="Download2">
</p>

## <p align="center">Introduction</p>

<p align="center">
  This is a SaaS web application dedicated to assisting enterprises in fortifying their business infrastructures by predicting and mitigating real-world threats. What distinguishes us is our enterprise-centric approach, where we adeptly analyze and present predictions, all wrapped in a visually appealing and user-friendly interface.
</p>

## <p align="center">Tech stack</p>

<p align="center">
  - Front-end: MERN Stack<br>
  - Back-end: Flask (Python)<br>
  - Styling: Tailwind CSS<br>
  - Machine Learning/AI: Polynomial Regression
</p>

## <p align="center">Project Overview</p>

<p align="center">
  CryptoniteAI, a state-of-the-art SaaS web application, is dedicated to assisting enterprises in fortifying their business infrastructures by predicting and mitigating real-world threats. What distinguishes us is our enterprise-centric approach, where we adeptly analyze and present predictions, all wrapped in a visually appealing and user-friendly interface.
</p>

<p align="center">
  In the current cybersecurity market, the predominant focus revolves around reactive solutions post-attack, neglecting proactive prevention. CryptoniteAI seeks to redefine this landscape by introducing an innovative paradigm, specifically honing in on predicting emerging cyber threats.
</p>

<p align="center">
  Our methodology involves harnessing real-time data from the esteemed National Vulnerability Database, overseen by the US Government. Through the application of cutting-edge machine learning, we conduct global data analysis every two hours, ensuring our clients receive the most current insights.
</p>

<p align="center">
  CryptoniteAI stands as a pioneer in innovation, poised to reshape the cybersecurity domain with forward-thinking strategies and advanced solutions, all encapsulated within a beautifully designed user interface that enhances user experience and accessibility.
</p>

<p align="center">
  With a commitment to bridging the gap between security and aesthetics, CryptoniteAI is not just a cybersecurity solution but a seamless and visually captivating experience for enterprises seeking unparalleled protection and insight into potential threats.
</p>

### <p align="center">Our Approach</p>

#### <p align="center">Methodology</p>
<p align="center">
  Our system operates on real-time data feeds from the National Vulnerability Database (NVD) through the OpenCVE API. Leveraging this API, we gain access to comprehensive details regarding nascent vulnerabilities, attack vectors, and detailed CVSS Analysis. Our implementation strategically assesses these factors to identify and prioritize concerning threats.
</p>

#### <p align="center">Polynomial Regression Models</p>
<p align="center">
  A cornerstone of our methodology involves the application of polynomial regression models. Initially, these models assess base-metric scores from the CVSS Protocol, predicting upcoming vulnerabilities without explicitly performing CVSS analysis. The subsequent phase involves navigating the NVD Database to identify similar vulnerabilities, conducting a nuanced analysis using a second polynomial regression model to predict more accurate impact scores within specific ranges of base-metric scores. The mathematical coefficients derived from these models are meticulously persisted to the database.
</p>

#### <p align="center">Core Algorithm</p>
<p align="center">
  At the heart of our system lies a sophisticated core algorithm. We assign specific weights to vulnerabilities based on critical factors, enabling predictions of the most likely nascent attack vectors, modes, and privileges required. These predictions are listed in decreasing order of probabilities, providing actionable insights for proactive cybersecurity measures.
</p>

#### <p align="center">Report and Graph Generation</p>
<p align="center">
  Our system excels not only in data analysis but also in effective visualization. Using the stored coefficients and other details, we employ libraries to plot graphs that display data effectively. Furthermore, we leverage these details to generate detailed PDF reports, ensuring comprehensive documentation of our findings.
</p>

## <p align="center">Getting started</p>

<p align="center">
  To download the code, follow these steps:
</p>

<p align="center">
  1. Clone the repository onto your local machine and run the following commands in order:
</p>

```bash
cd HTFC07
cd front-end
yarn install
cd ..
cd middleware
yarn install
```

<p align="center">
  2. Create two `.env` files in the middleware and models folder. In the middleware one, write a port number, and in the models one, you can note down your NVD API Key under the `API_KEY` field.
</p>
<p align="center">
  3. Download the `nvdcve-1.1.-2023.json` file from the NVD Json Feed Link and keep it in the local models f