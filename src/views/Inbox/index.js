import React, {PureComponent} from 'react'
// import { Table } from 'antd';
import Button from 'antd/lib/button';
// import { Collapse } from 'antd';
import GTable from '../../components/Table/'
const columns = [{
  title: 'Name',
  dataIndex: 'name',
  render: text => <a href="javascript:;">{text}</a>,
}, {
  title: 'Cash Assets',
  className: 'column-money',
  dataIndex: 'money',
}, {
  title: 'Address',
  dataIndex: 'address',
},{
  title: 'action',
  dataIndex: 'action',
  render: () =><span><Button>delete</Button><Button>delete</Button></span>,
}];
const data = [{
  key: '1',
  name: 'John Brown',
  money: '￥300,000.00',
  address: 'New York No. 1 Lake Park',
}, {
  key: '2',
  name: 'Jim Green',
  money: '￥1,256,000.00',
  address: 'London No. 1 Lake Park',
}, {
  key: '3',
  name: 'Joe Black',
  money: '￥120,000.00',
  address: 'Sidney No. 1 Lake Park',
}];

export default class inbox extends PureComponent {
 render(){
      return(
        <div>
        <GTable columns={columns} data={data} />       
        </div>
      )
 }
} 