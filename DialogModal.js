import React from "react";
import {
  Animated,
  StyleSheet,
  TouchableWithoutFeedback,
  View
} from "react-native";

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  },
  modal: {
    backgroundColor: "#fafbfc",
    // paddingHorizontal: 20
    marginHorizontal: 10
  }
});

export const DialogContext = React.createContext({});

export const DialogConsumer = DialogContext.Consumer;

const initialState = {
  visible: false,
  component: null
};

export class DialogProvider extends React.Component {
  state = initialState;

  animatedValue = new Animated.Value(0);

  showDialog = (component, style) => {
    // alert('alert');
    this.component = component;
    this.setState(
      {
        visible: true,
        style
      },
      () => {
        Animated.timing(this.animatedValue, {
          toValue: 1,
          useNativeDriver: true,
          duration: 150
        }).start();
      }
    );
  };

  closeDialog = () => {
    Animated.timing(this.animatedValue, {
      toValue: 0,
      useNativeDriver: true,
      duration: 150
    }).start(() => {
      this.setState({ ...initialState });
    });
  };

  renderModal = () => {
    const modalStyles = [
      styles.modal,
      this.state.style,
      {
        opacity: this.animatedValue,
        transform: [
          {
            scale: this.animatedValue.interpolate({
              inputRange: [0, 1],
              outputRange: [0.5, 1]
            })
          }
        ]
      }
    ];
    return (
      <TouchableWithoutFeedback onPress={this.closeDialog}>
        <View style={styles.modalContainer}>
          <TouchableWithoutFeedback>
            <Animated.View style={modalStyles}>{this.component}</Animated.View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    );
  };

  render() {
    const { visible } = this.state;

    return (
      <DialogContext.Provider
        value={{ showDialog: this.showDialog, closeDialog: this.closeDialog }}
      >
        {this.props.children}
        {visible && this.renderModal()}
      </DialogContext.Provider>
    );
  }
}
