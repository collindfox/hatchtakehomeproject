import { View, Text, Image, Pressable } from "react-native";
import { styles } from "./StyleSheet.js";
const menuBar = (navigation) => {
  return (
    <View style={styles.menu}>
      <Pressable
        style={styles.menubutton}
        onPress={() => navigation.navigate("Messages")}
      >
        <Image
          style={styles.tinyLogo}
          source={require("../assets/messages.png")}
        />
        <Text style={styles.logoText}>Messages</Text>
      </Pressable>
      <Pressable
        style={styles.menubutton}
        onPress={() => navigation.navigate("Feed")}
      >
        <Image style={styles.tinyLogo} source={require("../assets/feed.png")} />
        <Text style={styles.logoText}>Feed</Text>
      </Pressable>
      <Pressable
        style={styles.menubutton}
        onPress={() => navigation.navigate("Profile")}
      >
        <Image
          style={styles.tinyLogo}
          source={require("../assets/profile1.png")}
        />
        <Text style={styles.logoText}>Profile</Text>
      </Pressable>
      <Pressable
        style={styles.menubutton}
        onPress={() => navigation.navigate("Settings")}
      >
        <Image
          style={styles.tinyLogo}
          source={require("../assets/settings.png")}
        />
        <Text style={styles.logoText}>Settings</Text>
      </Pressable>
    </View>
  );
};

export { menuBar };
