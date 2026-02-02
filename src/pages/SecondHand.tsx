import { useState } from 'react';
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';

const secondHandLaptops = [
    {
        id: 1,
        model: 'MacBook Pro 14" M1 Pro',
        listedDaysAgo: 2,
        seller: 'Rajesh Kumar',
        sellerVerified: true,
        area: 'Mumbai, Maharashtra',
        price: 89999,
        originalPrice: 149000,
        condition: 'EXCELLENT',
        tags: ['16GB RAM', '512GB SSD', '2022 Model'],
        description: 'Barely used MacBook Pro in pristine condition. Purchased in Jan 2023, used only for light browsing and document work. Comes with original box, charger, and all accessories. AppleCare+ valid until Jan 2026. Battery health at 98%. No scratches or dents.',
        highlights: [
            'Original box and all accessories included',
            'AppleCare+ warranty until Jan 2026',
            'Battery health: 98% - Like new performance',
            'Original purchase receipt available'
        ],
        phone: '+91 98400 12345',
        colorTheme: '#ff8a80' // Salmon/Pink
    },
    {
        id: 2,
        model: 'Dell XPS 15 9520',
        listedDaysAgo: 5,
        seller: 'Priya Sharma',
        sellerVerified: true,
        area: 'Bangalore, Karnataka',
        price: 95000,
        originalPrice: 165000,
        condition: 'EXCELLENT',
        tags: ['32GB RAM', '1TB SSD', 'i7-12700H'],
        description: 'Premium Dell XPS 15 with powerful specs for engineering students. Used for 8 months, maintained in excellent condition. Perfect for CAD software, programming, and heavy multitasking. Comes with Dell Premium Support until 2025. Minor wear on palm rest, screen is flawless.',
        highlights: [
            'Dell Premium Support warranty until Dec 2025',
            '4K OLED touchscreen in perfect condition',
            'Upgraded to 32GB RAM for better performance',
            'Original charger and carrying case included'
        ],
        phone: '+91 99620 54321',
        colorTheme: '#4db6ac' // Teal
    }
];

