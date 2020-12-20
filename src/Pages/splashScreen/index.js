import React, { Component } from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import { iconLogo } from "../../Assets";

export default class splashScreen extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this._route();
  }
  _route() {
    setTimeout(() => {
      this.props.navigation.replace("Login");
    }, 2000);
  }
  render() {
    return (
      <View style={styles.page}>
        <View style={styles.container}>
          <View>
            <Image source={iconLogo} />
          </View>
          <View>
            <Text style={styles.label}>Salt Academy App</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  label: { fontSize: 18, letterSpacing: 1, fontWeight: "bold" },
  page: { flex: 1, backgroundColor: "white" },
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
});
