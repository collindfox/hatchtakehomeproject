import { Pressable, View, Text, Image } from "react-native";
import { styles } from "./StyleSheet.js";
//This is the general button used for the settings page.
function SendButton({ children, onPress }) {
  return (
    <View style={styles.sendStyle}>
      <Pressable
        onPress={onPress}
        style={({ pressed }) => [pressed ? styles.buttonPressed : null]}
      >
        <View>
          <Image
            source={require("../assets/send.png")}
            style={{
              marginTop: 25,
              width: 40,
              height: 40,
            }}
          ></Image>
          <Text style={styles.titleText}>{children}</Text>
        </View>
      </Pressable>
    </View>
  );
}
export default SendButton;
