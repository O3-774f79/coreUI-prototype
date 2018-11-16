import React,{PureComponent} from 'react'
import { Upload, Button, Icon, message } from 'antd';
import axios from 'axios';
export default class FormDataControl extends PureComponent {
    state = {
        fileList: [],
        uploading: false,
        desFile: 
              {name:"moo",last:"test"},
      }
      handleUpload = () => {
        const json = JSON.stringify(this.state.desFile)
        const { fileList } = this.state;
        const formData = new FormData();
        fileList.forEach((file) => {
          formData.append('files[]', file);
        });
        formData.append('data',json)
        this.setState({
          uploading: true,
        });
        console.log(formData.getAll('files[]'))
        console.log(formData.getAll('data'))
        console.log("11/16/2018")
        // You can use any AJAX library you like
        axios({
            method: 'post',
            url: 'http://localhost:5000/api/ca/save',
            data: formData,
            config: { headers: {'Content-Type': 'multipart/form-data' }}
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
          action: 'http://localhost:5000/api/attachment/uploadfile',
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
          beforeUpload: file => {
            this.setState(({ fileList }) => ({
              fileList: [...fileList, file],
            }));
            return false;
          },
          fileList: this.state.fileList,
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