import React from "react";
import "../styles/filter.css";

const SourceFilter = ({ sources, setSelectedSource }) => {
  return (
    <div className="filter-container">
      <label htmlFor="source-filter">Filter by Source:</label>
      <select
        id="source-filter"
        onChange={(e) => setSelectedSource(e.target.value)}
      >
        {sources.map((source, index) => (
          <option key={index} value={source}>
            {source}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SourceFilter;
