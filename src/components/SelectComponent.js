import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const Select = ({
  style,
  errors,
  touched,
  title,
  data,
  styleTitle,
  onSelectionChange,
}) => {
  const [state, setState] = useState({ checkboxes: data });

  const onchecked = (id) => {
    const values = state.checkboxes;
    const index = values.findIndex((item) => item.id === id);

    if (values[index].checked === false) {
      for (let i = 0; i < values.length; i++) {
        if (i === index) {
          values[i].checked = true;
        } else {
          values[i].checked = false;
        }
      }

      setState({ checkboxes: values });
    }

    const selecteds = state.checkboxes.find((item) => item.checked === true);

    onSelectionChange(selecteds.key);
  };

  return (
    <View style={style}>
      {styleTitle === undefined ? (
        <Text
          style={{
            fontWeight: "bold",
            padding: 10,
            textTransform: "uppercase",
          }}
        >
          {title}
        </Text>
      ) : (
        <Text style={styleTitle}>{title}</Text>
      )}

      <Text
        style={{
          alignSelf: "center",
          textTransform: "uppercase",
        }}
      ></Text>

      {state.checkboxes.map((item, key) => {
        return item.checked === true ? (
          <TouchableOpacity
            key={key}
            style={styles.checked}
            onPress={() => onchecked(item.id)}
          >
            <Text>{item.key}</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            key={key}
            style={styles.unchecked}
            onPress={() => onchecked(item.id)}
          >
            <Text>{item.key}</Text>
          </TouchableOpacity>
        );
      })}

      {errors && touched && (
        <Text
          style={{
            fontSize: 14,
            color: "red",
            alignSelf: "center",
          }}
        >
          {errors}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  checked: {
    paddingLeft: 5,
    padding: 4,
    borderWidth: 1,
    borderColor: "blue",
    flexDirection: "row",
    alignItems: "center",
    margin: 5,
    borderRadius: 5,
    backgroundColor: "#d1e0ff",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  unchecked: {
    paddingLeft: 5,
    padding: 4,
    borderWidth: 1,
    borderColor: "grey",
    flexDirection: "row",
    alignItems: "center",
    margin: 3,
    borderRadius: 5,
    // backgroundColor: "grey",
  },
});

export default Select;
