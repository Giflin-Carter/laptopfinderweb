import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'accent' | 'outline';
    size?: 'sm' | 'md' | 'lg';
    fullWidth?: boolean;
    to?: string;
    children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
    variant = 'primary',
    size = 'md',
    fullWidth = false,
    to,
    children,
    className = '',
    style = {},
    ...props
}) => {
    const getVariantClass = () => {
        switch (variant) {
            case 'primary': return 'btn-primary';
            case 'secondary': return 'btn-secondary';
            case 'accent': return 'btn-accent';
            case 'outline': return 'btn-outline';
            default: return 'btn-primary';
        }
    };

    const getSizeStyle = () => {
        switch (size) {
            case 'sm': return { padding: '0.5rem 1rem', fontSize: '0.85rem' };
            case 'md': return { padding: '0.75rem 2rem', fontSize: '1rem' };
            case 'lg': return { padding: '1rem 3rem', fontSize: '1.1rem' };
            default: return {};
        }
    };

    const combinedStyle = {
        width: fullWidth ? '100%' : 'auto',
        ...getSizeStyle(),
        ...style
    };

    const combinedClassName = `btn ${getVariantClass()} ${className}`;

    if (to) {
        return (
            <Link to={to} className={combinedClassName} style={combinedStyle}>
                {children}
            </Link>
        );
    }

    return (
        <button className={combinedClassName} style={combinedStyle} {...props}>
            {children}
        </button>
    );
};

export default Button;
