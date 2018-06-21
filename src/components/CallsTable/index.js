import React, {Component} from 'react';
import {Table, Checkbox} from 'antd';
import {connect} from 'react-redux';
import {callEntitiesFilteredSelector, sorterSelector} from "../../store/Calls/selectors";
import {DeleteCallBtn} from "../RemoveCallBtn";
import {actions} from "../../store/Calls/actions";


const mapStateToProps = (state, ownProps) => {
    return {
        calls: callEntitiesFilteredSelector(state),
        sorter: sorterSelector(state)
    }
};

const mapDispatchToProps = (dispatch, ownProps) => ({
    sort: todo => dispatch(actions.calls.sort(todo))
});

export class CallsTable extends Component {
    handleChange = (pagination, filters, sorter) => {
        const {columnKey, field, order} = sorter;
        this.props.sort({columnKey, field, order});
    };

    render() {
        const { sorter } = this.props;
        const columns = [{
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            sorter: true,
            sortOrder: sorter.columnKey === 'name' && sorter.order
        }, {
            title: 'Phone',
            dataIndex: 'phone',
            key: 'phone'
        }, {
            title: 'Time',
            dataIndex: 'time',
            key: 'time',
            sorter: true,
            sortOrder: sorter.columnKey === 'time' && sorter.order
        }, {
            title: 'Actions',
            render: record => <DeleteCallBtn entityId={record.id}/>
        }, {
            title: 'Finished',
            render: record => <Checkbox defaultChecked={record.finished} disabled />
        }];

        return (
            <Table
                dataSource={this.props.calls}
                columns={columns}
                rowKey={record => record.id}
                onChange={this.handleChange}/>
        );
    };
}

export const CallsTableContainer = connect(mapStateToProps, mapDispatchToProps)(CallsTable);