import React, { Component } from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";

export default class Button extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { onClick, margin, label } = this.props;
    return (
      <TouchableOpacity onPress={onClick} style={styles.Button(margin)}>
        <Text style={styles.Title}>{label}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  Button: (margin) => ({
    backgroundColor: "#2F3B8F",
    padding: 7,
    borderRadius: 15,
    alignItems: "center",
    marginHorizontal: margin ? margin : 0,
  }),
  Title: { color: "white", fontSize: 20, fontWeight: "800" },
});
