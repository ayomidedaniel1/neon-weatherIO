import { BASE_URL, OPEN_WEATHER_API_KEY } from '@env';
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
} from "react-native";

import Header from "@/components/Header";
import SearchInput from "@/components/SearchInput";
import WeatherData from "@/components/WeatherData";
import WeatherForecast from "@/components/WeatherForecast";
import { useWeatherStore } from "@/utils/weatherStore";

const HomeScreen = () => {
  const { weatherData, fetchWeatherData } = useWeatherStore();
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  useEffect(() => {
    fetchWeatherData(`${BASE_URL}?lat=${latitude}&lon=${longitude}&appid=${OPEN_WEATHER_API_KEY}`);
    console.log(weatherData);
  }, []);

  return (
    <View style={styles.container}>
      <Header />

      <SearchInput />

      <View style={styles.titleContainer}>
        <Text style={styles.title}>Toronto</Text>
        <Text style={styles.titleText}>Showing weather for Toronto</Text>
      </View>

      <WeatherData />

      <WeatherForecast />

      <StatusBar style={'dark'} />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
    paddingTop: 60,
    position: "relative",
    paddingHorizontal: 20,
  },
  titleContainer: {
    flexDirection: 'column',
  },
  title: {
    color: '#000',
    fontSize: 42,
    fontFamily: 'semibold',
  },
  titleText: {
    color: 'gray',
    fontSize: 16,
  },
});
