import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {
    MainPage,
    ShopPage,
    ClothesItemPage,
    CartPage,
    SearchPage,
} from '../pages/index';

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
                    <Route path="/search" element={<SearchPage />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
