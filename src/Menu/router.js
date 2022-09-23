import { Route, Routes } from "react-router-dom";
import React from 'react';
import Login from '../view/login/login'
import Home from '../view/home/home'
class App extends React.Component {
    render() {
        return (
            <div>
                <Routes>
                    {/* <Route path='*' element={<Login to="/Login" />} /> */}
                    <Route exact path="/" element={<Login />} />
                    <Route exact path="/Home" element={<Home />} />
                </Routes>
            </div>
        )
    }
}

export default App;