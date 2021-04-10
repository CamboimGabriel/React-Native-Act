import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const SegmentControl = ({ func, func2, data }) => {
  const [prev, setPrev] = useState(1);

  return prev === 1 ? (
    <View style={styles.quadrado}>
      <TouchableOpacity
        style={styles.estilo}
        onPress={() => {
          func();
        }}
      >
        <Text>{data[0].title}</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.estilo2}
        onPress={() => {
          setPrev(0);
          func2();
        }}
      >
        <Text>{data[1].title}</Text>
      </TouchableOpacity>
    </View>
  ) : (
    <View style={styles.quadrado}>
      <TouchableOpacity
        style={styles.estilo2}
        onPress={() => {
          setPrev(1);
          func();
        }}
      >
        <Text>{data[0].title}</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.estilo}
        onPress={() => {
          func2();
        }}
      >
        <Text>{data[1].title}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  quadrado: {
    height: 52,
    width: 260,
    backgroundColor: "#EEEEEE",
    borderRadius: 10,
    flexDirection: "row",
    padding: 4,
  },
  estilo: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 9,
  },
  estilo2: {
    backgroundColor: "#EEEEEE",

    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
});

export default SegmentControl;
