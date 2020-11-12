import { connect } from "react-redux";
import {
    sendMessageActionCreator, updateNewMessageBodyActionCreator
} from "../../redux/dialogs-reducer";
import { AppStateType } from "../../redux/redux-store";
import Dialogs from "./Dialogs";


let mapStateToProps = (state: AppStateType) => {
    return {
        dialogPage: state.dialogPage
    }
}
let mapDispatchToProps = (dispatch: any) => {
    return {
        updateNewMessageBody: (body: any) => {
            dispatch(updateNewMessageBodyActionCreator(body))
        },
        sendMessage: () => {
            dispatch(sendMessageActionCreator())
        }

    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer