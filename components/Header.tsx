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
    color: 'black',
    fontFamily: 'medium',
  },
  Header: {
    position: 'absolute',
    top: 50,
    width: width,
    borderWidth: .5,
    borderTopColor: 'transparent',
    borderBottomColor: '#000',
  },
  topContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
});
