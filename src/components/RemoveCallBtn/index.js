import React from 'react';
import {Button} from 'antd';
import {connect} from 'react-redux';
import {actions} from "../../store/Calls/actions";
import PropTypes from "prop-types";

const mapDispatchToProps = (dispatch, ownProps) => ({
    deleteCall: _ => dispatch(actions.calls.delete(ownProps.entityId))
});

const Btn = ({entityId, deleteCall}) => {
    return (<Button onClick={deleteCall}>Delete</Button>);
};

Btn.propTypes = {
    entityId: PropTypes.string.isRequired,
    deleteCall: PropTypes.func.isRequired
};

export const DeleteCallBtn = connect(null, mapDispatchToProps)(Btn);