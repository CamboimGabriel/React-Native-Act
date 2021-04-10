import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";

const CustomInput = ({ error, touched, ...restProps }) => {
  const myRef = React.useRef();

  return (
    <>
      <TextInput ref={myRef} {...restProps} />
      {error && touched ? (
        <Text
          style={{
            fontSize: 14,
            color: "red",
            alignSelf: "center",
          }}
        >
          {error}
        </Text>
      ) : (
        <></>
      )}
    </>
  );
};

export default CustomInput;
