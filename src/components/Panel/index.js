import React,{PureComponent} from 'react' 
import { Collapse } from 'antd';
const Panel = Collapse.Panel;
export default class MajorPanel extends PureComponent {
     render() {
         const {headerPanel,children} = this.props
          return ( 
                   <div style={{marginTop:5}}>
                    <Collapse bordered={true} defaultActiveKey={['1']}>
                    <Panel header={headerPanel} key="1" showArrow={false}>
                    {children}
                    </Panel>
                    </Collapse>
                    </div>
          )
     }
}