import { Routes, Route } from 'react-router-dom';
import Layout from '../components/layout/index';
import About from '../pages/About';
import Product from '../pages/Product';
import App from '../App';

const AppRoutes = () => {
    return (
        <Routes>
            <Route 
                path="/"
                element={
                    <Layout>
                        <App />
                    </Layout>
                }
            />
            <Route
                path="/about"
                element={
                    <Layout>
                        <About />
                    </Layout>
                }
            />
            <Route
                path="/product"
                element={
                    <Layout>
                        <Product />
                    </Layout>
                }
            />
        </Routes>
    );
};

export default AppRoutes;
