import React, { useState } from 'react';

function FinancialTable({ data, filters }) {
  const [sortConfig, setSortConfig] = useState({
    key: 'date',
    direction: 'desc'
  });

  const formatNumber = (num) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(num);
  };

  const sortData = (data) => {
    return [...data].sort((a, b) => {
      if (a[sortConfig.key] < b[sortConfig.key]) {
        return sortConfig.direction === 'asc' ? -1 : 1;
      }
      if (a[sortConfig.key] > b[sortConfig.key]) {
        return sortConfig.direction === 'asc' ? 1 : -1;
      }
      return 0;
    });
  };

  const filteredData = data.filter(item => {
    const dateInRange = (!filters.dateRange.start || item.date >= filters.dateRange.start) &&
                       (!filters.dateRange.end || item.date <= filters.dateRange.end);
    const revenueInRange = (!filters.revenue.min || item.revenue >= Number(filters.revenue.min)) &&
                          (!filters.revenue.max || item.revenue <= Number(filters.revenue.max));
    const netIncomeInRange = (!filters.netIncome.min || item.netIncome >= Number(filters.netIncome.min)) &&
                            (!filters.netIncome.max || item.netIncome <= Number(filters.netIncome.max));
    
    return dateInRange && revenueInRange && netIncomeInRange;
  });

  const sortedData = sortData(filteredData);

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            {['Date', 'Revenue', 'Net Income', 'Gross Profit', 'EPS', 'Operating Income'].map((header) => (
              <th
                key={header}
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                onClick={() => {/* Add sorting logic */}}
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {sortedData.map((item) => (
            <tr key={item.date}>
              <td className="px-6 py-4 whitespace-nowrap">{item.date}</td>
              <td className="px-6 py-4 whitespace-nowrap">{formatNumber(item.revenue)}</td>
              <td className="px-6 py-4 whitespace-nowrap">{formatNumber(item.netIncome)}</td>
              <td className="px-6 py-4 whitespace-nowrap">{formatNumber(item.grossProfit)}</td>
              <td className="px-6 py-4 whitespace-nowrap">{item.eps.toFixed(2)}</td>
              <td className="px-6 py-4 whitespace-nowrap">{formatNumber(item.operatingIncome)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default FinancialTable;
