import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Keyboard,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import Icon from "react-native-vector-icons/Feather";

const HomeScreen = ({ navigation, route }) => {
  Keyboard.dismiss();

  const nick = route.params?.nick ?? "user";

  return (
    <View style={styles.statusBar}>
      <StatusBar backgroundColor={"#f5f1e9"} translucent />
      <View style={styles.block}>
        <Text style={styles.text}>Bem vindo, {nick}! </Text>
      </View>
      <View style={styles.buttonLabel}>
        <View style={styles.row}>
          <TouchableOpacity
            onPress={() => navigation.navigate("Tab", { screen: "Register" })}
            style={[styles.button, styles.topLeftButton]}
          >
            <Icon name="file-text" size={40} />
            <Text style={styles.textButton}>Cadastro</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("Tab", { screen: "Families" })}
            style={[styles.button, styles.bottomLeftButton]}
          >
            <Icon name="users" size={40} />
            <Text style={styles.textButton}>Famílias</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            onPress={() => navigation.navigate("Tab", { screen: "Groups" })}
            style={[styles.button, styles.topRightButton]}
          >
            <Icon name="clipboard" size={40} />
            <Text style={styles.textButton}>Grupos</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("Tab", { screen: "Settings" })}
            style={[styles.button, styles.bottomRightButton]}
          >
            <FontAwesome5 name="user-circle" size={40} />
            <Text style={styles.textButton}>Conta</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ flex: 1 }}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  statusBar: {
    flex: 1,
    backgroundColor: "#f5f1e9",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    marginTop: "25%",
    fontSize: 30,
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase",
    color: "#575757",
  },
  buttonLabel: {
    width: "100%",
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    width: 150,
    height: 150,
    margin: 3,
    backgroundColor: "green",
  },
  block: {
    flex: 1,
    alignItems: "center",
  },
  topLeftButton: {
    backgroundColor: "#bd786e",
    borderBottomLeftRadius: 200,
    borderTopRightRadius: 130,
    borderBottomRightRadius: 50,
  },
  topRightButton: {
    backgroundColor: "#DAA66C",
    borderBottomRightRadius: 200,
    borderTopLeftRadius: 130,
    borderBottomLeftRadius: 50,
  },
  bottomLeftButton: {
    backgroundColor: "#ABC1CE",
    borderTopLeftRadius: 200,
    borderBottomRightRadius: 130,
    borderTopRightRadius: 50,
  },
  bottomRightButton: {
    backgroundColor: "#758279",
    borderTopRightRadius: 200,
    borderBottomLeftRadius: 130,
    borderTopLeftRadius: 50,
  },
  textButton: {
    fontSize: 20,
  },
});

export default HomeScreen;
