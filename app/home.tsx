import { BASE_URL, OPEN_WEATHER_API_KEY } from '@env';
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  View
} from "react-native";
import Toast from 'react-native-root-toast';

import Header from "@/components/Header";
import SearchInput from "@/components/SearchInput";
import WeatherData from "@/components/WeatherData";
import WeatherForecast from "@/components/WeatherForecast";
import { useLocation } from '@/hooks/useLocation';
import { useWeatherStore } from "@/utils/weatherStore";

const HomeScreen = () => {
  const location = useLocation();
  const { loading, weatherData, fetchWeatherData } = useWeatherStore();

  const [searchQuery, setSearchQuery] = useState<string>('');
  const [latitude, setLatitude] = useState<number | null>(null);
  const [longitude, setLongitude] = useState<number | null>(null);

  // useeffect to find user coordinated so as to display weather info on app initial load
  useEffect(() => {
    if (location) {
      setLatitude(location.coords.latitude);
      setLongitude(location.coords.longitude);
    }
  }, [location]);

  useEffect(() => {
    if (latitude && longitude) {
      fetchWeatherData(`${BASE_URL}/weather?lat=${latitude}&lon=${longitude}&appid=${OPEN_WEATHER_API_KEY}`);
    }
  }, [latitude, longitude]);

  // Function to handle city search
  const handleSearch = async () => {
    if (searchQuery) {
      try {
        fetchWeatherData(`${BASE_URL}/weather?q=${searchQuery}&appid=${OPEN_WEATHER_API_KEY}`);

        if (weatherData.cod === '404') {
          Toast.show('City not found');
        }

        const { lat, lon } = weatherData.coord;
        setLatitude(lat);
        setLongitude(lon);
      } catch (error) {
        console.log(error);
        Toast.show('Some error occurred!. Try again');
      }
    }
  };

  return (
    <View style={styles.container}>
      <Header />

      <SearchInput searchQuery={searchQuery} setSearchQuery={setSearchQuery} handleSearch={handleSearch} />

      {loading ? (
        <ActivityIndicator size={24} color={'#000'} />
      ) : (
        <>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>{weatherData?.name}</Text>
            <Text style={styles.titleText}>Showing todays' weather for {weatherData?.name}</Text>
          </View>

          <WeatherData
            temperature={weatherData?.main.temp}
            humidity={weatherData?.main?.humidity}
            windSpeed={weatherData?.wind?.speed}
            description={weatherData?.weather[0]?.description}
          />

          <WeatherForecast
            latitude={latitude}
            longitude={longitude}
          />
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
