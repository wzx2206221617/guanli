import { Component } from 'react';
import Picker from '../components/picker'

class Home extends Component {
    state ={
        msg:''
    }
    render() {
        const age = 26
        const hobbies = ['睡觉', '吃饭']
        const fn =(data)=>{
            console.log('支持下',data)
            this.setState({
                msg:data
            })
        }
        return (
            <div className="Home">
                <Picker age={age} hobbies={hobbies} fn={fn}/>
                {this.state.msg}
            </div>
        );
    }
}
export default Home;