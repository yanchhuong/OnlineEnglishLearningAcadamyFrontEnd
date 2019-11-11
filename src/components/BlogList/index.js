import React, { Component } from 'react';
import BlogItem from "./BlogItem";
import './index.css';
import { Row, Col, List } from 'antd';
import { Pagination } from 'antd';
import { BackTop } from 'antd';
import { compose } from 'recompose';
import { withRouter } from 'react-router-dom';
import { withFirebase } from '../Firebase';

const BlogItemWrapper = compose(
    withRouter,
    withFirebase,
)(BlogItem);

class BlogList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataList:[
                {id:11, author:'author011', content:'content011', date:'10/01/2019', title:'This is blog#11'},
                {id:12, author:'author012', content:'content012', date:'10/02/2019', title:'This is blog#12'},
                {id:13, author:'author013', content:'content013', date:'10/03/2019', title:'This is blog#13'},
                {id:14, author:'author014', content:'content014', date:'10/04/2019', title:'This is blog#14'},
                {id:15, author:'author015', content:'content015', date:'10/05/2019', title:'This is blog#15'}
            ]
        }
    }
    render() {
        return(
            <div className="blogList">
                <Row>
                    {
                        this.state.dataList.map((item, index) => {
                            return (
                                <Col span={24}>
                                    <BlogItemWrapper blogInfo={item} />
                                </Col>
                            )
                        })
                    }
                </Row>
                <Pagination defaultCurrent={1} total={50}/>
                <BackTop />
            </div>
        )
    }
}

export default BlogList;