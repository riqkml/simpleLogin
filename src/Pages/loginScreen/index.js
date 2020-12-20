import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  Image,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { iconLogo } from "../../Assets";
import { Button, Gap, Input, Link } from "../../Component";
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
export default class loginScreen extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { navigation } = this.props;
    const routeLogin = () => {
      navigation.navigate("Register");
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
                Please login with a registered account
              </Text>
            </View>
            <View style={styles.bottomSide}>
              <Input icon="user" sizeIcon={33} label="Username / Email" />
              <Gap height={height * 0.01} />
              <Input
                icon="key"
                label="Password"
                sizeIcon={25}
                secure
                isPassword
              />
              <Gap height={20} />
              <Button label="Login" margin={20} />
            </View>
            <View style={styles.linkSide}>
              <Link title="Forgot Password ? " link="Reset Password" />
              <Link
                title="Don't have an account ? "
                link="Sign Up"
                click={routeLogin}
              />
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  linkMainLabel: { fontSize: 14 },
  page: {
    flex: 1,
    backgroundColor: "white",
    paddingHorizontal: 20,
    justifyContent: "center",
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: "center",
  },
  topSide: {
    alignItems: "center",
    paddingVertical: 20,
    paddingBottom: 40,
  },
  logoImg: { width: width * 0.3, height: height * 0.3 },
  label: { fontSize: 16, fontWeight: "bold" },
  subLabel: { fontSize: 16 },
  linkSide: {
    marginVertical: 60,
  },
});
