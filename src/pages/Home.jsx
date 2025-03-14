import React, { useEffect, useState } from "react";
import { fetchDisasterData } from "../api/fetchData";
import DisasterCard from "../components/DisasterCard";
import SourceFilter from "../components/SourceFilter";
import "../styles/home.css";

const Home = () => {
  const [disasters, setDisasters] = useState([]);
  const [filteredDisasters, setFilteredDisasters] = useState([]);
  const [sources, setSources] = useState([]);
  const [selectedSource, setSelectedSource] = useState("All");

  useEffect(() => {
    const getData = async () => {
      const data = await fetchDisasterData();
      setDisasters(data);
      setFilteredDisasters(data);

      // Unique sources nikalna
      const uniqueSources = ["All", ...new Set(data.map(d => d.source))];
      setSources(uniqueSources);
    };

    getData();
  }, []);

  // 🔥 **Filtering function**
  useEffect(() => {
    if (selectedSource === "All") {
      setFilteredDisasters(disasters);
    } else {
      setFilteredDisasters(disasters.filter(d => d.source === selectedSource));
    }
  }, [selectedSource, disasters]);

  return (
    <div className="home-container">
      <SourceFilter sources={sources} setSelectedSource={setSelectedSource} />
      <div className="disaster-list">
        {filteredDisasters.length > 0 ? (
          filteredDisasters.map((disaster) => (
            <DisasterCard key={disaster.id} data={disaster} />
          ))
        ) : (
          <p>Loading data...</p>
        )}
      </div>
    </div>
  );
};

export default Home;
