import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const WeatherData = () => {
  return (
    <View style={styles.container}>
      <View style={styles.dataContainer}>
        <View style={styles.dataLeftContainer}>
          <View style={styles.tempContainer}>
            <Text style={styles.topTitle}>24°</Text>
            <Text style={styles.title}>Temperature</Text>
          </View>

          <View style={styles.tempContainer}>
            <Text style={styles.bottomTitle}>72%</Text>
            <Text style={styles.title}>Humidity</Text>
          </View>
        </View>

        <View style={styles.dataRightContainer}>
          <View style={styles.tempContainer}>
            <Text style={[styles.topTitle, { textAlign: 'right' }]}>Clear</Text>
            <Text style={[styles.title, { textAlign: 'right' }]}>Description</Text>
          </View>

          <View style={styles.tempContainer}>
            <Text style={[styles.bottomTitle, { textAlign: 'right' }]}>5.1 m/s</Text>
            <Text style={[styles.title, { textAlign: 'right' }]}>Wind speed</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default WeatherData;

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
  },
  dataContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  dataLeftContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    gap: 24,
  },
  dataRightContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    gap: 24,
  },
  tempContainer: {
    flexDirection: 'column',
  },
  topTitle: {
    color: '#000',
    fontFamily: 'semibold',
    fontSize: 40,
  },
  bottomTitle: {
    color: '#000',
    fontFamily: 'medium',
    fontSize: 26,
  },
  title: {
    color: 'gray',
    fontSize: 16,
    fontFamily: 'medium',
  },
});