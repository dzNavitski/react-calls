import React, {Component} from 'react';
import {Row, Col} from 'antd';
import {CreateCallContainer} from "./components/CreateCall";
import {CallsTableContainer} from "./components/CallsTable";
import {StatusSwitcherContainer} from "./components/StatusSwitcher";
import {NextCall} from "./components/NextCall";

const styles = {
    container: {
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '40px 20px'
    },
    tableContainer: {
        marginTop: '40px'
    },
    statusContainer: {
        marginTop: '20px'
    },
    nextCallContainer: {
        paddingRight: '40px'
    }
};

class App extends Component {
    render() {
        return (
            <Row style={styles.container}>
                <Col span={12} style={styles.nextCallContainer}>
                    <NextCall />
                </Col>
                <Col span={12}>
                    <Row span={24}>
                        <CreateCallContainer />
                    </Row>
                    <Row style={styles.tableContainer} span={24}>
                        <CallsTableContainer />
                    </Row>
                    <Row style={styles.statusContainer}>
                        <StatusSwitcherContainer />
                    </Row>
                </Col>
            </Row>

        );
    }
}

export default App;
