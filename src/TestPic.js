import React ,{Component} from 'react';
import firebase from './firebase'
import 'antd/dist/antd.css';
import { Form, Select, Input, Button } from 'antd';
import { InputNumber } from 'antd';
import { Card, Col, Row } from 'antd';
import zoneA from './img/resort/zoneA.png';
import zoneB from './img/resort/zoneB.png';
import zoneC from './img/resort/zoneC.png';
import zoneD from './img/resort/zoneD.png';
import z5D from './img/resort/5D.png';
import zone8d from './img/resort/zone8d.jpg';
import './testPic.css';
const db = firebase.firestore();
class TestPic extends React.Component{
    constructor(props){
        super(props)
        this.state = {
    
        }
    }
    render(){
        return (
            <div>
                 <div style={{ background: '#ECECEC', padding: '30px' }}>
                    <Row gutter={16}>
                    <Col span={8}>
                        <Card  title="Card title"  bordered={false}>
                           <img src = {zone8d} id ="headbookct" class = "picture"/>
                            <InputNumber min={0} max={10} defaultValue={0}  />
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card title="Card title" bordered={false}>
                         <img src = {zoneA} id ="headbookct" class = "picture"/>
                         <InputNumber min={0} max={10} defaultValue={0}  />
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card title="Card title" bordered={false}>
                        <img src = {z5D} id ="headbookct" class = "picture"/>
                        <InputNumber min={0} max={10} defaultValue={0}  />
                        </Card>
                    </Col>
                    
                    </Row>
                </div>
                <div style={{ background: '#ECECEC', padding: '30px' }}>
                    <Row gutter={16}>
                    <Col span={8}>
                        <Card title="Card title" bordered={false}>
                        <img src = {zoneD} id ="headbookct" class = "picture"/>
                        <InputNumber min={1} max={10} defaultValue={3}  />
                        </Card>
                    </Col>
                    
                    <Col span={8}>
                        <Card title="Card title" bordered={false}>
                        <img src = {zoneC} id ="headbookct" class = "picture"/>
                        <InputNumber min={0} max={10} defaultValue={0}  />
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card title="Card title" bordered={false}>
                        <img src = {zoneB} id ="headbookctt" class = "picture"/>
                        <InputNumber min={0} max={10} defaultValue={0}  />
                        </Card>
                    </Col>

                    </Row>
                </div>
                
            </div>
        )
    }

}

export default Form.create()(TestPic);