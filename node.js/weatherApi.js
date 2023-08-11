const axios = require("axios");
async function getUser(url) {
    try {
      const { data } = await axios.get(url);
      
      const { daily } =data;
      return {sunrise: daily.sunrise, sunset: daily.sunset};
    } catch (error) {
      console.error(error);
    }
  }
  const url = " https://api.open-meteo.com/v1/forecast?latitude=27.70&longitude=85.32&hourly=temperature_2m&daily=sunrise,sunset&forecast_days=1&timezone=auto"
  
  async function solve() {
  
  const sunrise = await getUser(url);
  console.log({ sunrise});//
  }
  solve();