import React,{PureComponent} from 'react'
import { Table } from 'antd';
import { Collapse } from 'antd';
const Panel = Collapse.Panel;
export default class BasicTable extends PureComponent {
     render(){
        const {columns,data,headerPanel} = this.props
        return (
            <React.Fragment>
            <Collapse bordered={true} defaultActiveKey={['1']}>
            <Panel header={headerPanel} key="1" showArrow={false} style={{fontSize:30}}> 
            <div>
               <Table
                 columns={columns}
                 dataSource={data}
                 bordered
               />
             </div>
               </Panel>
               </Collapse>
           </React.Fragment>
        )
     }
}