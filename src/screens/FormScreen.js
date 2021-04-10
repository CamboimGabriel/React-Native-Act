import React, { useContext, useEffect } from "react";
import {
  View,
  StyleSheet,
  ActivityIndicator,
  Platform,
  StatusBar,
  ScrollView,
} from "react-native";
import { Context as FormContext } from "../context/FormContext";
import Form from "../Data/FormData";

const FormScreen = ({ navigation, route }) => {
  const family = route.params?.family ?? "noFamily";
  const [isLoading, setIsLoading] = React.useState(false);
  const { RegisterForm } = useContext(FormContext);

  return !isLoading ? (
    <ScrollView>
      <Form
        submit={(data) => {
          setIsLoading(true);
          RegisterForm(
            data,
            family._id,
            () => setIsLoading(false),
            () => navigation.navigate("Groups")
          );
        }}
        family={family}
      />
    </ScrollView>
  ) : (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#336699" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#f5f1e9",
  },
});

export default FormScreen;
