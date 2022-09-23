import { DatePicker, Space } from 'antd';
import React from 'react';

const onChange = (date, dateString) => {
    console.log(date, dateString);
};
const App = (props) => {
    const sent =()=>{
        props.fn('niubi')
    }
    return (
        (
            <div>
                <Space direction="vertical">
                    <DatePicker onChange={onChange} />
                    <DatePicker onChange={onChange} picker="week" />
                    <DatePicker onChange={onChange} picker="month" />
                    <DatePicker onChange={onChange} picker="quarter" />
                    <DatePicker onChange={onChange} picker="year" />
                </Space>
                <div>{props.age}</div>
                <div onClick={sent}>{props.hobbies}</div>
            </div>
        )
    )
}
// const emitSent = (props) => {
//     const { insect } = props
//     insect('打豆豆')
// }
export default App;