# ValueGlance - Financial Data Filtering App

A React-based application for visualizing and analyzing Apple Inc.'s financial data using the Financial Modeling Prep API.

## Features

- View Apple Inc.'s annual income statements
- Filter financial data by date range, revenue, and net income
- Sort data by date, revenue, and net income
- Responsive design for both desktop and mobile devices
- Currency formatting for financial values

## Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)
- Financial Modeling Prep API key

## Live Demo

Visit the live application at: [ValueGlance App](https://valueglance-ou0wwisnx-adityas-projects-9cf229ca.vercel.app/)

## Quick Start

1. Clone the repository:
```bash
git clone https://github.com/adityapatel149/valueglance.git
cd valueglance
```

2. Install dependencies:
```bash
npm install
```

3. Create environment variables:
   - Create a `.env` file in the root directory
   - Add your Financial Modeling Prep API key:
```env
REACT_APP_FMP_API_KEY=your_api_key_here
```

4. Run locally:
```bash
npm start
```
The app will be available at `http://localhost:3000`

## Deployment

This project is deployed on Vercel. The deployment is automatically triggered when changes are pushed to the main branch.

### Deployment URL
Production: [https://valueglance-ou0wwisnx-adityas-projects-9cf229ca.vercel.app/](https://valueglance-ou0wwisnx-adityas-projects-9cf229ca.vercel.app/)

### Repository
GitHub: [https://github.com/aditya7777777-mahi/valueglance](https://github.com/aditya7777777-mahi/valueglance)

## Project Structure

```
valueglance/
├── src/
│   ├── components/
│   │   ├── FinancialTable.js
│   │   └── FilterPanel.js
│   ├── App.js
│   ├── index.js
│   └── index.css
├── public/
└── package.json
```

## Technology Stack

- React 18.2.0
- Tailwind CSS for styling
- Axios for API requests
- Financial Modeling Prep API

## Environment Variables

- `REACT_APP_FMP_API_KEY`: Your Financial Modeling Prep API key


