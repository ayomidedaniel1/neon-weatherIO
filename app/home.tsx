import { StatusBar } from "expo-status-bar";
import {
  Dimensions,
  StyleSheet,
  View
} from "react-native";

import Header from "@/components/Header";

const { width } = Dimensions.get('screen');

const HomeScreen = () => {

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
