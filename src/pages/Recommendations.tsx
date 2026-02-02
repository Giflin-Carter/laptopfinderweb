import { useLocation, Link, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Button from '../components/Button';
import { filterLaptops, type UserPreferences } from '../data/logic';

const Recommendations = () => {
    const { state } = useLocation();
    const [loading, setLoading] = useState(true);
    const [isSaved, setIsSaved] = useState(false);
    const [showComparison, setShowComparison] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 3500);
        return () => clearTimeout(timer);
    }, []);

    if (!state) {
        return <Navigate to="/" replace />;
    }

    const prefs = state as UserPreferences;
    const results = filterLaptops(prefs);

    const handleSave = () => {
        setIsSaved(true);
        setTimeout(() => setIsSaved(false), 3000);
    };

    if (loading) {
        return (
            <div className="loading-screen">
                <div className="circular-loader">
                    <div className="loader-ring"></div>
                    <div className="loader-inner-ring"></div>
                    <div className="loader-icon">💻</div>
                </div>
                <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Finding the best laptops for you</h1>
                <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem' }}>
                    Analyzing your preferences and matching with top options
                </p>
                <div className="dot-progress">
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                </div>
            </div>
        );
    }

    return (
        <div style={{ padding: '4rem 1.5rem', paddingBottom: '10rem', background: 'var(--background)' }}>
            <div className="top-accent-bar"></div>

            <div style={{ textAlign: 'center', marginBottom: '3.5rem' }} className="fade-in">
                <h1 style={{ fontSize: '2.75rem', fontWeight: 850, marginBottom: '0.75rem' }} className="text-gradient">Here are your top picks!</h1>
                <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>
                    Optimized for <strong>{prefs.course}</strong> within your <strong>₹{prefs.budgetMax.toLocaleString()}</strong> limit.
                </p>
            </div>

            {results.length > 0 ? (
                <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    gap: '2rem',
                    maxWidth: '1200px',
                    margin: '0 auto'
                }}>
                    {results.map((laptop, index) => {
                        const originalPrice = Math.round(laptop.price * 1.2);
                        const isBestValue = index === 0;
                        const badgeText = isBestValue ? "Best for Your Course" : "Best Under Budget";
                        const badgeColor = isBestValue ? "var(--primary)" : "#10b981";
                        const badgeBg = isBestValue ? "#eef2ff" : "#ecfdf5";

                        return (
                            <div key={laptop.id} className="fade-in" style={{
                                animationDelay: `${index * 0.1}s`,
                                width: '100%',
                                maxWidth: '380px'
                            }}>
                                <div style={{
                                    background: 'white',
                                    borderRadius: '1.75rem',
                                    padding: '2.25rem',
                                    boxShadow: '0 10px 25px -5px rgba(0,0,0,0.06)',
                                    border: '1px solid #f1f5f9',
                                    height: '100%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                    position: 'relative'
                                }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.transform = 'translateY(-8px)';
                                        e.currentTarget.style.boxShadow = '0 20px 40px -10px rgba(0,0,0,0.1)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.transform = 'translateY(0)';
                                        e.currentTarget.style.boxShadow = '0 10px 25px -5px rgba(0,0,0,0.06)';
                                    }}
                                >
                                    {/* Badge */}
                                    <div style={{ marginBottom: '1.5rem' }}>
                                        <span style={{
                                            fontSize: '0.75rem',
                                            fontWeight: 800,
                                            background: badgeBg,
                                            color: badgeColor,
                                            padding: '0.5rem 1rem',
                                            borderRadius: '2rem',
                                            textTransform: 'uppercase',
                                            letterSpacing: '0.05em'
                                        }}>
                                            {badgeText}
                                        </span>
                                    </div>

                                    {/* Laptop Name */}
                                    <h3 style={{
                                        fontSize: '1.6rem',
                                        fontWeight: 850,
                                        marginBottom: '1rem',
                                        color: 'var(--text-main)',
                                        lineHeight: 1.25
                                    }}>
                                        {laptop.brand} {laptop.model}
                                    </h3>

                                    {/* Pricing */}
                                    <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.6rem', marginBottom: '1.5rem' }}>
                                        <span style={{ fontSize: '1.75rem', fontWeight: 900, color: 'var(--text-main)' }}>
                                            ₹{laptop.price.toLocaleString()}
                                        </span>
                                        <span style={{ fontSize: '1rem', textDecoration: 'line-through', color: 'var(--text-light)', fontWeight: 500 }}>
                                            ₹{originalPrice.toLocaleString()}
                                        </span>
                                    </div>

                                    {/* Benefits */}
                                    <div style={{ marginBottom: '2rem' }}>
                                        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                            <li style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.75rem', fontSize: '0.95rem', color: 'var(--text-secondary)' }}>
                                                <span style={{ color: '#10b981', fontWeight: 900 }}>✓</span>
                                                <span>Powerful {laptop.specs.processor} processor</span>
                                            </li>
                                            <li style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.75rem', fontSize: '0.95rem', color: 'var(--text-secondary)' }}>
                                                <span style={{ color: '#10b981', fontWeight: 900 }}>✓</span>
                                                <span>Smooth multitasking with {laptop.specs.ram}</span>
                                            </li>
                                            <li style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.95rem', color: 'var(--text-secondary)' }}>
                                                <span style={{ color: '#10b981', fontWeight: 900 }}>✓</span>
                                                <span>Optimized for {prefs.course} tools</span>
                                            </li>
                                        </ul>
                                    </div>

                                    {/* CTA */}
                                    <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'center' }}>
                                        <a
                                            href={`https://www.amazon.in/s?k=${laptop.brand}+${laptop.model}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="btn btn-primary"
                                            style={{
                                                padding: '0.85rem 2.5rem',
                                                borderRadius: '1rem',
                                                fontSize: '0.95rem',
                                                fontWeight: 700,
                                                width: 'fit-content'
                                            }}
                                        >
                                            View Details
                                        </a>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            ) : (
                <div style={{ textAlign: 'center', padding: '6rem 0' }} className="fade-in">
                    <div style={{ fontSize: '4rem', marginBottom: '2rem' }}>🔍</div>
                    <h2 style={{ color: 'var(--text-muted)', fontSize: '2rem' }}>No exact matches found.</h2>
                    <p style={{ fontSize: '1.1rem', marginBottom: '2rem' }}>Try increasing your budget or changing your preferences.</p>
                    <Link to="/" className="btn btn-primary">Adjust Preferences</Link>
                </div>
            )}

            {/* Comparison Overlay */}
            {showComparison && (
                <div style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'rgba(0,0,0,0.8)',
                    backdropFilter: 'blur(8px)',
                    zIndex: 1000,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '2rem'
                }} className="fade-in">
                    <div style={{
                        background: 'white',
                        width: '100%',
                        maxWidth: '1000px',
                        borderRadius: '2rem',
                        padding: '3rem',
                        maxHeight: '90vh',
                        overflowY: 'auto',
                        position: 'relative'
                    }}>
                        <button
                            onClick={() => setShowComparison(false)}
                            style={{
                                position: 'absolute',
                                top: '1.5rem',
                                right: '1.5rem',
                                background: '#f1f5f9',
                                border: 'none',
                                width: '40px',
                                height: '40px',
                                borderRadius: '50%',
                                fontSize: '1.5rem',
                                cursor: 'pointer'
                            }}
                        >
                            ×
                        </button>

                        <h2 style={{ fontSize: '2rem', marginBottom: '2rem', textAlign: 'center' }}>Specifications Comparison</h2>

                        <div style={{ overflowX: 'auto' }}>
                            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                                <thead>
                                    <tr>
                                        <th style={{ padding: '1rem', borderBottom: '2px solid #f1f5f9' }}>Feature</th>
                                        {results.map(laptop => (
                                            <th key={laptop.id} style={{ padding: '1rem', borderBottom: '2px solid #f1f5f9' }}>{laptop.model}</th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td style={{ padding: '1rem', fontWeight: 600, borderBottom: '1px solid #f1f5f9' }}>Processor</td>
                                        {results.map(laptop => <td key={laptop.id} style={{ padding: '1rem', borderBottom: '1px solid #f1f5f9' }}>{laptop.specs.processor}</td>)}
                                    </tr>
                                    <tr>
                                        <td style={{ padding: '1rem', fontWeight: 600, borderBottom: '1px solid #f1f5f9' }}>RAM</td>
                                        {results.map(laptop => <td key={laptop.id} style={{ padding: '1rem', borderBottom: '1px solid #f1f5f9' }}>{laptop.specs.ram}</td>)}
                                    </tr>
                                    <tr>
                                        <td style={{ padding: '1rem', fontWeight: 600, borderBottom: '1px solid #f1f5f9' }}>Storage</td>
                                        {results.map(laptop => <td key={laptop.id} style={{ padding: '1rem', borderBottom: '1px solid #f1f5f9' }}>{laptop.specs.storage}</td>)}
                                    </tr>
                                    <tr>
                                        <td style={{ padding: '1rem', fontWeight: 600, borderBottom: '1px solid #f1f5f9' }}>Price</td>
                                        {results.map(laptop => <td key={laptop.id} style={{ padding: '1rem', borderBottom: '1px solid #f1f5f9', fontWeight: 800, color: 'var(--primary)' }}>₹{laptop.price.toLocaleString()}</td>)}
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            )}

            <div className="bottom-actions fade-in" style={{
                animationDelay: '0.4s',
                background: 'rgba(255,255,255,0.8)',
                backdropFilter: 'blur(12px)',
                borderTop: '1px solid #f1f5f9'
            }}>
                <Link
                    to="/"
                    style={{
                        color: 'var(--text-muted)',
                        fontWeight: 600,
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem'
                    }}
                >
                    <span style={{ fontSize: '1.2rem' }}>‹</span> Back to Preferences
                </Link>

                <div style={{ display: 'flex', gap: '1rem' }}>
                    <Button
                        onClick={() => setShowComparison(true)}
                        variant="outline"
                        style={{ borderRadius: '1rem' }}
                    >
                        Compare All
                    </Button>
                    <Button
                        onClick={handleSave}
                        variant={isSaved ? 'primary' : 'secondary'}
                        style={{
                            background: isSaved ? '#10b981' : undefined,
                            minWidth: '180px',
                            borderRadius: '1.25rem'
                        }}
                    >
                        {isSaved ? '✓ Saved Successfully' : 'Save My Results'}
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Recommendations;
