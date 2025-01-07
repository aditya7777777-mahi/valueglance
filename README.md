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

## Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/valueglance.git
cd valueglance
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory and add your API key:
```
REACT_APP_FMP_API_KEY=your_api_key_here
```

4. Start the development server:
```bash
npm start
```

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


