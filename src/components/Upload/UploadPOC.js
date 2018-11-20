import React,{PureComponent,Fragment} from 'react'
import { Upload, Button, Icon,message } from 'antd';
const dummyRequest = ({ file, onSuccess }) => {
    setTimeout(() => {
      onSuccess("ok");
    }, 0);
  };
  
export default class UploadPOC extends PureComponent {
    state = {
        fileList: []
      }

      handleChange = (info) => {
        if (info.file.status !== "uploading") {
            const {fileUpload} = this.props
            let fileList  = info.fileList
            this.setState({fileList})
            fileUpload(this.state.fileList)
          }
          if (info.file.status === "done") {
            message.success(`${info.file.name} file uploaded successfully`);
          } else if (info.file.status === "error") {
            message.error(`${info.file.name} file upload failed.`);
          }
        }    
      beforeUpload = () =>{
  
      }
      handleRemove = (file) => {
        this.setState(({ fileList }) => {
          const index = fileList.indexOf(file)
          const newFileList = fileList.slice()
          return {
            fileList: newFileList,
          }
        })
        console.log("filelist",this.state.fileList)
      }
     render(){
        const props = {
            action: 'http://localhost:5000/api/Attachment/Upload',
            onChange: this.handleChange,
            onRemove: this.handleRemove,
            beforeUpload: this.beforeUpload,
            listType: 'picture',
            multiple: true,
          };
          return(
              <Fragment>
                {/* <Upload {...props} fileList={this.state.fileList}> */}
                <Upload {...props} customRequest={dummyRequest}>
                    <Button>
                    <Icon type="upload" /> Upload
                    </Button>
                </Upload>
              </Fragment>
          )
     }
}