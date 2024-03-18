import axios from "axios";
import { create } from "zustand";

interface WeatherStoreState {
  weatherData: any;
  fetchWeatherData: (url: string) => void;
}

export const useWeatherStore = create<WeatherStoreState>((set) => ({
  weatherData: null,
  fetchWeatherData: async (url) => {
    const response = await axios.get(url);
    const data = await response.data;
    set({ weatherData: data });
  }
}));