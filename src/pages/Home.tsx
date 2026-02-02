import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import QuestionCard from '../components/QuestionCard';

const Home = () => {
    const navigate = useNavigate();
    const [step, setStep] = useState(1);
    const [answers, setAnswers] = useState({
        course: '',
        budget: '',
        programming: false,
        gaming: false,
        type: 'both'
    });

    const handleAnswer = (key: string, value: any) => {
        setAnswers(prev => ({ ...prev, [key]: value }));
        // Brief delay for visual feedback before auto-advancing (optional)
        // setTimeout(() => {
        //     if (step < 5) setStep(step + 1);
        // }, 300);
    };

    const handleNext = () => {
        if (step < 5) {
            setStep(step + 1);
        } else {
            finishQuiz(answers);
        }
    };

    const handleBack = () => {
        if (step > 1) setStep(step - 1);
    };

    const finishQuiz = (finalAnswers: typeof answers) => {
        let budgetMin = 0, budgetMax = 200000;

        switch (finalAnswers.budget) {
            case 'under40': budgetMax = 40000; break;
            case '40to75': budgetMin = 40000; budgetMax = 75000; break;
            case '75to100': budgetMin = 75000; budgetMax = 100000; break;
            case '100to150': budgetMin = 100000; budgetMax = 150000; break;
            case 'above150': budgetMin = 150000; budgetMax = 300000; break;
            default: budgetMax = 100000;
        }

        const queryState = {
            course: finalAnswers.course,
            budgetMin,
            budgetMax,
            programming: finalAnswers.programming,
            gaming: finalAnswers.gaming,
            type: finalAnswers.type
        };

        navigate('/recommendations', { state: queryState });
    };

    const isStepComplete = () => {
        if (step === 1) return answers.course !== '';
        if (step === 2) return answers.budget !== '';
        // Programming and Gaming are booleans and default to false, 
        // but it's better to ensure the user actually made a choice if we changed to string.
        // For now, we'll allow Next once at least one option is picked or it persists.
        return true;
    };

    return (
        <div style={{ paddingBottom: '5rem' }}>
            {/* Smooth Progress Bar Container */}
            <div style={{
                maxWidth: '1000px',
                margin: '0 auto 2rem',
                padding: '0 1rem',
                position: 'relative'
            }}>
                <div style={{
                    width: '100%',
                    height: '8px',
                    background: '#f1f5f9',
                    borderRadius: '20px',
                    overflow: 'hidden',
                    boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.05)'
                }}>
                    <div style={{
                        width: `${(step / 5) * 100}%`,
                        height: '100%',
                        background: 'linear-gradient(90deg, #6366f1 0%, #ec4899 50%, #06b6d4 100%)',
                        borderRadius: '20px',
                        transition: 'width 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)'
                    }} />
                </div>
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginTop: '0.75rem',
                    color: 'var(--text-light)',
                    fontSize: '0.85rem',
                    fontWeight: 600
                }}>
                    <span>Step {step} of 5</span>
                    <span>{Math.round((step / 5) * 100)}% Complete</span>
                </div>
            </div>

            {step === 1 && (
                <QuestionCard
                    question="What course are you studying?"
                    subtext="Select the option that best fits your current educational path"
                    currentValue={answers.course}
                    options={[
                        { label: 'Engineering', value: 'Engineering', icon: '⚙️', color: '#fee2e2', desc: 'B.Tech / B.E (Coding & Sims)' },
                        { label: 'Arts & Science', value: 'Arts', icon: '🎨', color: '#e0f2fe', desc: 'B.A / B.Com / B.Sc' },
                        { label: 'Medical', value: 'Science', icon: '⚕️', color: '#dcfce7', desc: 'MBBS / Nursing / Pharma' },
                        { label: 'Management', value: 'Management', icon: '💼', color: '#fef9c3', desc: 'MBA / BBA / Business' },
                        { label: 'School Student', icon: '🎓', value: 'School', color: '#f3e8ff', desc: 'Assignments & Online classes' }
                    ]}
                    onSelect={(val) => handleAnswer('course', val)}
                />
            )}

            {step === 2 && (
                <QuestionCard
                    question="What's your budget range?"
                    subtext="Select various price points that fit your current financial plan"
                    currentValue={answers.budget}
                    options={[
                        { label: 'Under ₹40,000', value: 'under40', icon: '💰', color: '#fef2f2', desc: 'Budget friendly' },
                        { label: '₹40k - ₹75k', value: '40to75', icon: '💸', color: '#fff7ed', desc: 'Mid-range performance' },
                        { label: '₹75k - ₹1.0L', value: '75to100', icon: '💎', color: '#ecfdf5', desc: 'Premium productivity' },
                        { label: '₹1.0L - ₹1.5L', value: '100to150', icon: '🏆', color: '#eff6ff', desc: 'High-end specs' },
                        { label: 'Above ₹1.5L', value: 'above150', icon: '🔥', color: '#fff1f2', desc: 'Ultimate power' }
                    ]}
                    onSelect={(val) => handleAnswer('budget', val)}
                />
            )}

            {step === 3 && (
                <QuestionCard
                    question="Will you do programming?"
                    subtext="Help us understand if coding will be part of your laptop's use life"
                    currentValue={answers.programming}
                    gridCols={2}
                    options={[
                        { label: 'Yes, I will', value: true, icon: '✅', color: '#f0fdf4', desc: 'I need to run code & IDEs' },
                        { label: 'No, I won\'t', value: false, icon: '❌', color: '#fef2f2', desc: 'Just regular documents' }
                    ]}
                    onSelect={(val) => handleAnswer('programming', val)}
                />
            )}

            {step === 4 && (
                <QuestionCard
                    question="Will you do gaming or video editing?"
                    subtext="Help us recommend the right hardware specs for your needs"
                    currentValue={answers.gaming}
                    gridCols={2}
                    tip="Dedicated Graphics Card (GPU) is highly recommended for heavy gaming or 4K video editing."
                    options={[
                        { label: 'Yes, I edit/game', value: true, icon: '🎮', color: '#fff7ed', desc: 'High performance needed' },
                        { label: 'No, I don\'t', value: false, icon: '📺', color: '#f8fafc', desc: 'Movies and browsing only' }
                    ]}
                    onSelect={(val) => handleAnswer('gaming', val)}
                />
            )}

            {step === 5 && (
                <QuestionCard
                    question="What's your laptop preference?"
                    subtext="We can find the perfect match for you and your budget"
                    currentValue={answers.type}
                    options={[
                        {
                            label: 'New Laptop',
                            value: 'new',
                            icon: '🆕',
                            color: '#f0f9ff',
                            features: ['Full warranty and support', 'Latest hardware features', 'Official brand guarantee']
                        },
                        {
                            label: 'Second-Hand Laptop',
                            value: 'second-hand',
                            icon: '♻️',
                            color: '#f0fdf4',
                            features: ['Significant cost savings', 'Environmentally conscious', 'High-end for less money']
                        },
                        {
                            label: 'Both are Okay',
                            value: 'both',
                            icon: '🤝',
                            color: '#fffbeb',
                            features: ['Maximum choice available', 'Tailored options for you', 'Flexible with budget/specs']
                        }
                    ]}
                    onSelect={(val) => handleAnswer('type', val)}
                />
            )}

            <div style={{
                maxWidth: '1000px',
                margin: '2rem auto 0',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '0 1rem'
            }}>
                <button
                    onClick={handleBack}
                    style={{
                        background: 'none',
                        border: 'none',
                        color: 'var(--text-muted)',
                        fontSize: '0.9rem',
                        fontWeight: 600,
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        cursor: 'pointer',
                        padding: '0.5rem',
                        opacity: step === 1 ? 0 : 1,
                        visibility: step === 1 ? 'hidden' : 'visible',
                        transition: 'all 0.2s'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.color = 'var(--primary)'}
                    onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-muted)'}
                >
                    <span>←</span> Back
                </button>

                <Button
                    onClick={handleNext}
                    disabled={!isStepComplete()}
                    size="lg"
                    style={{
                        minWidth: '160px',
                        borderRadius: 'var(--radius-lg)'
                    }}
                >
                    {step < 5 ? 'Continue' : 'Show Recommendations'}
                </Button>
            </div>
        </div>
    );
};

export default Home;
