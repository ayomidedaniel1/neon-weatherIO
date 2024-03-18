import { BASE_URL, OPEN_WEATHER_API_KEY } from '@env';
import { ActivityIndicator, ScrollView, StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import { useDailyForecastStore } from '@/utils/dailyForecastStore';

type ForecastProps = {
  longitude: number | null;
  latitude: number | null;
};

const WeatherForecast = ({ longitude, latitude }: ForecastProps) => {
  const { isLoading, forecastData, fetchForecastData } = useDailyForecastStore();

  useEffect(() => {
    if (latitude && longitude) {
      fetchForecastData(`${BASE_URL}/forecast?lat=${latitude}&lon=${longitude}&cnt=5&appid=${OPEN_WEATHER_API_KEY}`);
    }
  }, [latitude, longitude]);

  const getDayOfWeek = (date: any) => {
    const day = new Date(date * 1000);
    return new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(day);
  };

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.container}
    >

      {isLoading ? (
        <ActivityIndicator size={24} color={'#000'} style={{ justifyContent: 'center', alignItems: 'center', alignSelf: 'center', }} />
      ) : (
        forecastData?.list.map(((data: any, index: number) => (
          <View style={styles.forecastContainer} key={data.dt + index}>
            <Text style={styles.day}>{getDayOfWeek(data.dt)}</Text>
            <Text style={styles.temperature}>{Math.round(data.main.temp - 273.15)}°</Text>
            <Text style={styles.description}>{data?.weather[0].main}</Text>
          </View>
        )))
      )}

    </ScrollView>
  );
};

export default WeatherForecast;

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
  },
  forecastContainer: {
    flexDirection: 'column',
    borderRadius: 8,
    borderWidth: .5,
    borderColor: '#ccc',
    padding: 12,
    paddingRight: 20,
    marginRight: 18,
    height: 120,
    width: 140,
  },
  day: {
    color: '#000',
    fontSize: 21,
    fontFamily: 'medium',
    textAlign: 'left',
  },
  temperature: {
    color: '#000',
    fontSize: 24,
    fontFamily: 'semibold',
    textAlign: 'left',
  },
  description: {
    color: '#000',
    fontSize: 17,
    fontFamily: 'light',
    textAlign: 'left',
  },
});