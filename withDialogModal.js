import React from "react";
import { DialogConsumer } from ".";

export function withDialogModal(Component) {
  return function WrapperComponent(props) {
    return (
      <DialogConsumer>
        {context => (
          <Component
            {...props}
            showDialog={context.showDialog}
            closeDialog={context.closeDialog}
          />
        )}
      </DialogConsumer>
    );
  };
}
