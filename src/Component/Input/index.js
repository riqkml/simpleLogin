import React, { Component } from "react";
import { Text, StyleSheet, View, TextInput } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/FontAwesome";
import ShowPassword from "./ShowPassword";
export default class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLook: true,
      border: "black",
    };
  }

  render() {
    const { isLook, border } = this.state;
    const { icon, sizeIcon, label, isBorder, isPassword, secure } = this.props;
    const onFocusForm = () => {
      this.setState({
        border: "blue",
      });
    };
    const onBlurForm = () => {
      this.setState({
        border: "black",
      });
    };
    return (
      <View>
        <View style={styles.input(isBorder, border)}>
          <View style={styles.iconSection}>
            <Icon color="#495057" size={sizeIcon} name={icon} />
          </View>
          <View style={styles.inputSection}>
            <TextInput
              placeholder={label}
              onBlur={onBlurForm}
              onFocus={onFocusForm}
              secureTextEntry={secure && isLook}
              style={styles.textInput}
            />
          </View>
          {isPassword && (
            <ShowPassword
              isLook={isLook}
              onClick={() => this.setState({ isLook: !this.state.isLook })}
            />
          )}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  input: (isBorder, border) => ({
    borderColor: border,
    borderBottomWidth: 0.5,
    flexDirection: "row",
    borderWidth: isBorder ? 0.5 : 0,
    marginBottom: 10,
    borderRadius: isBorder ? 5 : 0,
  }),
  iconSection: { padding: 10 },
  inputSection: { flex: 1 },
  textInput: { marginLeft: 5 },
});
