import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';

const laptopOffers = [
    {
        id: 1,
        name: 'MacBook Air M2',
        badge: '15% OFF',
        newPrice: '₹94,900',
        oldPrice: '₹1,14,900',
        reason: 'Best for college students who need long battery life.',
        detail: 'HDFC Bank Credit Card Discount: ₹5,000 + Instant Store Discount: ₹15,000',
        buttonText: "Today's Deal"
    },
    {
        id: 2,
        name: 'ASUS ROG Zephyrus G14',
        badge: '₹12,000 OFF',
        newPrice: '₹1,14,990',
        oldPrice: '₹1,26,990',
        reason: 'Most powerful compact gaming laptop for engineers.',
        detail: 'Flat ₹12,000 Discount for Student ID holders at Asus Exclusive Stores.',
        buttonText: "Claim Now"
    },
    {
        id: 3,
        name: 'HP Pavilion 15',
        badge: '20% OFF',
        newPrice: '₹52,490',
        oldPrice: '₹65,000',
        reason: 'Perfect all-rounder with a bright 144Hz display.',
        detail: 'Amazon Great Indian Festival Deal: 15% Base Discount + 5% SBI Card Offer.',
        buttonText: "Grab Deal"
    },
    {
        id: 4,
        name: 'Dell XPS 13',
        badge: 'STUDENT DEAL',
        newPrice: '₹1,09,000',
        oldPrice: '₹1,24,000',
        reason: 'Premium ultra-slim design for professional presentations.',
        detail: 'Student Exclusive: Get a free Dell Pro Sleeves and ₹15,000 Cashback on Axis Bank.',
        buttonText: "Student Offer"
    },
    {
        id: 5,
        name: 'Lenovo IdeaPad Slim 5',
        badge: '₹8,000 OFF',
        newPrice: '₹48,990',
        oldPrice: '₹56,990',
        reason: 'Budget-friendly workhorse for social science students.',
        detail: 'Instant ₹8,000 Discount applied at checkout on Lenovo.com for education emails.',
        buttonText: "Redeem Offer"
    },
    {
        id: 6,
        name: 'Acer Nitro 5',
        badge: 'HOT DEAL',
        newPrice: '₹64,990',
        oldPrice: '₹82,000',
        reason: 'Great starter gaming laptop with RTX graphics.',
        detail: 'Limited Time Deal: ₹17,010 Base Discount + No Cost EMI up to 9 months.',
        buttonText: "Hot Price"
    }
];

