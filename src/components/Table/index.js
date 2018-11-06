import React,{PureComponent} from 'react'
import { Table } from 'antd';
import { Collapse } from 'antd';
const Panel = Collapse.Panel;
export default class GTable extends PureComponent {
     render(){
        const {columns,data} = this.props
        return (
            <React.Fragment>
            <Collapse bordered={true} defaultActiveKey={['1']}>
            <Panel header="Inbox" key="1" showArrow={false} style={{fontSize:30}}> 
            <div>
               <Table
                 columns={columns}
                 dataSource={data}
                 bordered
                 // title={() => 'Header'}
                 // footer={() => 'Footer'}
               />
             </div>
               </Panel>
               </Collapse>
           </React.Fragment>
        )
     }
}