import React, { useContext, useEffect, useRef } from "react";
import {
  View,
  StyleSheet,
  ActivityIndicator,
  Platform,
  StatusBar,
  ScrollView,
  Button,
} from "react-native";
import { Context as FormContext } from "../context/FormContext";
import Form from "../Data/FormData";

const FormScreen = ({ navigation, route }) => {
  const family = route.params?.family ?? "noFamily";
  const [isLoading, setIsLoading] = React.useState(false);
  const { RegisterForm } = useContext(FormContext);
  const scrollView = useRef(null);

  const goTo = () => {
    scrollView.current?.scrollTo({ x: 0, y: 0, animated: true });
  };

  return !isLoading ? (
    <ScrollView ref={scrollView}>
      <Form
        goTo={() => goTo()}
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
