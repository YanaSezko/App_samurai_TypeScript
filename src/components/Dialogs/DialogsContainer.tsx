import { connect } from "react-redux";
import {
    sendMessageActionCreator
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
        sendMessage: (newMessageBody:string) => {
            dispatch(sendMessageActionCreator(newMessageBody))
        }

    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)
