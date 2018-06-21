import React, {Component} from 'react';
import {Input, Row, Form, Button} from 'antd';
import { connect } from 'react-redux';
import uuid from 'uuid';

import { actions } from './../../store/Calls/actions';
import {formatPhone} from "../../common/utils";

const mapDispatchToProps = (dispatch, ownProps) => ({
    addCall: todo => dispatch(actions.calls.add(todo))
});

const styles = {
    formFooter: {
        marginTop: '20px',
        textAlign: 'right'
    },
    controlsContainer: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    lastControl: {
      marginRight: 0
    },
    resetBtnStyles: {
        marginLeft: '10px'
    }
};



class CreateCall extends Component {
    handleSubmit = (e) => {
        e.preventDefault();

        this.props.form.validateFieldsAndScroll((err, values) => {
            if (err) {
                return;
            }

            this.props.addCall({...values, id: uuid(), phone: formatPhone(values.phone)});
            this.props.form.resetFields();
        });
    };

    handleReset = () => {
        this.props.form.resetFields();
    };

    render() {
        const {getFieldDecorator} = this.props.form;

        return (
            <Form layout="inline" onSubmit={this.handleSubmit}>
                <div style={styles.controlsContainer}>
                    <Form.Item>
                        {getFieldDecorator('name', {
                            rules: [
                                {required: true, message: 'Please enter a name!'},
                                {max: 30, message: 'Max length of the  name is 30 chars!'}]
                        })(
                            <Input placeholder="Name"/>
                        )}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('phone', {
                            rules: [
                                {required: true, message: 'Please enter a phone number!'},
                                {pattern: /^\s*(?:00|\+)+\s*([-. (]*(\d{3})[-. )]*)\s*((\d{3})\s*){1,3}$/, message: 'Please enter valid phone!'}
                            ]

                        })(
                            <Input placeholder="Phone number"/>
                        )}
                    </Form.Item>
                    <Form.Item style={styles.lastControl}>
                        {getFieldDecorator('time', {
                            rules: [
                                {required: true, message: 'Please enter a time!'},
                                {pattern: /^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/, message: 'Please enter valid time!'}]
                        })(
                            <Input placeholder="Time (hh:mm)"/>
                        )}
                    </Form.Item>
                </div>
                <Row style={styles.formFooter}>
                    <Button type="primary" htmlType="submit">Add</Button>
                    <Button htmlType="button" style={styles.resetBtnStyles} onClick={this.handleReset}>Reset</Button>
                </Row>
            </Form>

        );
    }
}

export const WrappedCreateCall = Form.create()(CreateCall);

export const CreateCallContainer = connect(
    null,
    mapDispatchToProps
)(WrappedCreateCall);