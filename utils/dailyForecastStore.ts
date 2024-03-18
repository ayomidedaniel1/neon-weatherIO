import axios from "axios";
import { create } from "zustand";

interface WeatherStoreState {
  isLoading: boolean;
  forecastData: any;
  fetchForecastData: (url: string) => void;
}

export const useDailyForecastStore = create<WeatherStoreState>((set) => ({
  isLoading: true,
  forecastData: null,
  fetchForecastData: async (url) => {
    try {
      const response = await axios.get(url);
      const data = await response.data;
      set({ forecastData: data, isLoading: false });
    } catch (error) {
      set({ isLoading: false });
    }
  }
}));