import { BASE_URL, OPEN_WEATHER_API_KEY } from '@env';
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  View,
} from "react-native";

import Header from "@/components/Header";
import SearchInput from "@/components/SearchInput";
import WeatherData from "@/components/WeatherData";
import WeatherForecast from "@/components/WeatherForecast";
import { useWeatherStore } from "@/utils/weatherStore";
import { useLocation } from '@/hooks/useLocation';

const HomeScreen = () => {
  const { loading, weatherData, fetchWeatherData } = useWeatherStore();
  const [latitude, setLatitude] = useState<number | null>(null);
  const [longitude, setLongitude] = useState<number | null>(null);
  const location = useLocation();

  useEffect(() => {
    if (location) {
      setLatitude(location.coords.latitude);
      setLongitude(location.coords.longitude);
    }
  }, [location]);

  useEffect(() => {
    if (latitude && longitude) {
      fetchWeatherData(`${BASE_URL}?lat=${latitude}&lon=${longitude}&appid=${OPEN_WEATHER_API_KEY}`);
    }
  }, [latitude, longitude]);

  return (
    <View style={styles.container}>
      <Header />

      <SearchInput />

      {loading ? (
        <ActivityIndicator size={24} color={'#000'} />
      ) : (
        <>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>{weatherData?.name}</Text>
            <Text style={styles.titleText}>Showing weather for Toronto</Text>
          </View>

          <WeatherData
            temperature={weatherData?.main.temp}
            humidity={weatherData?.main?.humidity}
            windSpeed={weatherData?.wind?.speed}
            description={weatherData?.weather[0]?.description}
          />

          <WeatherForecast />
        </>
      )}

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
    marginBottom: 12,
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
