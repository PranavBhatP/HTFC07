# CRYPTONITE AI

<a href = "https://docs.google.com/document/d/1-vwvX7vXcJSboqXP7iP0yKwkzDYiI0UwX4dt-sDmjvI/edit">🔗Google Drive Link🔗</a>

## Introduction

This is a SaaS web application, is dedicated to assisting enterprises in fortifying their business infrastructures by predicting and mitigating real-world threats. What distinguishes us is our enterprise-centric approach, where we adeptly analyze and present predictions, all wrapped in a visually appealing and user-friendly interface.

## Tech stack

- 1. Front-end: MERN Stack
- 2. Back-end: Flask (Python)
- 3. Styling: Tailwind CSS
- 4. Machine Learning/AI: Polynomial Regression

## Project Overview

Our system operates on real-time data feeds from the National
Vulnerability Database (NVD) through the "nvdlib" package. Leveraging this API, we gain
access to comprehensive details regarding nascent vulnerabilities, attack vectors, and detailed
CVSS Analysis. Our implementation strategically assesses these factors to identify and
prioritize concerning threats.

## Getting started

To download the code follow the steps:

1. Clone the repository onto your local machine and run the following commands in order.

```cd HTFC07```

`cd front-end`

`yarn install`

`cd ..`

`cd middleware`

`yarn install`

2. Create two `.env` files in the middleware and models folder. In the middleware one, write a port number and in the models one, you can note down your NVD API Key under the API_KEY field.
3. Download the `nvdcve-1.1.-2023.json` file from the NVD Json Feed Link and keep it in the local models folder.

