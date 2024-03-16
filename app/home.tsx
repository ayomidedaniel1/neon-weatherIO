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
  },
});
