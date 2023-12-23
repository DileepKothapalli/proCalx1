/** @format */

import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { ThemeContext } from "./src/context/ThemeContext";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start workinmmm g on yournn app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
