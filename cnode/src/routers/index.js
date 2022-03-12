import React from 'react'
import { Route, Routes } from 'react-router-dom'
import router from './router'
export default function RouterList() {
    return (
        <Routes>
            {router.map((item, index) => {
                return (
                    // 渲染url匹配的组件
                    <Route exact={item.exact} path={item.path} key={index} element={item.element}></Route>
                )
            })}
        </Routes>
    )
}
