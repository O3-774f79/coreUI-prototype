import React,{PureComponent} from 'react'
import MajorPanel from '../../components/Panel/'
import CAForm from '../../components/Form'
import UploadBill from '../../components/Upload/UploadPOC.js'
import { inject, observer } from 'mobx-react';
import axios from 'axios'
import {
     Button,
   } from 'reactstrap';
@inject('formStore')
@observer
export default class FormData extends PureComponent {
     state = {
           fileUploadList: [],
           dataSendFile: [],
           dataSendToService: {}
     }

     _onHandleFileUpload = fileUploadList =>{
          this.setState({fileUploadList})
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
     _debug = ()=> {
           console.log(this.state.dataSend)
     }
     render(){
          console.log(this.state.testIMG)
          return(
            <div>
               <h1> CA</h1>
                <MajorPanel headerPanel="CA Form">
                    <CAForm />
                </MajorPanel>
                <MajorPanel headerPanel ="เอกสาร">
                    <UploadBill fileUpload={this._onHandleFileUpload}/>
                </MajorPanel>
                <Button type="submit" size="sm" color="primary"  onClick={this._onHandleSubmit}><i className="fa fa-dot-circle-o"></i> Submit</Button>
                <Button type="reset" size="sm" color="danger" onClick={this._debug}><i className="fa fa-ban"></i> Reset</Button>
            </div>
          )
     }
} 