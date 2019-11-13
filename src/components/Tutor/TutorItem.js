import React, {Component} from "react";
import { Card } from 'antd';
import './index.css';
import moment from "moment";

class TutorItem extends Component{
    constructor(props) {
        super(props);
        this.showTutor = this.showTutor.bind(this);
    }

    showTutor() {
        let tutorInfo = this.props.tutorInfo;
        this.props.history.push({pathname:'/tutor/' + tutorInfo.id, state:{tutorInfo}});
    }

    render() {
        let tutorId = this.props.tutorInfo.id;
        let tutorName = this.props.tutorInfo.userName;
        let tutorBio = this.props.tutorInfo.bio;
        let tutorImg = this.props.tutorInfo.picUrl;
        let tutorExp = this.props.tutorInfo.teachExp;

        return(
            <Card className="tutorCard" title={tutorName} hoverable style={{ width: 300, height:400 }}
                  cover={<img alt="example" src={tutorImg}/>}>
                <p className="tutorBio">{tutorBio}</p>
                <div className="moreBTN">
                    <a href="#" onClick={this.showTutor}>More</a>
                </div>
            </Card>
        )
    }
}

export default TutorItem;