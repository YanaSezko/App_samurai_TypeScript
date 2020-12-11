import { connect } from "react-redux";
import {
    sendMessageActionCreator, updateNewMessageBodyActionCreator
} from "../../redux/dialogs-reducer";
import { AppStateType } from "../../redux/redux-store";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import Dialogs from "./Dialogs";
import { compose } from "redux";



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

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)
