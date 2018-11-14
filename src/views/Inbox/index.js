import React, {PureComponent} from 'react'
import Button from 'antd/lib/button';
import BasicTable from '../../components/Table/BasicTable'
import FormUpload from '../../components/Upload/'
import Data from './data'
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

export default class inbox extends PureComponent {
 render(){
      return(
        <div>
              <BasicTable columns={columns} data={Data.Data} headerPanel="ตาราง"/>      
              <FormUpload  headerPanel="เอกสาร"/> 
        </div>
      )
 }
} 