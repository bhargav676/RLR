import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import gif from '../images/intro.gif'
const IntroPage = () => { 
  const navigate = useNavigate();
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/login');
    }, 5000); 

    return () => clearTimeout(timer); 
  }, [navigate]);
  const styles = {
    pageContainer: {
      position: 'relative',
      height: '100vh',
      color: 'white',
      backgroundImage: `url(${gif})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    },
    heroSection: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
      padding: '0 1.5rem',
      textAlign: 'center',
    },
    title: {
      fontSize: '2.5rem',
      fontWeight: 'bold',
      marginBottom: '1rem',
      animation: 'bounce 2s infinite',
      letterSpacing: '0.1em',
    },
    subtitle: {
      fontSize: '1.25rem',
      fontWeight: '300',
      marginBottom: '2rem',
    },
    button: {
      padding: '0.5rem 2rem',
      backgroundColor: 'rgba(36,174,241,255)',
      color: '#ffffff',
      borderRadius: '9999px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      textDecoration: 'none',
      transition: 'transform 0.3s',
    },
    buttonHover: {
      backgroundColor: '#fcd34d',
      transform: 'scale(1.05)',
    },
    scrollIndicator: {
      position: 'absolute',
      bottom: '1.5rem',
      left: '50%',
      transform: 'translateX(-50%)',
      fontSize: '1.5rem',
      animation: 'bounce 2s infinite',
    },
    featuresSection: {
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'white',
      color: '#1e3a8a',
      padding: '0 1.5rem',
      textAlign: 'center',
    },
    featureCard: {
      backgroundColor: '#3b82f6',
      color: 'white',
      borderRadius: '0.5rem',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      padding: '1.5rem',
      transition: 'transform 0.3s',
      textAlign: 'center',
    },
    featureCardHover: {
      transform: 'scale(1.05)',
    },
  };

  return (
    <div style={styles.pageContainer}>
      <div style={styles.heroSection}>
        <h1 style={styles.title} className='text-[#333333]'>
          Welcome to <span style={{ color: 'rgba(36,174,241,255)' }}>RLR</span>
        </h1>
        <p style={styles.subtitle} className='text-[#333333]'>Your One-Stop Solution for Electronic Components</p>
        <a
          href="/login"
          style={styles.button}
          onMouseEnter={(e) => (e.target.style.transform = 'scale(1.05)')}
          onMouseLeave={(e) => (e.target.style.transform = 'scale(1)')}
        >
          Explore Components
        </a>
      </div>
      <style>{`
        @keyframes moveWires {
          0% { background-position: 0 0; }
          100% { background-position: 100% 100%; }
        }
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(-10px); }
          60% { transform: translateY(-5px); }
        }
      `}</style>
    </div>
  );
};

export default IntroPage;
