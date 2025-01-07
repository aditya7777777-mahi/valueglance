import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FinancialTable from './components/FinancialTable';
import FilterPanel from './components/FilterPanel';

function App() {
  const [financialData, setFinancialData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filters, setFilters] = useState({
    dateRange: { start: '', end: '' },
    revenue: { min: '', max: '' },
    netIncome: { min: '', max: '' }
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://financialmodelingprep.com/api/v3/income-statement/AAPL?period=annual&apikey=${process.env.REACT_APP_FMP_API_KEY}`
        );
        setFinancialData(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch data');
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          Apple Inc. Financial Data
        </h1>
        <FilterPanel filters={filters} setFilters={setFilters} />
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p className="text-red-500">{error}</p>
        ) : (
          <FinancialTable data={financialData} filters={filters} />
        )}
      </div>
    </div>
  );
}

export default App;
