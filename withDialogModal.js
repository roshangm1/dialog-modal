import React from "react";
import { DialogConsumer } from ".";

export function withDialogModal(Component) {
  return class WrapperComponent extends React.Component {
    render() {
      return (
        <DialogConsumer>
          {context => (
            <Component
              {...this.props}
              showDialog={context.showDialog}
              closeDialog={context.closeDialog}
            />
          )}
        </DialogConsumer>
      );
    }
  };
}