export default function Offers() {
    const navigate = useNavigate();
    const [revealedOffers, setRevealedOffers] = useState<number[]>([]);

    const toggleOffer = (id: number) => {
        if (revealedOffers.includes(id)) {
            setRevealedOffers(revealedOffers.filter(oId => oId !== id));
        } else {
            setRevealedOffers([...revealedOffers, id]);
        }
    };

    return (
        <div style={{
            padding: '4rem 1.5rem',
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            background: 'var(--background)'
        }}>
            <header style={{ textAlign: 'center', marginBottom: '4rem' }} className="fade-in">
                <div style={{
                    fontSize: '0.9rem',
                    fontWeight: 700,
                    color: '#f43f5e',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    marginBottom: '1rem'
                }}>
                    Limited Time
                </div>
                <h1 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '1rem' }} className="text-gradient">
                    Laptop Deals
                </h1>
                <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>
                    Verified student discounts and price drops across all major platforms.
                </p>
            </header>

            <div className="container" style={{ maxWidth: '1000px', width: '100%' }}>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                    gap: '2.5rem'
                }}>
                    {laptopOffers.map((offer, index) => {
                        const isRevealed = revealedOffers.includes(offer.id);

                        return (
                            <div key={offer.id} className="fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                                <div style={{
                                    background: 'white',
                                    borderRadius: '1.5rem',
                                    padding: '2.5rem',
                                    boxShadow: '0 10px 30px -10px rgba(0,0,0,0.08)',
                                    border: isRevealed ? '2px solid var(--primary)' : '1px solid #f1f5f9',
                                    height: '100%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    transition: 'all 0.3s ease',
                                    position: 'relative',
                                    overflow: 'hidden'
                                }}
                                    onMouseEnter={(e) => {
                                        if (!isRevealed) {
                                            e.currentTarget.style.transform = 'translateY(-8px)';
                                            e.currentTarget.style.boxShadow = '0 20px 40px -15px rgba(0,0,0,0.12)';
                                        }
                                    }}
                                    onMouseLeave={(e) => {
                                        if (!isRevealed) {
                                            e.currentTarget.style.transform = 'translateY(0)';
                                            e.currentTarget.style.boxShadow = '0 10px 30px -10px rgba(0,0,0,0.08)';
                                        }
                                    }}
                                >
                                    {/* Discount Badge */}
                                    <div style={{ marginBottom: '1.5rem' }}>
                                        <span style={{
                                            fontSize: '0.75rem',
                                            fontWeight: 800,
                                            background: '#fff1f2',
                                            color: '#f43f5e',
                                            padding: '0.5rem 1rem',
                                            borderRadius: '2rem',
                                            textTransform: 'uppercase',
                                            letterSpacing: '0.05em',
                                            border: '1px solid #ffe4e6'
                                        }}>
                                            {offer.badge}
                                        </span>
                                    </div>

                                    {/* Model Name */}
                                    <div style={{ marginBottom: '1.5rem' }}>
                                        <h3 style={{
                                            fontSize: '1.75rem',
                                            fontWeight: 800,
                                            marginBottom: '0.75rem',
                                            color: 'var(--text-main)',
                                            lineHeight: 1.2
                                        }}>
                                            {offer.name}
                                        </h3>
                                        <p style={{
                                            color: 'var(--text-muted)',
                                            fontSize: '0.95rem',
                                            lineHeight: 1.5,
                                            margin: 0
                                        }}>
                                            {offer.reason}
                                        </p>
                                    </div>

                                    {/* Reveal Section */}
                                    {isRevealed && (
                                        <div style={{
                                            marginBottom: '1.5rem',
                                            padding: '1rem',
                                            background: '#f5f3ff',
                                            borderRadius: '1rem',
                                            borderLeft: '4px solid var(--primary)',
                                            animation: 'fadeSlideUp 0.3s ease-out'
                                        }}>
                                            <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--primary)', textTransform: 'uppercase', marginBottom: '0.25rem' }}>
                                                Applied Offer Details
                                            </div>
                                            <div style={{ fontSize: '0.9rem', color: '#4c1d95', lineHeight: 1.4 }}>
                                                {offer.detail}
                                            </div>
                                        </div>
                                    )}

                                    {/* Divider */}
                                    <div style={{ height: '1px', background: '#f8fafc', margin: 'auto 0 1.5rem 0' }}></div>

                                    {/* Pricing and CTA */}
                                    <div style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'space-between'
                                    }}>
                                        <div>
                                            <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem' }}>
                                                <span style={{ fontSize: '1.75rem', fontWeight: 900, color: 'var(--primary)' }}>
                                                    {offer.newPrice}
                                                </span>
                                            </div>
                                            <div style={{ fontSize: '0.9rem', textDecoration: 'line-through', color: 'var(--text-light)', fontWeight: 500 }}>
                                                {offer.oldPrice}
                                            </div>
                                        </div>
                                        <Button
                                            onClick={() => toggleOffer(offer.id)}
                                            variant={isRevealed ? 'outline' : 'primary'}
                                            style={{
                                                borderRadius: '1.25rem',
                                                minWidth: '140px'
                                            }}
                                        >
                                            {isRevealed ? 'Hide Offer' : offer.buttonText}
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Back Button */}
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
        </div>
    );
}
