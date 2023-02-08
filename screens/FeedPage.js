import { menuBar } from "../components/menuBar.js";
import { Text, View } from "react-native";
import { styles } from "../components/StyleSheet.js";
const FeedPage = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", padding: 30 }}>
      <Text style={{ fontSize: 50 }}>HATCH</Text>
      {menuBar(navigation)}
    </View>
  );
};

export { FeedPage };
