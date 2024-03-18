import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';

const WeatherForecast = () => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.container}
    >

      <View style={styles.forecastContainer}>
        <Text style={styles.day}>Monday</Text>
        <Text style={styles.temperature}>22°</Text>
        <Text style={styles.description}>Sunny</Text>
      </View>

      <View style={styles.forecastContainer}>
        <Text style={styles.day}>Monday</Text>
        <Text style={styles.temperature}>22°</Text>
        <Text style={styles.description}>Sunny</Text>
      </View>

      <View style={styles.forecastContainer}>
        <Text style={styles.day}>Monday</Text>
        <Text style={styles.temperature}>22°</Text>
        <Text style={styles.description}>Sunny</Text>
      </View>

      <View style={styles.forecastContainer}>
        <Text style={styles.day}>Monday</Text>
        <Text style={styles.temperature}>22°</Text>
        <Text style={styles.description}>Sunny</Text>
      </View>

      <View style={styles.forecastContainer}>
        <Text style={styles.day}>Monday</Text>
        <Text style={styles.temperature}>22°</Text>
        <Text style={styles.description}>Sunny</Text>
      </View>
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