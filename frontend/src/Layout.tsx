import Header from './layouts/Header';
import Sidebar from './components/common/Sidebar';
import Footer from './layouts/Footer';
import { Outlet } from 'react-router-dom';

export default function Layout() {
    return (
        <div className='app-wrapper'>
            <Header />

            <div style={{ display: 'flex', flex: 1 }}>
                <Sidebar />

                <main className='app-container'>
                    <Outlet />
                </main>
            </div>

            <Footer />
        </div>
    );
}
