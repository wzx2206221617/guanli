import Input from "../components/input";
import { useState,useEffect } from 'react';
const About = () => {
    const [parentCount,setParentCount] = useState('')
    const fu =(data)=>{
        setParentCount(data)
    }
    useEffect(()=>{console.log('任意属性变更')})
    useEffect(()=>{console.log('指定元素n变更')})
    return (
        <div className="About">
            <Input fu={fu}/>
            {parentCount}
        </div>
        
    );
}

export default About;