import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Button from '../components/Button';

const Register = () => {
    const navigate = useNavigate();
    const { signup, googleSignIn } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSignup = async (e: React.FormEvent) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            return setError('Passwords do not match');
        }

        try {
            setError('');
            setLoading(true);
            await signup(email, password);
            navigate('/');
        } catch (err) {
            console.error(err);
            setError('Failed to create an account.');
        }
        setLoading(false);
    };

    const handleGoogleSignIn = async () => {
        try {
            setError('');
            setLoading(true);
            await googleSignIn();
            navigate('/');
        } catch (err) {
            setError('Failed to sign in with Google');
            console.error(err);
        }
        setLoading(false);
    };

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '100vh',
            background: '#ffffff',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Background Glow Effects */}
            <div style={{
                position: 'absolute',
                top: '20%',
                left: '20%',
                width: '300px',
                height: '300px',
                background: 'rgba(147, 51, 234, 0.1)',
                filter: 'blur(80px)',
                borderRadius: '50%'
            }} />
            <div style={{
                position: 'absolute',
                bottom: '20%',
                right: '20%',
                width: '300px',
                height: '300px',
                background: 'rgba(236, 72, 153, 0.1)',
                filter: 'blur(80px)',
                borderRadius: '50%'
            }} />

            <div className="fade-in" style={{
                width: '100%',
                maxWidth: '400px',
                padding: '3rem 2.5rem',
                background: 'rgba(255, 255, 255, 0.8)',
                backdropFilter: 'blur(20px)',
                borderRadius: '2rem',
                border: '1px solid rgba(255, 255, 255, 0.8)',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.1)',
                textAlign: 'center'
            }}>
                <div style={{
                    width: '80px',
                    height: '80px',
                    margin: '0 auto 1.5rem',
                    borderRadius: '50%',
                    background: 'var(--primary-gradient)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 10px 20px -5px rgba(147, 51, 234, 0.3)'
                }}>
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/747/747376.png"
                        alt="Join"
                        style={{ width: '40px', height: '40px', filter: 'brightness(0) invert(1)' }}
                    />
                </div>

                <h1 style={{
                    fontSize: '2rem',
                    marginBottom: '2rem',
                    color: '#1e293b',
                    fontWeight: 700,
                    letterSpacing: '0.05em'
                }}>Create Account</h1>

                {error && <div style={{ color: 'red', marginBottom: '1rem', fontSize: '0.9rem' }}>{error}</div>}

                <form onSubmit={handleSignup} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                    <div>
                        <input
                            type="email"
                            placeholder="Email Address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            style={{
                                width: '100%',
                                padding: '1rem 1.25rem',
                                borderRadius: '1rem',
                                border: '1px solid #e2e8f0',
                                background: '#f8fafc',
                                color: '#1e293b',
                                fontSize: '1rem',
                                outline: 'none',
                                transition: 'all 0.3s ease'
                            }}
                            onFocus={(e) => {
                                e.target.style.borderColor = 'var(--primary)';
                                e.target.style.background = 'white';
                                e.target.style.boxShadow = '0 0 0 3px rgba(147, 51, 234, 0.1)';
                            }}
                            onBlur={(e) => {
                                e.target.style.borderColor = '#e2e8f0';
                                e.target.style.background = '#f8fafc';
                                e.target.style.boxShadow = 'none';
                            }}
                        />
                    </div>

                    <div>
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            style={{
                                width: '100%',
                                padding: '1rem 1.25rem',
                                borderRadius: '1rem',
                                border: '1px solid #e2e8f0',
                                background: '#f8fafc',
                                color: '#1e293b',
                                fontSize: '1rem',
                                outline: 'none',
                                transition: 'all 0.3s ease'
                            }}
                            onFocus={(e) => {
                                e.target.style.borderColor = 'var(--primary)';
                                e.target.style.background = 'white';
                                e.target.style.boxShadow = '0 0 0 3px rgba(147, 51, 234, 0.1)';
                            }}
                            onBlur={(e) => {
                                e.target.style.borderColor = '#e2e8f0';
                                e.target.style.background = '#f8fafc';
                                e.target.style.boxShadow = 'none';
                            }}
                        />
                    </div>

                    <div>
                        <input
                            type="password"
                            placeholder="Confirm Password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                            style={{
                                width: '100%',
                                padding: '1rem 1.25rem',
                                borderRadius: '1rem',
                                border: '1px solid #e2e8f0',
                                background: '#f8fafc',
                                color: '#1e293b',
                                fontSize: '1rem',
                                outline: 'none',
                                transition: 'all 0.3s ease'
                            }}
                            onFocus={(e) => {
                                e.target.style.borderColor = 'var(--primary)';
                                e.target.style.background = 'white';
                                e.target.style.boxShadow = '0 0 0 3px rgba(147, 51, 234, 0.1)';
                            }}
                            onBlur={(e) => {
                                e.target.style.borderColor = '#e2e8f0';
                                e.target.style.background = '#f8fafc';
                                e.target.style.boxShadow = 'none';
                            }}
                        />
                    </div>

                    <Button
                        type="submit"
                        disabled={loading}
                        fullWidth
                        size="lg"
                        style={{ marginTop: '1rem', borderRadius: '1rem' }}
                    >
                        {loading ? 'Creating Account...' : 'Sign Up'}
                    </Button>

                    <Button
                        type="button"
                        onClick={handleGoogleSignIn}
                        disabled={loading}
                        variant="outline"
                        fullWidth
                        style={{ background: 'white', color: '#64748b' }}
                    >
                        <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google" style={{ width: '20px' }} />
                        Sign up with Google
                    </Button>
                </form>

                <div style={{ marginTop: '2rem', fontSize: '0.9rem', color: '#64748b' }}>
                    Already have an account? <Link to="/login" style={{ color: 'var(--primary)', fontWeight: 600 }}>Log In</Link>
                </div>
            </div>
        </div>
    );
};

export default Register;
