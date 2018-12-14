# Project Title

Show modal in react native apps without using Modal component.

## Installing

`npm i dialog-modal --save`
OR
`yarn add dialog-modal`

## Usage

You have to import `DialogProvider` from `dialog-modal` and wrap the root screen (App.js) with it such as:

```
import { DialogProvider } from "dialog-modal";

export default class App extends Component {
render() {
    return(
        DialogProvider>
            <Main />
        </DialogProvider>
    );
}

}
```

Now you can import `withDialogModal` in any screen and use method like `showDialog()` and `closeDialog()` to show and close modal.

Look at the example below.

```
import { withDialogModal } from "dialog-modal";

class Home extends Component {

    openDialog = () => {
        this.props.showDialog(
            <View>
                <Button title="Close" onPress={()=>this.props.closeDialog()} />
            </View>
        )
    }

    render() {
        return (
            <Button title="Open Dialog" onPress={() => this.openDialog()} />
        )
    }
}

export default withDialogModal(Home)
```

## Authors

- **Roshan Gautam** - (https://github.com/roshangm1)

## License

This project is licensed under the MIT License.

## Acknowledgments

- Inspired by GlobalAlert tutorial by HandlebarLabs (Spencer Carli)
  https://learn.handlebarlabs.com/

## TODO

- Provide custom theming for modal.
