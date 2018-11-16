import React,{PureComponent} from 'react'
import MajorPanel from '../../components/Panel/'
import CAForm from '../../components/Form'
// import Upload from '../../components/Upload/UploadTest.js'
import Upload from '../../components/Upload'
import {
     Button,
   } from 'reactstrap';
export default class FormData extends PureComponent {
     render(){
          return(
            <div>
                 <h1> CA</h1>
                <MajorPanel headerPanel="CA Form">
                    <CAForm />
                </MajorPanel>
                <MajorPanel headerPanel ="เอกสาร">
                    <Upload/>
                </MajorPanel>
                <Button type="submit" size="sm" color="primary"><i className="fa fa-dot-circle-o"></i> Submit</Button>
                <Button type="reset" size="sm" color="danger"><i className="fa fa-ban"></i> Reset</Button>
            </div>
          )
     }
}