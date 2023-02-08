import { menuBar } from "../components/menuBar.js";
import { Text, View, StyleSheet } from "react-native";
import ChatBar from "../components/ChatBar.js";
// import { Platform, KeyboardAvoidingView, SafeAreaView } from "react-native";
// import { GiftedChat } from "react-native-gifted-chat";
// import Fire from "../Fire.js";

import { styles } from "../components/StyleSheet.js";
import SendButton from "../components/SendButton.js";
// import React from "react";
// export default class ChatScreen extends React.Component {
//   state = {
//     messages: [],
//   };
//   get user() {
//     return {
//       _id: Fire.uid,
//       name: this.props.navigation.state.params.name,
//     };
//   }
//   componentDidMount() {
//     Fire.get((message) =>
//       this.setState((previous) => ({
//         messages: GiftedChat.append(previous.messages, message),
//       }))
//     );
//   }
//   componentWillUnmount() {
//     Fire.Off();
//   }
//   render() {
//     const chat = (
//       <GiftedChat
//         messages={this.state.messages}
//         onSend={Fire.send}
//         user={this.user}
//       />
//     );
//     if (Platform.OS === "android") {
//       return (
//         <KeyboardAvoidingView
//           style={{ flex: 1 }}
//           behavior="padding"
//           keyboardVerticalOffset={30}
//           enabled
//         >
//           {chat}
//         </KeyboardAvoidingView>
//       );
//     }
//     return <SafeAreaView style={{ flex: 1 }}>{chat}</SafeAreaView>;
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
// });
const MessagesPage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.containerMessages}>
        <Text style={{ fontSize: 30 }}>Messages</Text>
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
