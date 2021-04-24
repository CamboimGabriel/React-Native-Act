import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { Checkbox } from "react-native-paper";

const MultipleCheckBoxSingle = ({
  title,
  data,
  style,
  value,
  onSelectionChange,
  errors,
  touched,
  right,
  left,
}) => {
  const [state, setState] = useState({ checkboxes: data });

  const onchecked = (id) => {
    const values = state.checkboxes.map((item) => {
      if (item.id === id) {
        return { ...item, checked: "checked" };
      } else return { ...item, checked: "unchecked" };
    });

    setState({ checkboxes: values });
    onSelectionChange(id);
  };

  useEffect(() => {
    if (value) {
      const checkboxes = state.checkboxes.map((item) =>
        item.id === value ? { ...item, checked: "checked" } : item
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
          alignSelf: "center",
        }}
      >
        {title}
      </Text>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text
          style={{
            width: 80,
            textTransform: "uppercase",
            paddingLeft: 10,
            flexWrap: "wrap",
          }}
        >
          {left}
        </Text>

        {state.checkboxes.map((item, key) => {
          return (
            <TouchableOpacity
              key={key}
              style={{
                flexDirection: "column",
                alignItems: "center",
                margin: 3,
              }}
              onPress={() => onchecked(item.id)}
            >
              <Text>{item.key}</Text>
              <Checkbox
                status={item.checked}
                onPress={() => {
                  onchecked(item.id);
                }}
              />
            </TouchableOpacity>
          );
        })}

        <Text
          style={{
            width: 80,
            textTransform: "uppercase",
            paddingLeft: 10,
            flexWrap: "wrap",
          }}
        >
          {right}
        </Text>
      </View>

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

export default MultipleCheckBoxSingle;
