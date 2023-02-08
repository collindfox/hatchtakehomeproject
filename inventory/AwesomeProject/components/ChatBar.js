import { View, Text, TextInput, StyleSheet } from "react-native";
//import react, { useState } from "react";

//import { styles } from "./StyleSheet";

const ChatBar = (props) => {
  //const [text, onChangeText] = React.useState("");
  return (
    <View style={styles.containerSearch}>
      <TextInput
        placeholder="Enter"
        style={styles.input}
        value={props.searchText}
        onChangeText={(text) => props.setSearchText}
      />
    </View>
  );
};
export default ChatBar;
const styles = StyleSheet.create({
  containerSearch: {
    margin: 10,
    width: 270,
  },
  input: {
    backgroundColor: "#ebebeb",
    padding: 10,
    borderRadius: 10,
    color: "#000",
    borderWidth: 1,
  },
});
