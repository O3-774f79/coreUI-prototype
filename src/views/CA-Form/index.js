import React,{PureComponent} from 'react'
import MajorPanel from '../../components/Panel/'
import CAForm from '../../components/Form'
import UploadBill from '../../components/Upload/UploadPOC.js'
import axios from 'axios'
import {
     Button,
   } from 'reactstrap';
import Table from '../../components/Table/index'
import {Icon} from 'antd'

@observer
export default class FormData extends PureComponent {
     state = {
           fileUploadList: [],
           dataSendFile: [],
           tableLoading: false,
           columns : [{
               title: 'Name',
               dataIndex: 'name',
               key: 'name',
               title: ({ sortOrder, filters }) => <div>header content<span style={{float:"right"}}><Icon type="caret-up"  style={{color:this.state.SortColor}}/><Icon type="caret-down" /></span></div>
             }, {
               title: 'Age',
               dataIndex: 'age',
               key: 'age',
             }, {
               title: 'Address',
               dataIndex: 'address',
               key: 'address',
             }],
           data: [{
               key: '1',
               name: 'Mike',
               age: 32,
               address: '10 Downing Street'
             }, {
               key: '2',
               name: 'John',
               age: 42,
               address: '10 Downing Street'
             }],
          }

     _onHandleFileUpload = fileUploadList =>{
          this.setState({fileUploadList})
     }
     _onHandleClickSortUp = () =>{
          
     }
     _onHandleSubmit = () => {
          const {fileUploadList,dataSendFile} = this.state
          fileUploadList.map(async file => {
              let dataB64 = file.thumbUrl.split(',')[1]
              dataSendFile.push({
                   fileName: file.name,
                   fileSize: file.size,
                   fileBase64: dataB64,
               })
          })
          const config = {
               onUploadProgress: function(progressEvent) {
                 const percentCompleted = Math.round( (progressEvent.loaded * 100) / progressEvent.total );
                 console.log(percentCompleted)
               }
             };
         axios.post("http://localhost:5000/api/Attachment/Upload", dataSendFile,config)
             .then(function (response) {
               console.log('succress axios ->>',response);
             })
             .catch(function (error) {
               console.log('error axios ->.',error);
             });
     }
     _debug =async ()=> {
          await this.setState({tableLoading: true})
          await this.setState({tableLoading: false})
          await this.setState({data:[{
               key: '3',
               name: '5555',
               age: 1,
               address: 'hey'
             }, {
               key: '4',
               name: '6666',
               age: 2,
               address: 'hi'
             }]})
     }
     render(){
          const {tableLoading,columns,data} = this.state
          return(
            <div>
               <h1> CA</h1>
                <MajorPanel headerPanel="CA Form">
                    <CAForm />
                </MajorPanel>
                <MajorPanel headerPanel ="เอกสาร">
                    <UploadBill fileUpload={this._onHandleFileUpload}/>
                </MajorPanel>
                <MajorPanel headerPanel="table">
                    <Table columns={columns} data={data} loadTable={tableLoading}/>
               </MajorPanel>
                <Button type="submit" size="sm" color="primary"  onClick={this._onHandleSubmit}><i className="fa fa-dot-circle-o"></i> Submit</Button>
                <Button type="reset" size="sm" color="danger" onClick={this._debug}><i className="fa fa-ban"></i> Reset</Button>
            </div>
          )
     }
} 