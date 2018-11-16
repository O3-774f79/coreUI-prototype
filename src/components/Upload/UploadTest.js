import React,{PureComponent} from "react"
import { Upload, message, Button, Icon } from 'antd';
import axios from 'axios'
function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
}
function _base64ToArrayBuffer(base64) {
  var binary_string =  window.atob(base64);
  var len = binary_string.length;
  var bytes = new Uint8Array( len );
  for (var i = 0; i < len; i++)        {
      bytes[i] = binary_string.charCodeAt(i);
  }
  return bytes.buffer;
}
function beforeUpload(file) {
  const isJPG = file.type === 'image/jpeg';
  if (!isJPG) {
    message.error('You can only upload JPG file!');
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!');
  }
  console.log(file.file)
//   return isJPG && isLt2M;
    return isJPG

}
export default class CAform extends PureComponent {
  state = {
    uploading: false,
    imgEncode: [],
    datalist:true
  };
   handleChange = (info) => {
    if (info.file.status === 'uploading') {
      this.setState({ loading: true });
      return;
    }
    if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully`);
      console.log("555"+info.file.originFileObj)
      console.log("checked",info.file)
      getBase64(info.file.originFileObj, 
        // imageUrl => this.setState({
          imageUrl => this.state.imgEncode.push(imageUrl)
          // imgEncode: imageUrl,
        // loading: false,
        // })
      );
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  }
  handleRemove= (file) => {
    this.setState(({ imgEncode }) => {
      const index = imgEncode.indexOf(file);
      const newFileList = imgEncode.slice();
      newFileList.splice(index, 1);
      return {
        imgEncode: newFileList,
      };
    });
  }
  handleClick = async ()=> {
    console.log("dataencode")
    console.log(this.state.imgEncode)
     }
     render(){
      const uploadButton = (
        <div>
          {/* <Icon type={this.state.loading ? 'loading' : 'plus'} /> */}
          <div className="ant-upload-text">Upload</div>
        </div>
      );
      const { datalist} = this.state
         return(
              <React.Fragment>
                       <Upload
                          name="avatar"
                          showUploadList={datalist}
                          action="//jsonplaceholder.typicode.com/posts/"
                          beforeUpload={beforeUpload}
                          onChange={this.handleChange}
                          onRemove={this.handleRemove}
                        >
                          {/* {imageUrl ? <img src={imageUrl} alt="avatar" /> : uploadButton} */}
                          {/* {imageUrl ? console.log(_base64ToArrayBuffer(imageUrl.split(",")[1])): uploadButton} */}
                          <Button>
                            <Icon type="upload" /> Upload
                          </Button>
                        </Upload>
                        <Button onClick={this.handleClick}>Upload</Button>
              </React.Fragment>
         )
     }
} 