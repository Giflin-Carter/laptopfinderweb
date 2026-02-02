import { useState, type FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';

export default function PriceAlert() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [model, setModel] = useState('HP Pavilion 15');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <div style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1.5rem',
            background: 'var(--gradient-background)'
        }}>
            <div className="glass-panel animate-scale-in" style={{
                maxWidth: '500px',
                width: '100%',
                padding: '2rem',
                borderRadius: 'var(--radius-xl)',
                textAlign: 'center'
            }}>

                {!submitted ? (
                    <>
                        <div style={{
                            width: '64px',
                            height: '64px',
                            background: '#f3e8ff',
                            color: 'var(--primary)',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '2rem',
                            margin: '0 auto 1.5rem'
                        }}>
                            🔔
                        </div>
                        <h1 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Get Notified</h1>
                        <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', fontSize: '0.9rem' }}>
                            We'll send you an alert when the price drops for your selected laptop.
                        </p>

                        <form onSubmit={handleSubmit} style={{ textAlign: 'left' }}>
                            <div style={{ marginBottom: '1rem' }}>
                                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.5rem' }}>Target Laptop</label>
                                <select
                                    value={model}
                                    onChange={(e) => setModel(e.target.value)}
                                    style={{
                                        width: '100%',
                                        padding: '0.75rem',
                                        borderRadius: 'var(--radius-md)',
                                        border: '1px solid #e2e8f0',
                                        background: 'rgba(255,255,255,0.8)',
                                        fontSize: '0.9rem'
                                    }}
                                >
                                    <option>HP Pavilion 15</option>
                                    <option>Dell Inspiron 14</option>
                                    <option>MacBook Air M1</option>
                                    <option>ASUS Vivobook 16</option>
                                </select>
                            </div>

                            <div style={{ marginBottom: '2rem' }}>
                                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.5rem' }}>Email or WhatsApp</label>
                                <input
                                    type="text"
                                    placeholder="Enter your contact info"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    style={{
                                        width: '100%',
                                        padding: '0.75rem',
                                        borderRadius: 'var(--radius-md)',
                                        border: '1px solid #e2e8f0',
                                        background: 'rgba(255,255,255,0.8)',
                                        fontSize: '0.9rem'
                                    }}
                                />
                            </div>

                            <Button type="submit" fullWidth style={{ justifyContent: 'center' }}>
                                Set Price Alert
                            </Button>
                        </form>
                    </>
                ) : (
                    <div className="animate-fade-in">
                        <div style={{
                            width: '72px',
                            height: '72px',
                            background: '#d1fae5',
                            color: '#10b981',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '2rem',
                            margin: '0 auto 1.5rem'
                        }}>
                            ✅
                        </div>
                        <h2 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>All Set!</h2>
                        <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>
                            You will receive a notification when the price drops for <strong>{model}</strong>.
                        </p>
                        <Button
                            onClick={() => navigate('/')}
                            variant="outline"
                            fullWidth
                            style={{ borderRadius: '1rem' }}
                        >
                            Back to Home
                        </Button>
                    </div>
                )}
            </div>

            {!submitted && (
                <Button
                    onClick={() => navigate(-1)}
                    variant="outline"
                    style={{
                        position: 'fixed',
                        bottom: '2.5rem',
                        left: '2.5rem',
                        borderRadius: '1.25rem',
                        boxShadow: '0 10px 25px -5px rgba(0,0,0,0.1)',
                        zIndex: 50
                    }}
                >
                    <span style={{ fontSize: '1.4rem' }}>‹</span> Back
                </Button>
            )}
        </div>
    );
}
