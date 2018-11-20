import React,{PureComponent,Fragment} from 'react'
import { Upload, Button, Icon,message } from 'antd';
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
    //   beforeUpload = (file, fileList) =>{
    //        console.log("beforupload")
    //        console.log(file)
    //        console.log(fileList)
    //   }
      handleRemove = (file) => {
          console.log("file",file)
        this.setState(({ fileList }) => {
            console.log("filelist",fileList)
          const index = fileList.indexOf(file)
          console.log("index",index)
          const newFileList = fileList.slice()
          console.log("newFileList",newFileList)
          console.log("in function",newFileList.splice(index, 1))
          return {
            fileList: newFileList,
          }
        })
        console.log(this.state.fileList)
      }
     render(){
        const props = {
            action: '//jsonplaceholder.typicode.com/posts/',
            onChange: this.handleChange,
            onRemove: this.handleRemove,
            beforeUpload: this.beforeUpload,
            listType: 'picture',
            multiple: true,
          };
          return(
              <Fragment>
                {/* <Upload {...props} fileList={this.state.fileList}> */}
                <Upload {...props}>
                    <Button>
                    <Icon type="upload" /> Upload
                    </Button>
                </Upload>
              </Fragment>
          )
     }
}