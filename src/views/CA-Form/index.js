import React,{PureComponent} from 'react'
import MajorPanel from '../../components/Panel/'
import CAForm from '../../components/Form'
import UploadBill from '../../components/Upload/UploadPOC.js'
import {
     Button,
   } from 'reactstrap';
export default class FormData extends PureComponent {
     state = {
           fileUploadList: [],
           dataSend: []
     }

     _onHandleFileUpload = fileUploadList =>{
          this.setState({fileUploadList})
     }
     _onHandleClick = () => {
          const {fileUploadList,dataSend} = this.state
          fileUploadList.map(file => {
              console.log(file)
              dataSend.push({name: file.name})
          })
     }
     _debug = ()=> {
           console.log(this.state)
     }
     render(){
          return(
            <div>
               <h1> CA</h1>
                <MajorPanel headerPanel="CA Form">
                    <CAForm />
                </MajorPanel>
                <MajorPanel headerPanel ="เอกสาร">
                    <UploadBill fileUpload={this._onHandleFileUpload}/>
                </MajorPanel>
                <Button type="submit" size="sm" color="primary"  onClick={this._onHandleClick}><i className="fa fa-dot-circle-o"></i> Submit</Button>
                <Button type="reset" size="sm" color="danger" onClick={this._debug}><i className="fa fa-ban"></i> Reset</Button>
            </div>
          )
     }
} 