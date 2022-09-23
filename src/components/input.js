import { Input } from 'antd';
import React from 'react';
const App = (props) => {
    return (
        <Input placeholder="等待输入" onChange={e=>{props.fu(e.target.value)}} />
    )
}

export default App;