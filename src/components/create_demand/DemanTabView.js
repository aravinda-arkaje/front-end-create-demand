import React from 'react';
import { Tabs } from 'antd';
import Product from './product/Product';

const { TabPane } = Tabs;

export default function DemanTabView(props) {

    function callback(key) {
        console.log(key);
    }

    return (
        <div>
            {/* Demand Tab Views */}
            <Tabs defaultActiveKey="1" onChange={callback}>
                <TabPane tab="1 Product" key="1">
                    <Product {...props} />
                </TabPane>
                <TabPane tab="2 Addresses" key="2" disabled>
                    Address Tab
                </TabPane>
                <TabPane tab="3 Overview" key="3" disabled>
                    Overview Tab
                </TabPane>
            </Tabs>
        </div>
    )
}
