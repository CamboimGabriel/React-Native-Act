import React, { useContext } from "react";
import {
  View,
  StyleSheet,
  Text,
  Linking,
  StatusBar,
  Platform,
  TouchableOpacity,
  Alert,
} from "react-native";
import { Context as AuthContext } from "../context/AuthContext";

const SettingsScreen = () => {
  const { signout } = useContext(AuthContext);

  const handleEmaillPress = async () => {
    await Linking.openURL("mailto: actribeirao@gmail.com");
  };

  const exitConfirmation = () =>
    Alert.alert(
      "SAIR",
      "Deseja mesmo sair do aplicativo?",
      [
        {
          text: "Cancelar",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        { text: "Confirmar", onPress: () => signout() },
      ],
      { cancelable: false }
    );

  return (
    <View style={styles.statusBar}>
      <TouchableOpacity style={styles.button} onPress={handleEmaillPress}>
        <Text style={styles.text}>Contatar Suporte</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={exitConfirmation}>
        <Text style={styles.text}>Sair</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  statusBar: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f5f1e9",
  },
  text: {
    fontSize: 17,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase",
  },
  button: {
    width: "80%",
    backgroundColor: "#bd786e",
    borderRadius: 25,
    height: 45,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 10,
    alignSelf: "center",
  },
});

export default SettingsScreen;
