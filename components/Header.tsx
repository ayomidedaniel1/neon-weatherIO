import { View, Dimensions, Text, StyleSheet } from "react-native";

const { width } = Dimensions.get('screen');

const Header = () => {
  return (
    <View style={styles.Header}>
      <View style={styles.topContent}>
        <Text style={styles.io}>Weather</Text>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
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
