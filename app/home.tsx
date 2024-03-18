import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View
} from "react-native";

import Header from "@/components/Header";
import SearchInput from "@/components/SearchInput";
import WeatherData from "@/components/WeatherData";
import WeatherForecast from "@/components/WeatherForecast";

const HomeScreen = () => {

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
