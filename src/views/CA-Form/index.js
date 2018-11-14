import React,{PureComponent} from 'react'
import MajorPanel from '../../components/Panel/'
import CAForm from '../../components/Form'
export default class FormData extends PureComponent {
     render(){
          return(
            <div>
                <MajorPanel>
               <CAForm />
                </MajorPanel>
            </div>
          )
     }
}