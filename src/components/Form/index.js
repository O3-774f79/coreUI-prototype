import React, { Component } from 'react';
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Col,
  Form,
  FormGroup,
  FormText,
  Input,
  Label,
  Row,
} from 'reactstrap';
import EmpSelect from './select/EmpSelect'
import CompSelect from './select/CompSelect'
import BraSelect from './select/BraSelect'
class Forms extends Component {
  state = {
    dailyDate: '',
    userInit: [{value:'ทดสอบ',label:'นาย ทดสอบ'}],
  };
  componentWillMount(){
    const dateTime = new Date()
    const FullDate = dateTime.getDate()+"/"+(dateTime.getMonth()+1)+"/"+(dateTime.getFullYear()+543)
    this.setState({dailyDate:FullDate})
  }
_handleChangeEmp = e => {
  //data จาก dropdowlist
  console.log(e.value)
}
_handleChangeComp = e => {
   console.log(e.value)
}
_handleChangeBranch = e =>{
   console.log(e.value)
}
  render() {
    const {userInit,dailyDate} = this.state
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" md="12">
            <Card>
              <CardHeader>
                <strong>CA Form</strong>
              </CardHeader>
              <CardBody>
                <Form encType="multipart/form-data" className="form-horizontal">
                  <FormGroup row>
                    <Col md="2">
                      <Label>วันที่ :</Label>
                    </Col>
                    <Col xs="12" md="4">
                      <strong><p className="form-control-static">{dailyDate}</p></strong>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="2">
                      <Label>ผู้ขอเบิก :</Label>
                    </Col>
                    <Col xs="12" md="4">
                    <EmpSelect defaultBasicSelectValue={userInit}  selectValue={this._handleChangeEmp} loading={false}/>
                    <FormText color="muted">ผู้ขอเบิก</FormText>
                    </Col>
                    <Col md="2">
                      <Label>หน่วยงาน :</Label>
                    </Col>
                    <Col xs="12" md="4">
                    <Input type="text" id="text-input" name="text-input" placeholder="Text" />
                    <FormText color="muted">ผู้ขอเบิก</FormText>
                    </Col>
                  </FormGroup>
                <FormGroup row>
                  <Col md="2">
                    <Label>บริษัท :</Label>
                    </Col>
                    <Col xs="12" md="4">
                    <CompSelect defaultBasicSelectValue={userInit} selectValue={this._handleChangeComp} loading={false}/>
                    <FormText color="muted">บริษัท</FormText>
                    </Col>
                    <Col md="2">
                      <Label>สาขา :</Label>
                    </Col>
                    <Col xs="12" md="4">
                    <BraSelect defaultBasicSelectValue={userInit}  selectValue={this._handleChangeBranch} loading={false}/>
                  </Col>
                </FormGroup>
                <FormGroup row>
                <Col md="2">
                    <Label>SAP(Fund) :</Label>
                    </Col>
                    <Col xs="12" md="4">
                    <Input type="text" id="text-input" name="text-input" placeholder="Text" />
                    <FormText color="muted">ตัวอย่าง</FormText>
                    </Col>
                    <Col md="2">
                      <Label>SAP(IO) :</Label>
                    </Col>
                    <Col xs="12" md="4">
                    <Input type="text" id="text-input" name="text-input" placeholder="Text" />
                    <FormText color="muted"></FormText>
                  </Col>
                </FormGroup>
                <FormGroup row>
                <Col md="2">
                    <Label>เลขในบันทึกภายใน :</Label>
                    </Col>
                    <Col xs="12" md="4">
                    <Input type="text" id="text-input" name="text-input" placeholder="Text" />
                    <FormText color="muted">ตัวอย่าง</FormText>
                    </Col>
                    <Col md="2">
                      <Label></Label>
                    </Col>
                    <Col xs="12" md="4">
                    <FormGroup check inline>
                        <Input className="form-check-input" type="checkbox" id="inline-checkbox1" name="inline-checkbox1" value="option1" />
                        <Label className="form-check-label" check htmlFor="inline-checkbox1">จองงบประมาณ</Label>
                      </FormGroup>
                  </Col>
                </FormGroup>
                <FormGroup row>  
                    <Col md="2">
                      <Label htmlFor="text-input">วัตถุประสงค์<i style={{color:"red"}}>*</i></Label>
                    </Col>
                    <Col xs="12" md="10">
                      <Input type="text" id="text-input" name="text-input" placeholder="Text" />
                      <FormText color="muted">กรุณากรอก</FormText>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="2">
                      <Label htmlFor="email-input">รายละเอียด</Label>
                    </Col>
                    <Col xs="12" md="10">
                    <Input type="textarea" name="textarea-input" id="textarea-input" rows="9"
                             placeholder="Content..." />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="2">
                      <Label htmlFor="text-input">จำนวนเงิน<i style={{color:"red"}}>*</i></Label>
                    </Col>
                    <Col xs="8" md="4">
                    <Input type="text" id="budget" name="budget-input" placeholder="" />
                    <FormText color="muted">กรุณาใส่จำนวนเงิน </FormText>
                    </Col>
                    <Col xs="4" md="2">
                    <Input type="select" name="select" id="select">
                        <option value="0">บาท</option>
                        <option value="1">ดอลลา</option>
                    </Input>
                      <FormText color="muted"></FormText>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="2">
                      <Label htmlFor="password-input">วันที่ต้องการเงิน</Label>
                    </Col>
                    <Col xs="12" md="4">
                    <Input type="date" id="date-input" name="date-input" placeholder="date" />
                    <FormText className="help-block">วันที่ต้องการเงิน</FormText>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="2">
                      <Label htmlFor="date-input">ผู้รับเงิน</Label>
                    </Col>
                    <Col xs="12" md="4">
                      <Input type="text" id="date-input" name="date-input" placeholder="ผู้รับเงิน" disabled/>
                    </Col>
                    <Col md="2">
                      <Label htmlFor="date-input">ชื่อผู้รับเงิน</Label>
                    </Col>
                    <Col xs="12" md="4">
                      <Input type="text" id="date-input" name="date-input" placeholder="ชื่อผู้รับเงิน"  disabled/>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                  <Col md="2">
                      <Label htmlFor="date-input">วันที่รับเงิน</Label>
                    </Col>
                    <Col xs="12" md="4">
                      <Input type="text" id="date-input" name="date-input" placeholder="วันที่รับเงิน" disabled />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                  <Col md="2">
                      <Label htmlFor="date-input">วันที่ครบกำหนดชำระ</Label>
                    </Col>
                    <Col xs="12" md="4">
                      <Input type="text" id="date-input" name="date-input" placeholder="วันที่ครบกำหนดชำระ" disabled />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                  <Col md="2">
                      <Label htmlFor="date-input">ประเภทการเบิก</Label>
                    </Col>
                    <Col xs="12" md="4">
                    <Input type="select" name="select" id="select">
                        <option value="0">Please select</option>
                        <option value="1">เงินสด</option>
                        <option value="2">เช็ค</option>
                    </Input>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                  <Col md="2">
                      <Label htmlFor="date-input">สถานที่รับเงิน</Label>
                    </Col>
                    <Col xs="12" md="4">
                      <Input type="text" id="date-input" name="date-input" placeholder="สถานที่รับเงิน" />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="2">
                      <Label htmlFor="textarea-input">หมายเหตุ</Label>
                    </Col>
                    <Col xs="12" md="10">
                      <Input type="textarea" name="textarea-input" id="textarea-input" rows="9"
                             placeholder="Content..." />
                    </Col>
                  </FormGroup>
                </Form>
              </CardBody>
              <CardFooter>
                <Button type="submit" size="sm" color="primary"><i className="fa fa-dot-circle-o"></i> Submit</Button>
                <Button type="reset" size="sm" color="danger"><i className="fa fa-ban"></i> Reset</Button>
              </CardFooter>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Forms;
