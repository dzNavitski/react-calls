import React, {Fragment} from 'react';
import {connect} from 'react-redux';
import {Card} from 'antd';
import {nextCallSelector} from "../../store/Calls/selectors";
import PropTypes from "prop-types";

const mapStateToProps = (state, ownProps) => {
    return {
        call: nextCallSelector(state)
    }
};

const NextCallComponent = ({call}) => {
    if (call) {
        return (
            <Card title={call.name} bordered={true}>
                <p>Phone: <Fragment>{call.phone}</Fragment></p>
                <p>Time: <Fragment>{call.time}</Fragment></p>
            </Card>
        );
    }

    return <div>No next call</div>

};

NextCallComponent.propTypes = {
    call: PropTypes.object.isRequired
};

export const NextCall = connect(mapStateToProps, null)(NextCallComponent);