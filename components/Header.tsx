import { View, Dimensions } from "react-native";

const { width } = Dimensions.get('screen');

const Header = () => {
  return (
    <View style={{ width: width, height: 80, backgroundColor: '#fff', marginTop: -50, marginBottom: 50, }} />
  );
};

export default Header;