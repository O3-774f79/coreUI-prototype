import React,{PureComponent} from 'react'
import MajorPanel from '../../components/Panel/'
import CAForm from '../../components/Form'
import Upload from '../../components/Upload'
export default class FormData extends PureComponent {
     render(){
          return(
            <div>
                <MajorPanel>
                    <CAForm />
                </MajorPanel>
                <MajorPanel>
                    <Upload/>
                </MajorPanel>
            </div>
          )
     }
}