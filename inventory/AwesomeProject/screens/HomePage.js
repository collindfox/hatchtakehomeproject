import { menuBar } from "../components/menuBar.js";
import { Text, View } from "react-native";
import { styles } from "../components/StyleSheet.js";
const HomePage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>HATCH</Text>
      {menuBar(navigation)}
    </View>
  );
};

export { HomePage };