export default function SecondHand() {
    const navigate = useNavigate();
    const [visibleContacts, setVisibleContacts] = useState<number[]>([]);

    const toggleContact = (id: number) => {
        if (visibleContacts.includes(id)) {
            setVisibleContacts(visibleContacts.filter(cId => cId !== id));
        } else {
            setVisibleContacts([...visibleContacts, id]);
        }
    };

    return (
        <div style={{
            padding: '2rem 1.5rem',
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            background: '#f8faff'
        }}>
            {/* Header section with icon */}
            <div style={{
                background: 'white',
                padding: '2rem',
                borderRadius: '1.5rem',
                width: '100%',
                maxWidth: '800px',
                display: 'flex',
                alignItems: 'center',
                gap: '1.5rem',
                marginBottom: '2rem',
                boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)'
            }}>
                <div style={{
                    background: '#fce4ec',
                    padding: '1rem',
                    borderRadius: '1.25rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <span style={{ fontSize: '2rem' }}>💻</span>
                </div>
                <div>
                    <h1 style={{ fontSize: '1.75rem', fontWeight: 800, margin: 0, color: '#1e293b' }}>
                        Second-Hand Laptops
                    </h1>
                    <p style={{ color: '#64748b', fontSize: '0.95rem', margin: '0.25rem 0 0 0' }}>
                        Verified sellers offering quality pre-owned laptops at great prices
                    </p>
                </div>
            </div>

            {/* Filters Row */}
            <div style={{
                display: 'flex',
                gap: '1rem',
                width: '100%',
                maxWidth: '800px',
                marginBottom: '1.5rem'
            }}>
                <Button variant="secondary" size="sm">All Listings</Button>
                <Button variant="outline" size="sm">Excellent Only</Button>
                <Button variant="outline" size="sm">Good Condition</Button>
            </div>

            {/* Safety Alert */}
            <div style={{
                background: '#fff9e6',
                border: '1px solid #ffecb3',
                borderRadius: '1rem',
                padding: '1.25rem',
                width: '100%',
                maxWidth: '800px',
                display: 'flex',
                gap: '1rem',
                marginBottom: '2rem'
            }}>
                <span style={{ fontSize: '1.2rem' }}>⚠️</span>
                <div style={{ fontSize: '0.85rem', color: '#856404', lineHeight: 1.5 }}>
                    <strong>Buying Second-Hand Safely</strong><br />
                    All sellers are verified. Meet in safe public locations, test the laptop thoroughly before purchase, and request original receipts when available.
                </div>
            </div>

            <div className="container" style={{ maxWidth: '800px', width: '100%' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
                    {secondHandLaptops.map((laptop, index) => {
                        const isContactVisible = visibleContacts.includes(laptop.id);
                        const discount = laptop.originalPrice - laptop.price;
                        const discountPercent = Math.round((discount / laptop.originalPrice) * 100);

                        return (
                            <div key={laptop.id} className="fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                                <div style={{
                                    background: 'white',
                                    borderRadius: '1.5rem',
                                    padding: '2.5rem',
                                    boxShadow: '0 10px 30px -10px rgba(0,0,0,0.08)',
                                    border: '1px solid #f1f5f9',
                                    position: 'relative',
                                    overflow: 'hidden',
                                    borderTop: `4px solid ${laptop.colorTheme}`
                                }}>
                                    {/* Header Section: Model + Price */}
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
                                        <div>
                                            <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#1e293b', marginBottom: '0.5rem' }}>
                                                {laptop.model}
                                            </h3>
                                            <div style={{ color: '#64748b', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                                <span>🕒 Listed {laptop.listedDaysAgo} days ago</span>
                                                <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                                                    👤 {laptop.seller} {laptop.sellerVerified && <span style={{ color: '#10b981', fontSize: '1.1rem' }}>✓</span>}
                                                </span>
                                            </div>
                                            <div style={{ color: '#64748b', fontSize: '0.85rem', marginTop: '0.4rem' }}>
                                                📍 {laptop.area}
                                            </div>
                                        </div>
                                        <div style={{ textAlign: 'right' }}>
                                            <div style={{ fontSize: '2rem', fontWeight: 900, color: '#1e293b' }}>
                                                ₹{laptop.price.toLocaleString()}
                                            </div>
                                            <div style={{ color: '#94a3b8', fontSize: '0.85rem', textDecoration: 'line-through' }}>
                                                ₹{laptop.originalPrice.toLocaleString()}
                                            </div>
                                            <div style={{ color: '#10b981', fontSize: '0.85rem', fontWeight: 600 }}>
                                                Save ₹{discount.toLocaleString()} ({discountPercent}%)
                                            </div>
                                        </div>
                                    </div>

                                    {/* Config Tags */}
                                    <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '2rem' }}>
                                        <span style={{
                                            fontSize: '0.75rem',
                                            fontWeight: 700,
                                            background: '#e0f2f1',
                                            color: '#00796b',
                                            padding: '0.4rem 1rem',
                                            borderRadius: '0.75rem',
                                        }}>
                                            {laptop.condition}
                                        </span>
                                        {laptop.tags.map(tag => (
                                            <span key={tag} style={{
                                                fontSize: '0.75rem',
                                                fontWeight: 600,
                                                background: '#f1f5f9',
                                                color: '#64748b',
                                                padding: '0.4rem 1rem',
                                                borderRadius: '0.75rem',
                                            }}>
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Description */}
                                    <div style={{ color: '#475569', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                                        {laptop.description}
                                    </div>

                                    {/* Highlights */}
                                    <div style={{ marginBottom: '2.5rem' }}>
                                        {laptop.highlights.map((highlight, idx) => (
                                            <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem', color: '#1c9d64', fontSize: '0.9rem', fontWeight: 500 }}>
                                                <span>✓</span>
                                                <span style={{ color: '#64748b' }}>{highlight}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <Button
                                        onClick={() => toggleContact(laptop.id)}
                                        variant={isContactVisible ? 'outline' : 'primary'}
                                        fullWidth
                                        size="lg"
                                        style={{
                                            borderRadius: '1.25rem',
                                            fontWeight: 800,
                                            background: isContactVisible ? '#f8fafc' : laptop.colorTheme,
                                            color: isContactVisible ? '#64748b' : 'white',
                                            boxShadow: isContactVisible ? 'none' : '0 10px 15px -3px rgba(147, 51, 234, 0.4)'
                                        }}
                                        onMouseEnter={(e) => {
                                            if (!isContactVisible) {
                                                e.currentTarget.style.transform = 'translateY(-2px)';
                                                e.currentTarget.style.filter = 'brightness(0.9)';
                                            }
                                        }}
                                        onMouseLeave={(e) => {
                                            if (!isContactVisible) {
                                                e.currentTarget.style.transform = 'translateY(0)';
                                                e.currentTarget.style.filter = 'brightness(1)';
                                            }
                                        }}
                                    >
                                        <span>📞</span> {isContactVisible ? laptop.phone : 'Contact Seller'}
                                    </Button>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Floating Back Button */}
            <button
                onClick={() => navigate(-1)}
                style={{
                    position: 'fixed',
                    bottom: '2.5rem',
                    left: '2.5rem',
                    background: 'white',
                    border: '1px solid #e2e8f0',
                    padding: '0.85rem 1.5rem',
                    borderRadius: '1.25rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    boxShadow: '0 10px 25px -5px rgba(0,0,0,0.1)',
                    fontSize: '1rem',
                    fontWeight: 700,
                    color: 'var(--text-muted)',
                    cursor: 'pointer',
                    transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                    zIndex: 50
                }}
                onMouseEnter={(e) => {
                    e.currentTarget.style.color = 'var(--primary)';
                    e.currentTarget.style.borderColor = 'var(--primary)';
                    e.currentTarget.style.transform = 'scale(1.05) translateX(-5px)';
                    e.currentTarget.style.boxShadow = '0 15px 30px -5px rgba(99, 102, 241, 0.2)';
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'var(--text-muted)';
                    e.currentTarget.style.borderColor = '#e2e8f0';
                    e.currentTarget.style.transform = 'scale(1) translateX(0)';
                    e.currentTarget.style.boxShadow = '0 10px 25px -5px rgba(0,0,0,0.1)';
                }}
            >
                <span style={{ fontSize: '1.4rem' }}>‹</span> Back
            </button>
        </div>
    );
}
