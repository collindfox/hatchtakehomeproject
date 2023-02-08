import { menuBar } from "../components/menuBar.js";
import { Text, View, Image } from "react-native";
const SettingsPage = ({ navigation }) => {
  return (
    <View>
      <View
        style={{
          padding: 10,
          width: "100%",
          backgroundColor: "#FD3A73",
          height: 150,
        }}
      ></View>
      <View style={{ alignItems: "center" }}>
        <Image
          source={require("../assets/settings.png")}
          style={{
            width: 140,
            height: 140,
            borderRadius: 100,
            marginTop: -70,
            backgroundColor: "white",
          }}
        ></Image>
        <Text style={{ fontSize: 25, fontWeight: "bold", padding: 10 }}>
          Settings
        </Text>
        <View
          style={{
            alignSelf: "center",
            flexDirection: "row",
            justifyContent: "center",
            backgroundColor: "#fff",
            width: "90%",
            padding: 20,
            paddingBottom: 22,
            borderRadius: 10,
            shadowOpacity: 80,
            elevation: 15,
            marginTop: 30,
          }}
        >
          <Text style={{ fontSize: 20 }}>Notifications</Text>
        </View>
        <View
          style={{
            alignSelf: "center",
            flexDirection: "row",
            justifyContent: "center",
            backgroundColor: "#fff",
            width: "90%",
            padding: 20,
            paddingBottom: 22,
            borderRadius: 10,
            shadowOpacity: 80,
            elevation: 15,
            marginTop: 30,
          }}
        >
          <Text style={{ fontSize: 20 }}>Location</Text>
        </View>
        <View
          style={{
            alignSelf: "center",
            flexDirection: "row",
            justifyContent: "center",
            backgroundColor: "#fff",
            width: "90%",
            padding: 20,
            paddingBottom: 22,
            borderRadius: 10,
            shadowOpacity: 80,
            elevation: 15,
            marginTop: 30,
            marginBottom: 40,
          }}
        >
          <Text style={{ fontSize: 20 }}>Language Preferences</Text>
        </View>
      </View>
      <View style={{ bottom: -81 }}>{menuBar(navigation)}</View>
    </View>
  );
};

export { SettingsPage };
