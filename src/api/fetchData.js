const API_URL = "https://api.reliefweb.int/v1/reports";

export const fetchDisasterData = async () => {
  try {
    const response = await fetch(`${API_URL}?appname=disaster-info-app&limit=20`);
    const data = await response.json();

    return data.data.map(item => ({
      id: item.id,
      title: item.fields.title || "No Title Available",
      date: item.fields.date?.created || new Date().toISOString(),  // ✅ Default date fix
      source: item.fields.source?.[0]?.name || "Unknown",
      summary: item.fields.body ? item.fields.body.substring(0, 150) + "..." : "No description available."  // ✅ Default summary fix
    }));
  } catch (error) {
    console.error("Error fetching disaster data:", error);
    return [];
  }
};
