import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';

const Login: React.FC = () => {
    const navigate = useNavigate();
    const [identifier, setIdentifier] = useState('');

    const handleContinue = (e: React.FormEvent) => {
        e.preventDefault();
        navigate('/');
    };

    const handleGuest = () => {
        navigate('/');
    };

    return (
        <div style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'linear-gradient(135deg, #a855f7 0%, #9333ea 50%, #7e22ce 100%)',
            backgroundSize: 'gradient-bar 3s ease infinite',
            padding: '20px',
            fontFamily: 'var(--font-main)',
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 9999
        }}>
            <div className="glass-card fade-in" style={{
                padding: '48px 32px',
                width: '100%',
                maxWidth: '420px',
                textAlign: 'center',
                background: 'rgba(255, 255, 255, 0.9)',
                backdropFilter: 'blur(20px)',
                borderRadius: '2rem',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                border: '1px solid rgba(255, 255, 255, 0.3)'
            }}>
                <div style={{ marginBottom: '32px' }}>
                    <div style={{
                        fontSize: '0.85rem',
                        fontWeight: 700,
                        color: 'var(--primary)',
                        textTransform: 'uppercase',
                        letterSpacing: '0.1em',
                        marginBottom: '8px'
                    }}>

                    </div>
                    <h1 style={{
                        fontSize: '2.25rem',
                        fontWeight: 800,
                        lineHeight: '1.2',
                        marginBottom: '12px',
                        color: 'var(--text-main)'
                    }}>
                        Choose the Right Laptop <span className="text-gradient">Without Confusion</span>
                    </h1>
                    <p style={{
                        color: 'var(--text-muted)',
                        fontSize: '1.1rem',
                        fontWeight: 500
                    }}>
                        Made for students and parents
                    </p>
                </div>

                <form onSubmit={handleContinue} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    <div style={{ textAlign: 'left' }}>
                        <input
                            type="text"
                            value={identifier}
                            onChange={(e) => setIdentifier(e.target.value)}
                            placeholder="Mobile number or Email"
                            required
                            style={{
                                width: '100%',
                                padding: '16px 20px',
                                borderRadius: '1.25rem',
                                border: '2px solid #f1f5f9',
                                background: '#f8fafc',
                                fontSize: '1rem',
                                outline: 'none',
                                transition: 'all 0.3s'
                            }}
                            onFocus={(e) => {
                                e.target.style.borderColor = 'var(--primary)';
                                e.target.style.background = 'white';
                                e.target.style.boxShadow = '0 0 0 4px rgba(147, 51, 234, 0.1)';
                            }}
                            onBlur={(e) => {
                                e.target.style.borderColor = '#f1f5f9';
                                e.target.style.background = '#f8fafc';
                                e.target.style.boxShadow = 'none';
                            }}
                        />
                    </div>

                    <Button
                        type="submit"
                        fullWidth
                        size="lg"
                        style={{ borderRadius: '1.25rem' }}
                    >
                        Continue
                    </Button>

                    <Button
                        type="button"
                        onClick={handleGuest}
                        variant="outline"
                        fullWidth
                        size="lg"
                        style={{ borderRadius: '1.25rem' }}
                    >
                        Continue Without Login
                    </Button>
                </form>

                <div style={{ marginTop: '32px', fontSize: '0.85rem', color: 'var(--text-light)' }}>
                    By continuing, you agree to our <span style={{ textDecoration: 'underline', cursor: 'pointer' }}>Terms</span> and <span style={{ textDecoration: 'underline', cursor: 'pointer' }}>Privacy Policy</span>
                </div>
            </div>
        </div>
    );
};

export default Login;
