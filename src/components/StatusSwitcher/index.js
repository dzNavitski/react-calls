import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Radio} from 'antd';
import {statusSelector} from "../../store/Calls/selectors";
import {actions} from "../../store/Calls/actions";
import PropTypes from "prop-types";

const mapStateToProps = (state, ownProps) => {
    return {
        status: statusSelector(state)
    }
};

const mapDispatchToProps = (dispatch, ownProps) => ({
    changeStatus: status => dispatch(actions.calls.changeStatus(status))
});

export class StatusSwitcher extends Component {
    handleChange = (e) => {
        this.props.changeStatus(e.target.value);
    };

    render() {
        return (
            <Radio.Group onChange={this.handleChange} value={this.props.status}>
                <Radio.Button value="all">All</Radio.Button>
                <Radio.Button value="next">Next</Radio.Button>
                <Radio.Button value="finished">Finished</Radio.Button>
            </Radio.Group>
        );
    };
}

StatusSwitcher.propTypes = {
    status: PropTypes.string.isRequired,
    changeStatus: PropTypes.func.isRequired
};

export const StatusSwitcherContainer = connect(mapStateToProps, mapDispatchToProps)(StatusSwitcher);