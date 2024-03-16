import { StatusBar } from "expo-status-bar";
import {
  Dimensions,
  StyleSheet,
  Text,
  View
} from "react-native";

import { FC } from 'react';
import Header from "@/components/Header";

const { width } = Dimensions.get('screen');

const HomeScreen: FC = () => {

  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.Header}>
        <View style={styles.topContent}>
          <Text style={styles.io}>Weather</Text>

        </View>
      </View>

      <StatusBar style={'auto'} />
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
  },
  io: {
    fontSize: 24,
    marginLeft: 20,
    color: 'gray',
    fontStyle: 'italic',
    fontFamily: 'bold',
  },
  Header: {
    position: 'absolute',
    top: 50,
    width: width,
  },
  topContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
