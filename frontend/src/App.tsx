'use client';
import Header from './layouts/Header';
import Footer from './layouts/Footer';
import './global.css';

const App = () => {
    return (
        <div className='app-wrapper'>
            <Header />
            {/* 페이지 내용 */}
            <main className='main-content'>{/* 페이지 내용 */}</main>
            <Footer />
        </div>
    );
};

export default App;
