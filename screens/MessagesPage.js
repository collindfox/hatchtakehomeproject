import { menuBar } from "../components/menuBar.js";
import { Text, View, StyleSheet, Image } from "react-native";
import ChatBar from "../components/ChatBar.js";

import { styles } from "../components/StyleSheet.js";
import SendButton from "../components/SendButton.js";

const MessagesPage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.containerMessages}>
        <Text style={{ fontSize: 30 }}>Messages</Text>
        <Image
          source={require("../assets/add.png")}
          style={{
            width: 40,
            height: 40,
            borderRadius: 100,
            marginTop: -5,
            marginLeft: 160,
          }}
        ></Image>
      </View>
      <View style={styles.containerHorizontal}>
        <ChatBar></ChatBar>
        <SendButton></SendButton>
      </View>
      {menuBar(navigation)}
    </View>
  );
};

export { MessagesPage };
