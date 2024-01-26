import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { MainPage, ShopPage, ClothesItemPage, CartPage } from '../pages/index';

import './app.css';

function App() {
    return (
        <Router>
            <div className="app">
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/shop" element={<ShopPage />} />
                    <Route
                        path="/clothesItem/:id"
                        element={<ClothesItemPage />}
                    />
                    <Route path="/cart" element={<CartPage />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
