import React, { useState, useEffect } from 'react';
import fetchDailyData from '../../api';
const Chart = () => {
  const [dailyDate, setDialyData] = useState({});

  useEffect(() => {
    const fetchAPI = async => {
      setDialyData(fetchDailyData());
    }

    fetchAPI();
  });

  return (
    <h1>Chart</h1>
  );
}

export default Chart;