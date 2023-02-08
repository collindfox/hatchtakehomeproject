import { Image, Text, View, ScrollView, TouchableOpacity } from "react-native";
//import { styles } from "../components/StyleSheet.js";
//import SettingsButton from "../components/SettingsButton.js";
import { menuBar } from "../components/menuBar.js";
const ProfilePage = ({ navigation }) => {
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
          source={require("../assets/CollinHeadshot.png")}
          style={{
            width: 140,
            height: 140,
            borderRadius: 100,
            marginTop: -70,
          }}
        ></Image>
        <Text style={{ fontSize: 25, fontWeight: "bold", padding: 1 }}>
          Collin Fox
        </Text>
        <Text
          style={{
            fontSize: 15,
            fontWeight: "bold",
            color: "#424242",
            padding: 1,
          }}
        >
          20, Male
        </Text>
      </View>
      <ScrollView>
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
          <Text style={{ fontSize: 15 }}>
            Current Position: Software Engineer
          </Text>
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
          <Text style={{ fontSize: 10 }}>
            Profile Header: Computer Science Student at University of Illinois
            Urbana-Champaign. Passionate for the arts, programming, environment,
            volleyball, and culture.
          </Text>
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
          <Text style={{ fontSize: 10 }}>
            Bio: I am a highly motivated Computer Science at the University of
            Illinois at Urbana-Champaign. I have a strong interest in
            problem-solving, software engineering, and data analytics. I am part
            of The Other Guys A Cappella Group, Varsity Men's Glee Club, and
            Women in Computer Science.
          </Text>
        </View>
      </ScrollView>
      <View style={{ bottom: -40 }}>{menuBar(navigation)}</View>
    </View>
  );
};

export { ProfilePage };
