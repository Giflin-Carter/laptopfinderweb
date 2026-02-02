import React from 'react';

interface Laptop {
    id: string;
    brand: string;
    model: string;
    price: number;
    image: string;
    tags: string[];
    warnings: string[];
    specs?: {
        processor: string;
        ram: string;
        storage: string;
        display?: string;
        gpu?: string;
    };
}

const LaptopCard: React.FC<{ laptop: Laptop }> = ({ laptop }) => {
    // Generate card-specific colors based on brand or ID
    const getCardTheme = () => {
        if (laptop.brand === 'Apple') return { bg: '#fee2e2', accent: '#f87171', tag: 'BEST VALUE' };
        if (laptop.brand === 'Dell') return { bg: '#e0f2fe', accent: '#26c6da', tag: 'ECO-FRIENDLY' };
        if (laptop.brand === 'Lenovo') return { bg: '#f3e8ff', accent: '#a78bfa', tag: 'RECOMMENDED' };
        return { bg: '#f1f5f9', accent: '#6366f1', tag: 'NEW' };
    };

    const theme = getCardTheme();
    const originalPrice = Math.round(laptop.price * 1.25);

    return (
        <div className="glass-card" style={{
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
            border: `1px solid ${theme.bg}`,
            overflow: 'hidden',
            background: 'white',
            position: 'relative'
        }}
            onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-12px)';
                e.currentTarget.style.boxShadow = '0 30px 60px -12px rgba(50, 50, 93, 0.25), 0 18px 36px -18px rgba(0, 0, 0, 0.3)';
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'var(--shadow-card)';
            }}
        >
            <div style={{
                height: '220px',
                padding: '2rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: theme.bg,
                position: 'relative',
                transition: 'background 0.3s ease'
            }}>
                <img src={laptop.image} alt={laptop.model} style={{
                    maxHeight: '100%',
                    maxWidth: '100%',
                    objectFit: 'contain',
                    filter: 'drop-shadow(0 10px 15px rgba(0,0,0,0.1))',
                }} />

                {/* Theme Tag */}
                <div style={{
                    position: 'absolute',
                    top: '1rem',
                    left: '1rem',
                    display: 'flex',
                    gap: '0.4rem'
                }}>
                    <span style={{
                        fontSize: '0.65rem',
                        fontWeight: 800,
                        background: 'white',
                        color: theme.accent,
                        padding: '0.3rem 0.6rem',
                        borderRadius: '0.4rem',
                        boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
                        letterSpacing: '0.05em'
                    }}>
                        {theme.tag}
                    </span>
                    {laptop.tags.slice(0, 1).map((tag) => (
                        <span key={tag} style={{
                            fontSize: '0.65rem',
                            fontWeight: 800,
                            background: 'rgba(255,255,255,0.7)',
                            color: 'var(--text-muted)',
                            padding: '0.3rem 0.6rem',
                            borderRadius: '0.4rem',
                        }}>
                            {tag.toUpperCase()}
                        </span>
                    ))}
                </div>
            </div>

            <div style={{ padding: '2rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <h3 style={{ fontSize: '1.75rem', marginBottom: '0.75rem', fontWeight: 800, color: 'var(--text-main)' }}>
                    {laptop.brand} {laptop.model}
                </h3>

                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1.5rem', lineHeight: '1.5' }}>
                    {laptop.specs ? `${laptop.specs.processor}, ${laptop.specs.ram} RAM, ${laptop.specs.storage}. Perfect for students and professionals.` :
                        "Excellent laptop with great performance and battery life for your studies."}
                </p>

                <div className="price-container">
                    <span className="new-price">₹{laptop.price.toLocaleString()}</span>
                    <span className="old-price">₹{originalPrice.toLocaleString()}</span>
                </div>

                <ul className="feature-list">
                    <li className="feature-item">
                        <span className="check-icon">✓</span>
                        <span>{laptop.brand === 'Apple' ? 'AppleCare+ compatible' : '1-year warranty included'}</span>
                    </li>
                    <li className="feature-item">
                        <span className="check-icon">✓</span>
                        <span>Free shipping & setup</span>
                    </li>
                    <li className="feature-item">
                        <span className="check-icon">✓</span>
                        <span>Best price guarantee</span>
                    </li>
                </ul>

                <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'center' }}>
                    <a
                        href={`https://www.amazon.in/s?k=${laptop.brand}+${laptop.model}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn"
                        style={{
                            padding: '0.85rem 2.5rem',
                            background: theme.accent,
                            color: 'white',
                            borderRadius: '0.75rem',
                            boxShadow: `0 8px 16px -4px ${theme.accent}66`,
                            fontSize: '0.95rem',
                            fontWeight: 700
                        }}
                    >
                        View Details
                    </a>
                </div>
            </div>
        </div>
    );
};

export default LaptopCard;
