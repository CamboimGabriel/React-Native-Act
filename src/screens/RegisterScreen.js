import React, { useContext, useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  ActivityIndicator,
  Platform,
  StatusBar,
  ScrollView,
} from "react-native";
import { Context as FamilyContext } from "../context/FamilyContext";
import RegisterForm from "../Data/RegisterFormData";

const RegisterScreen = ({ navigation }) => {
  const { RegisterFamily } = useContext(FamilyContext);
  const [isLoading, setIsLoading] = useState(false);

  return !isLoading ? (
    <ScrollView style={styles.statusBar}>
      <RegisterForm
        submit={(data) => {
          setIsLoading(true);
          RegisterFamily(
            data,
            () => setIsLoading(false),
            () => navigation.navigate("Families")
          );
        }}
      />
    </ScrollView>
  ) : (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#336699" />
    </View>
  );
};

const styles = StyleSheet.create({
  statusBar: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: "#f5f1e9",
  },
  input: {
    borderWidth: 1,
    color: "black",
    paddingVertical: 10,
    paddingHorizontal: 8,
    marginBottom: 10,
  },
  label: {
    marginTop: 10,
    marginHorizontal: 8,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#f5f1e9",
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
  },
});

export default RegisterScreen;
