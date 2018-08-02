import React, { Component } from "react";
import { StyleSheet, View, TextInput } from "react-native";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.textInput = {};
  }

  focusNextTextInput(id) {
    this.textInput[id].focus();
  }

  render() {
    return (
      <View style={styles.outerContainer}>
        <TextInput
          placeholder="one"
          onSubmitEditing={() => {
            this.focusNextTextInput("two");
          }}
          style={styles.textInput}
          ref={input => {
            this.textInput["one"] = input;
          }}
        />
        <TextInput
          placeholder="two"
          onSubmitEditing={() => {
            this.focusNextTextInput("three");
          }}
          style={styles.textInput}
          ref={input => {
            this.textInput["two"] = input;
          }}
        />
        <TextInput
          placeholder="three"
          onSubmitEditing={() => {
            this.focusNextTextInput("four");
          }}
          style={styles.textInput}
          ref={input => {
            this.textInput["three"] = input;
          }}
        />
        <TextInput
          placeholder="four"
          style={styles.textInput}
          ref={input => {
            this.textInput["four"] = input;
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  outerContainer: {
    alignItems: "center",
    backgroundColor: "#ecf0f1",
    flex: 1,
    flexDirection: "column",
    paddingTop: 40
  },
  textInput: {
    alignSelf: "stretch",
    backgroundColor: "#ffffff",
    height: 50,
    marginBottom: 20,
    marginHorizontal: 10,
    paddingHorizontal: 10
  }
});
