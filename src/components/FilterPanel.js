import React from 'react';

function FilterPanel({ filters, setFilters }) {
  const handleFilterChange = (category, field, value) => {
    setFilters(prev => ({
      ...prev,
      [category]: {
        ...prev[category],
        [field]: value
      }
    }));
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow mb-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <h3 className="text-lg font-medium mb-2">Date Range</h3>
          <div className="space-y-2">
            <input
              type="date"
              className="w-full border rounded p-2"
              value={filters.dateRange.start}
              onChange={(e) => handleFilterChange('dateRange', 'start', e.target.value)}
            />
            <input
              type="date"
              className="w-full border rounded p-2"
              value={filters.dateRange.end}
              onChange={(e) => handleFilterChange('dateRange', 'end', e.target.value)}
            />
          </div>
        </div>

        <div>
          <h3 className="text-lg font-medium mb-2">Revenue Range</h3>
          <div className="space-y-2">
            <input
              type="number"
              placeholder="Min Revenue"
              className="w-full border rounded p-2"
              value={filters.revenue.min}
              onChange={(e) => handleFilterChange('revenue', 'min', e.target.value)}
            />
            <input
              type="number"
              placeholder="Max Revenue"
              className="w-full border rounded p-2"
              value={filters.revenue.max}
              onChange={(e) => handleFilterChange('revenue', 'max', e.target.value)}
            />
          </div>
        </div>

        <div>
          <h3 className="text-lg font-medium mb-2">Net Income Range</h3>
          <div className="space-y-2">
            <input
              type="number"
              placeholder="Min Net Income"
              className="w-full border rounded p-2"
              value={filters.netIncome.min}
              onChange={(e) => handleFilterChange('netIncome', 'min', e.target.value)}
            />
            <input
              type="number"
              placeholder="Max Net Income"
              className="w-full border rounded p-2"
              value={filters.netIncome.max}
              onChange={(e) => handleFilterChange('netIncome', 'max', e.target.value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FilterPanel;
