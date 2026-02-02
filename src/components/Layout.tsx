import { Link, Outlet, useLocation } from 'react-router-dom';
import Button from './Button';

const Layout = () => {
    const location = useLocation();

    return (
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <header style={{
                padding: '1.25rem 2rem',
                background: 'rgba(255, 255, 255, 0.8)',
                backdropFilter: 'blur(12px)',
                borderBottom: '1px solid #f1f5f9',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                position: 'sticky',
                top: 0,
                zIndex: 1000
            }}>
                <Link to="/" style={{
                    fontSize: '1.5rem',
                    fontWeight: 800,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem'
                }}>
                    <span style={{
                        background: 'var(--primary)',
                        color: 'white',
                        padding: '0.5rem',
                        borderRadius: '0.75rem',
                        fontSize: '1.2rem',
                        boxShadow: '0 4px 6px -1px rgba(147, 51, 234, 0.4)'
                    }}>💻</span>
                    <span className="text-gradient" style={{ letterSpacing: '-0.03em' }}>
                        Student Laptop Guide
                    </span>
                </Link>

                <nav style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <Button
                        to="/login"
                        variant={location.pathname === '/login' ? 'primary' : 'outline'}
                        size="sm"
                        style={{ borderRadius: '0.85rem', fontWeight: 700 }}
                    >
                        Log In
                    </Button>
                    <Button
                        to="/second-hand"
                        variant={location.pathname === '/second-hand' ? 'primary' : 'outline'}
                        size="sm"
                        style={{ borderRadius: '0.85rem', fontWeight: 700 }}
                    >
                        Second Hand
                    </Button>
                    <Button
                        to="/offers"
                        variant={location.pathname === '/offers' ? 'primary' : 'outline'}
                        size="sm"
                        style={{ borderRadius: '0.85rem', fontWeight: 700 }}
                    >
                        Offers & Deals
                    </Button>
                </nav>
            </header>

            <main style={{ flex: 1, padding: '3rem 0' }}>
                <div className="container">
                    <Outlet />
                </div>
            </main>

            <footer style={{
                backgroundColor: 'white',
                borderTop: '1px solid var(--border)',
                padding: '3rem 0',
                marginTop: 'auto'
            }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>Make the smart choice.</h3>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', marginBottom: '2rem' }}>
                        <Link to="/price-alert" style={{ color: 'var(--primary)', fontWeight: 600 }}>Get Price Alerts</Link>
                    </div>

                </div>
            </footer>
        </div>
    );
};

export default Layout;
