import React, { useState } from "react";
import { View, Text, ScrollView, Pressable } from "react-native";
import { styles } from "./StyleSheet.js";

function StaticJobsList({ items, onPress }) {
  const [listItems, setList] = useState([
    { listItems: "Starbucks-Barista", key: "1" },
    { listItems: "The Other Guys-Publicity Manager", key: "2" },
    { listItems: "Illinois Varsity Men's Glee Club-Social Chair", key: "3" },
    { listItems: "Hatch-Web Developer", key: "4" },
  ]);
  return (
    <View style={styles.listscrollview}>
      <ScrollView>
        {listItems.map((item) => {
          return (
            <Pressable
              onPress={onPress}
              key={item.key}
              style={styles.listscrollitem}
              Style={({ pressed }) => [pressed ? styles.buttonPressed : null]}
            >
              <Text style={styles.listscrolltext}>{item.listItems}</Text>
            </Pressable>
          );
        })}
      </ScrollView>
    </View>
  );
}

export default StaticJobsList;
