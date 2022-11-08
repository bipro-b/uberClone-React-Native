//import liraries
import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
// import App from "./App";
import Home from "./src/screens/home";

// create a component
const App = () => {
  return (
    <View style={styles.container}>
      <Home />
    </View>
  );
};
export default App;
// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
    backgroundColor: "white",
  },
});

//make this component available to the app
