import React, {Component} from 'react'
import { Icon } from 'antd';
import CourseService from '../service/Course';
import Util from './Util';

class LessonLine extends Component {
    static ITEM_WIDTH = 132;
    static LOCATOR_TOP = [10, 12, 16];

    constructor (props) {
        super(props)

    }

    state = {
        locatorPosition: 0,
        lessons: []
    }

    async componentWillMount () {
        let result = await CourseService.getPeriods();
        let now = Util.sommthDate(Date.now(), 'yyyy-MM-dd');
        let posIndex = 0;
        result.forEach((item, i) => {
            if(i === 0) return; // 课程导览跳过
            let date = new Date(item.date || undefined);
            date = Util.sommthDate(date, 'yyyy-MM-dd');
            if(date ===)
        });
        (result && result.length) && (this.setState({ lessons: result }));
    }

    componentWillUnmount () {

    }

    render () {
        return (
            <div className="lesson-line">
                <div className="locator"><p>2017-01-08</p><Icon type="environment" /></div>
                <div className="lesson-axis" style={{width: (this.state.lessons.length) * this.ITEM_WIDTH + 'px'}}></div>
                {
                    this.state.lessons.map((lesson, index) => (
                        <div className={(index === 0) ? "lesson-item active" : "lesson-item"} key={lesson.id}>
                            <div className="lesson-dot"></div>
                            <div className="lesson-info">{(lesson.date) && <p>{lesson.date}</p>}{lesson.name}</div>
                        </div>
                    ))
                }
                <div className="lesson-item disabled">
                    <div className="lesson-dot"></div>
                    <div className="lesson-info">未完待续</div>
                </div>
            </div>
        )
    }
}

export default LessonLine