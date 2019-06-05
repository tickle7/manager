import React from 'react'
import { Card, Tabs, message, Button } from 'antd';
const { TabPane } = Tabs;
export default class Tabs1 extends React.Component {
    constructor(props) {
        super(props);
        this.newTabIndex = 0;
        const panes = [
            { title: 'Tab 1', content: 'Content of Tab Pane 1', key: '1' },
            { title: 'Tab 2', content: 'Content of Tab Pane 2', key: '2' },
        ];
        this.state = {
            activeKey: panes[0].key,
            panes,
        };
    }
    callback = (key) => {
        message.info('点击的key：' + key)
    }
    onChange = activeKey => {
        this.setState({ activeKey });
    };

    onEdit = (targetKey, action) => {
        this[action](targetKey);
    };
    add = () => {
        const panes = this.state.panes;
        const activeKey = `newTab${this.newTabIndex++}`;
        panes.push({ title: 'New Tab', content: 'New Tab Pane', key: activeKey });
        this.setState({ panes, activeKey });
    };
    remove = targetKey => {
        let activeKey = this.state.activeKey;
        let lastIndex;
        this.state.panes.forEach((pane, i) => {
            if (pane.key === targetKey) {
                lastIndex = i - 1;
            }
        });
        const panes = this.state.panes.filter(pane => pane.key !== targetKey);
        if (panes.length && activeKey === targetKey) {
            if (lastIndex >= 0) {
                activeKey = panes[lastIndex].key;
            } else {
                activeKey = panes[0].key;
            }
        }
        this.setState({ panes, activeKey });
    };
    render() {
        return (
            <div>
                <Card title="选中第一项，禁用某一项">
                    <Tabs defaultActiveKey="1" onChange={this.callback}>
                        <TabPane tab="Tab 1" key="1">
                            Tab 1
                        </TabPane>
                        <TabPane tab="Tab 2" disabled key="2">
                            Tab 2
                        </TabPane>
                        <TabPane tab="Tab 3" key="3">
                            Tab 3
                        </TabPane>
                    </Tabs>
                </Card>
                <hr />
                <div style={{ marginBottom: 16 }}>
                    <Button onClick={this.add}>ADD</Button>
                </div>
                <Tabs
                    hideAdd
                    onChange={this.onChange}
                    activeKey={this.state.activeKey}
                    type="editable-card"
                    onEdit={this.onEdit}>
                    {this.state.panes.map(pane => (
                        <TabPane tab={pane.title} key={pane.key}>
                            {pane.content}
                        </TabPane>
                    ))}
                </Tabs>
            </div>
        );
    }
}