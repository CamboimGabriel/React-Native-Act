import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { Checkbox } from "react-native-paper";

const MultipleCheckBox = ({
  title,
  data,
  style,
  value,
  onSelectionChange,
  errors,
  touched,
}) => {
  const [state, setState] = useState({ checkboxes: data });

  const onchecked = (id) => {
    const values = state.checkboxes;
    const index = values.findIndex((item) => item.id === id);
    values[index].checked =
      values[index].checked === "checked" ? "unchecked" : "checked";

    setState({ checkboxes: values });

    const keys = values.map((item) => item.key);
    const checks = values.map((item) => item.checked);
    let selecteds = [];

    for (let i = 0; i < checks.length; i++) {
      if (checks[i] === "checked") {
        selecteds.push(keys[i]);
      }
    }

    onSelectionChange(selecteds);
  };

  useEffect(() => {
    if (value) {
      const checkboxes = state.checkboxes.map((item) =>
        value.find((el) => el === item.key)
          ? { ...item, checked: "checked" }
          : item
      );
      setState({ checkboxes });
    }
  }, []);

  return (
    <View style={style}>
      <Text
        style={{
          fontWeight: "bold",
          padding: 10,
          textTransform: "uppercase",
        }}
      >
        {title}
      </Text>
      <Text
        style={{
          textTransform: "uppercase",
          paddingLeft: 10,
        }}
      >
        (Marcar todas que se aplicarem)
      </Text>

      {state.checkboxes.map((item, key) => {
        return (
          <TouchableOpacity
            key={key}
            style={{ flexDirection: "row", alignItems: "center", margin: 3 }}
            onPress={() => onchecked(item.id)}
          >
            <Checkbox
              status={item.checked}
              onPress={() => {
                onchecked(item.id);
              }}
            />
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

export default MultipleCheckBox;
