import React from 'react';

interface Option {
    label: string;
    value: any;
    icon?: string;
    desc?: string;
    features?: string[]; // Added support for feature lists
    color?: string;
}

interface QuestionCardProps {
    question: string;
    subtext?: string; // Added subtext support
    options: Option[];
    onSelect: (value: any) => void;
    currentValue?: any;
    gridCols?: number;
    tip?: string; // Added tip support
}

const QuestionCard: React.FC<QuestionCardProps> = ({ question, subtext, options, onSelect, currentValue, gridCols = 3, tip }) => {
    return (
        <div className="fade-in" style={{
            textAlign: 'center',
            maxWidth: '1000px',
            margin: '0 auto',
            padding: '1rem'
        }}>
            <div className="glass-card" style={{
                padding: '3rem 2rem',
                border: '1px solid #f1f5f9',
                backgroundColor: 'white',
                boxShadow: '0 20px 50px rgba(0,0,0,0.03)'
            }}>
                <h2 style={{
                    fontSize: '2rem',
                    marginBottom: '0.75rem',
                    fontWeight: 700,
                    color: 'var(--text-main)',
                    letterSpacing: '-0.02em'
                }}>
                    {question}
                </h2>
                {subtext && (
                    <p style={{ color: 'var(--text-muted)', marginBottom: '3rem', fontSize: '1rem', maxWidth: '600px', margin: '0 auto 3rem' }}>
                        {subtext}
                    </p>
                )}

                {tip && (
                    <div style={{
                        background: '#fffbeb',
                        border: '1px solid #fef3c7',
                        borderRadius: 'var(--radius-md)',
                        padding: '1rem 1.5rem',
                        marginBottom: '2.5rem',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.75rem',
                        textAlign: 'left',
                        fontSize: '0.9rem',
                        color: '#92400e',
                        maxWidth: '600px',
                        margin: '0 auto 2.5rem'
                    }}>
                        <span style={{ fontSize: '1.25rem' }}>💡</span>
                        <p><strong>Pro-Tip:</strong> {tip}</p>
                    </div>
                )}

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: `repeat(auto-fit, minmax(${gridCols === 2 ? '300px' : '220px'}, 1fr))`,
                    gap: '1.5rem',
                    justifyContent: 'center'
                }}>
                    {options.map((option) => {
                        const isSelected = currentValue === option.value;

                        return (
                            <button
                                key={option.label}
                                onClick={() => onSelect(option.value)}
                                className="option-card"
                                style={{
                                    background: 'white',
                                    border: isSelected ? '2px solid var(--primary)' : '1px solid #f1f5f9',
                                    borderRadius: 'var(--radius-lg)',
                                    padding: '2.5rem 1.5rem',
                                    textAlign: 'center',
                                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                    boxShadow: isSelected ? 'var(--shadow-hover)' : 'var(--shadow-sm)',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    gap: '1.25rem',
                                    position: 'relative'
                                }}
                            >
                                <div style={{
                                    width: '70px',
                                    height: '70px',
                                    borderRadius: '20px',
                                    backgroundColor: option.color || '#f8fafc',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '2rem',
                                    boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.02)'
                                }}>
                                    {option.icon}
                                </div>

                                <div style={{ width: '100%' }}>
                                    <span style={{
                                        fontSize: '1.15rem',
                                        fontWeight: 700,
                                        display: 'block',
                                        color: 'var(--text-main)',
                                        marginBottom: '0.5rem'
                                    }}>
                                        {option.label}
                                    </span>

                                    {option.desc && !option.features && (
                                        <span style={{
                                            fontSize: '0.85rem',
                                            color: 'var(--text-muted)',
                                            lineHeight: 1.5,
                                            display: 'block'
                                        }}>
                                            {option.desc}
                                        </span>
                                    )}

                                    {option.features && (
                                        <div style={{
                                            textAlign: 'left',
                                            marginTop: '0.5rem',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            gap: '0.4rem'
                                        }}>
                                            {option.features.map(f => (
                                                <div key={f} style={{
                                                    fontSize: '0.8rem',
                                                    color: 'var(--text-muted)',
                                                    display: 'flex',
                                                    gap: '0.5rem',
                                                    alignItems: 'flex-start'
                                                }}>
                                                    <span style={{ color: '#22c55e' }}>✓</span>
                                                    <span>{f}</span>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>

                                {isSelected && (
                                    <div style={{
                                        position: 'absolute',
                                        top: '12px',
                                        right: '12px',
                                        background: 'var(--primary)',
                                        color: 'white',
                                        borderRadius: '50%',
                                        width: '24px',
                                        height: '24px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        fontSize: '0.8rem',
                                        boxShadow: isSelected
                                            ? '0 15px 30px -10px rgba(147, 51, 234, 0.25)'
                                            : '0 4px 6px -1px rgba(0,0,0,0.05)',
                                    }}>✓</div>
                                )}
                            </button>
                        );
                    })}
                </div>
            </div>

            <style>{`
                .option-card:hover {
                    transform: translateY(-8px);
                    border-color: var(--primary);
                    box-shadow: var(--shadow-hover);
                }
                .option-card:active {
                    transform: translateY(-2px);
                }
            `}</style>
        </div>
    );
};

export default QuestionCard;
