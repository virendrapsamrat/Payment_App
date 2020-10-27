import React from "react";
import { View, Text, Button } from "react-native";
import R from "../R";
export const Home = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: R.dimensions.hp("10%") }}>🤖</Text>
      <Text style={{ fontSize: R.dimensions.hp("5%") }}>
        Welcome to GoPayment
      </Text>
      <Text style={{ textAlign: "center", marginVertical: "5%" }}>
        Work in Progress
      </Text>
      <Button
        title={"Go to Details"}
        onPress={() => navigation.navigate("Details")}
      />
    </View>
  );
};
