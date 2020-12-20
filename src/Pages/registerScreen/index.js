import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  Image,
  Dimensions,
  ScrollView,
} from "react-native";
import { iconLogo } from "../../Assets";
import { Button, Gap, Input, Link } from "../../Component";
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

export default class registerScreen extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { navigation } = this.props;
    const routeRegister = () => {
      navigation.navigate("Login");
    };
    return (
      <View style={styles.page}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.container}>
            <View style={styles.topSide}>
              <Image source={iconLogo} style={styles.logoImg} />
              <Text style={styles.label}>Salt Academy App</Text>
              <Gap height={15} />
              <Text style={styles.subLabel}>
                Please register with valid data
              </Text>
            </View>
            <View>
              <Input icon="user" sizeIcon={30} label="Fullname" isBorder />
              <Input icon="user" sizeIcon={30} label="Username" isBorder />
              <Input icon="envelope" sizeIcon={22} label="Email" isBorder />
              <Input
                icon="key"
                sizeIcon={22}
                label="Password"
                secure
                isPassword
                isBorder
              />
              <Input
                icon="key"
                sizeIcon={22}
                label="Confirm Password"
                secure
                isPassword
                isBorder
              />
              <Gap height={20} />
              <Button label="Register" />
            </View>
            <View style={styles.linkSide}>
              <Link title="Forgot Password ? " link="Reset Password" />
              <Link
                title="Already have an account ?"
                link=" Sign In"
                click={routeRegister}
              />
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  label: { fontSize: 16, fontWeight: "bold" },
  logoImg: { width: width * 0.25, height: height * 0.25 },
  subLabel: { fontSize: 16 },
  topSide: { alignItems: "center", paddingBottom: 15 },
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
    marginBottom: 40,
  },
  page: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  linkLabel: { color: "#2F3B8F", fontWeight: "600", fontSize: 16 },
  linkMainLabel: { fontSize: 14 },
  linkSide: { marginTop: 30 },
});
