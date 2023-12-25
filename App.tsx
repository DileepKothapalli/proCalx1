/** @format */

import { StatusBar } from "expo-status-bar";
import { StyleSheet, Switch, Text, View } from "react-native";
import { ThemeContext } from "./src/context/ThemeContext";
import { useState } from "react";
import Button from "./src/components/Button";

export default function App() {
  const [theme,setTheme] = useState('light')
  return (
    <ThemeContext.Provider value={theme}>
      <View style={ theme==='light'? styles.container : [styles.container,{backgroundColor:"#111"}]}>
        <StatusBar style="auto" />
        <Switch
        value={theme==='light'}
        onValueChange={() => setTheme(theme === "light" ? "dark" : "light")}
        />
        {/* <Button isGray title="3" onPress={()=> {alert('hello')}}  /> */}
      </View>
    </ThemeContext.Provider>
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
