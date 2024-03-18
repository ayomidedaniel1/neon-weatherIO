import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';

const WeatherForecast = ({ forecastData }: any) => {
  console.log('daily forecast >>>', forecastData);

  const getDayOfWeek = (date: string) => {
    const day = new Date(date);
    return new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(day);
  };

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.container}
    >

      {forecastData.map(((data: any, index: number) => (
        <View style={styles.forecastContainer} key={data.dt + index}>
          <Text style={styles.day}>{getDayOfWeek(data.dt)}</Text>
          <Text style={styles.temperature}>{Math.round(data.main.temp - 273.15)}°</Text>
          <Text style={styles.description}>{data?.weather[0].main}</Text>
        </View>
      )))}

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