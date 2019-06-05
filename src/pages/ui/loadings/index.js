import React from 'react'
import { Spin , Alert, Icon } from 'antd';
export default class Loadings extends React.Component {
    constructor() {
        super()
        this.state = {
            
        };
    }
    render() {
        return (
            <div>
                <Spin size="small" />
                <Spin indicator={<Icon type="loading" style={{ fontSize: 24 }} />} />
                <Spin type="loading" />
                <Spin size="large" />
                <Alert
                    message="Alert message title"
                    description="Further details about the context of this alert."
                    type="warning"
                    />
                <Spin tip="Loading...">
                <Alert
                    message="Alert message title"
                    description="Further details about the context of this alert."
                    type="info"
                    />
                </Spin>
            </div>
        );
    }
}