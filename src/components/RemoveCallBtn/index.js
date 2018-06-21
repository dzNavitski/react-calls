import React from 'react';
import {Button} from 'antd';
import {connect} from 'react-redux';
import {actions} from "../../store/Calls/actions";

const mapDispatchToProps = (dispatch, ownProps) => ({
    deleteCall: _ => dispatch(actions.calls.delete(ownProps.entityId))
});

const Btn = ({entityId, deleteCall}) => {
    return (<Button onClick={deleteCall}>Delete</Button>);
};

export const DeleteCallBtn = connect(null, mapDispatchToProps)(Btn);