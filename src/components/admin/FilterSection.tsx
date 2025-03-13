import React, { useState } from 'react';

interface FilterSectionProps {}

const FilterSection: React.FC<FilterSectionProps> = () => {
  const [filters, setFilters] = useState({
    date: '',
    status: 'All',
    search: '',
  });

  const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setFilters(prevFilters => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  return (
    <div className="filter-section">
      <div className="filter-group">
        <label>Date:</label>
        <input
          type="date"
          name="date"
          value={filters.date}
          onChange={handleFilterChange}
        />
      </div>
      <div className="filter-group">
        <label>Status:</label>
        <select
          name="status"
          value={filters.status}
          onChange={handleFilterChange}
        >
          <option value="All">All</option>
          <option value="Pending">Pending</option>
          <option value="Approved">Approved</option>
          <option value="Rejected">Rejected</option>
        </select>
      </div>
      <div className="filter-group">
        <label>Search:</label>
        <input
          type="text"
          name="search"
          placeholder="Search..."
          value={filters.search}
          onChange={handleFilterChange}
        />
      </div>
    </div>
  );
};

export default FilterSection;