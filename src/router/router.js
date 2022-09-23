import { Route, Routes ,Navigate} from "react-router-dom";
import React from 'react';
import Message from '../view/message/message'
import Graph from '../view/graph/graph'
// const otherRouter = [
//     {
//         path: '/404',
//         title: '未找到页面',
//         element: <NotFound />
//     },
//     {
//         from: '*',
//         to: '/404'
//     }
// ];
const pageRouter = [
    {
        path: '/message',
        title: '消息',
        element: <Message />
    },
    {
        path: '/graph',
        title: '图形',
        element: <Graph />
    },
];
const allRouter = [...pageRouter];
const App = () => {
    // 提前封装好的路由配置函数
    const renderRouter = (router) =>
        router.map((item, index) =>
            item.path ? (
                <Route
                    key={index}
                    path={item.path}
                    element={item.element}
                    {...(item.props = {})}
                >
                    {item.children && renderRouter(item.children)}
                </Route>
            ) : (
                <Route
                    key={index}
                    path={item.from}
                    element={<Navigate to={item.to} replace />}
                />
            )
        );


    return (
        <div>
            <Routes>{renderRouter(allRouter)}</Routes>
        </div>
    )

}

export default App;