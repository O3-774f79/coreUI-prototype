import React,{PureComponent} from 'react'
import { Upload, Button, Icon, message } from 'antd';
import axios from 'axios';
export default class FormDataControl extends PureComponent {
    state = {
        fileList: [],
        testFileList:[],
        uploading: false,
        presentDate: "",
        desFile:[],
        dataForm: {
           firstName: "moo",
           lastName: "555",
        },
        fileUpload: []
      }
      componentWillMount(){
        const d = new Date();
        const datePresent =  d.getDate()+""+(d.getMonth()+1)+""+d.getFullYear()+""+(d.getHours()+1)+""+(d.getMinutes()+1)+""+(d.getSeconds()+1)+""+(d.getMilliseconds()+1)
        this.setState({presentDate: datePresent})
      }
      //todo
      //สั่ง upload จาก component ข้างนอก
      handleUpload =  () => {
        const { fileList,testFileList,desFile,dataForm,presentDate } = this.state
        console.log("fileList"+fileList)
        console.log("testFileList"+ testFileList)
        const formData = new FormData();
          fileList.map( fileName=> {
            const fileNameUse =  presentDate+"|"+fileName.name
             desFile.push({name:fileNameUse})
          })  
          const StringdesFile = JSON.stringify(desFile)
          const StringdataForm =  JSON.stringify(dataForm)
          formData.append('dataFile',StringdesFile)
          console.log("getAllDataFile",formData.getAll('dataFile'))
          formData.append('dataForm',StringdataForm)
        this.setState({
          uploading: true,
        });
        // console.log("getAllDataForm",formData.getAll('dataForm'))
        // You can use any AJAX library you like
        axios({
            method: 'post',
            url: 'http://localhost:5000/api/ca/save',
            data: formData,
            onUploadProgress: progressEvent => {
              console.log(progressEvent.loaded / progressEvent.total)
            }
            })
            .then(response => {
                //handle success
                this.setState({
                    fileList: [],
                    uploading: false,
                  });
                  message.success('upload successfully.');
            })
            .catch(response=> {
                //handle error
                this.setState({
                    uploading: false,
                  });
                  message.error('upload failed.');
            });
      }  
      render() {
        const { uploading } = this.state;
        const props = {
          action: 'http://localhost:5000/api/ca/save',
          onRemove: (file) => {
            this.setState(({ fileList }) => {
              const index = fileList.indexOf(file);
              const newFileList = fileList.slice();
              newFileList.splice(index, 1);
              return {
                fileList: newFileList,
              };
            });
          },
          // onChange: ({fileList })=> {
          //   ({ fileList }) => this.setState({ testFileList })
          // },
          // onChange: info => {
          //   console.log("info"+JSON.stringify(info))
          //   console.log(this.state.fileList)
          // },
          beforeUpload: file => {
            this.setState(({ fileList }) => ({
              fileList: [...fileList, file],
            }));
            return false;
          },
          // fileList: this.state.fileList,
        };
         return(
            <div>
              <Upload {...props}>
                <Button>
                    <Icon type="upload" /> Select File
                </Button>
                </Upload>
                <Button
                    className="upload-demo-start"
                    type="primary"
                    onClick={this.handleUpload}
                    disabled={this.state.fileList.length === 0}
                    loading={uploading}
                    >
                    {uploading ? 'Uploading' : 'Start Upload' }
                </Button>
            </div>
         )
     }
}