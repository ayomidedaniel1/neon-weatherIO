import axios from "axios";
import { create } from "zustand";

interface WeatherStoreState {
  loading: boolean;
  weatherData: any;
  fetchWeatherData: (url: string) => void;
}

export const useWeatherStore = create<WeatherStoreState>((set) => ({
  loading: true,
  weatherData: null,
  fetchWeatherData: async (url) => {
    try {
      set({ loading: true });
      const response = await axios.get(url);
      const data = await response.data;
      set({ weatherData: data, loading: false });
    } catch (error) {
      set({ loading: false });
    }
  }
}));