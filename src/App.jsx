import React from 'react';
import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Spin } from 'antd';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import es_ES from 'antd/lib/locale/es_ES';
import HomePage from './pages/HomePage';
import RoutePage from './pages/RoutePage';
import './App.css';
function App() {
    return (
        <ConfigProvider locale={es_ES}>
            <Router>
                <div className="app-container">
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/route" element={<RoutePage />} />
                    </Routes>
                </div>
            </Router>
        </ConfigProvider>
    );



    const HomePage = lazy(() => import('./pages/HomePage'));
    const RoutePage = lazy(() => import('./pages/RoutePage'));
    function App() {
        return (
            <Router>
                <Suspense fallback={<div style={{
                    display: 'flex', justifyContent:
                        'center', alignItems: 'center', height: '100vh'
                }}><Spin size="large"
                    /></div>}>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/route" element={<RoutePage />} />
                    </Routes>
                </Suspense>
            </Router>
        );
    }
}
export default App;