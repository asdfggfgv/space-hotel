import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Rocket, ArrowLeft } from 'lucide-react';
import { Button } from '../components/ui/button';

const ComingSoon = () => {
  const navigate = useNavigate();

  return (
    <div className="coming-soon-page">
      <div className="coming-soon-content">
        <Rocket size={120} className="coming-soon-icon" />
        <h1 className="coming-soon-title">BOOKING SYSTEM LAUNCHING SOON</h1>
        <p className="coming-soon-description">
          Our advanced reservation system is currently under development. Soon you'll be able to book your journey to the stars directly through our website.
        </p>
        <p className="coming-soon-subtitle">
          In the meantime, please contact our team at <span className="highlight">reservations@stellarhaven.space</span> for booking inquiries.
        </p>
        <Button onClick={() => navigate('/')} className="btn-primary">
          <ArrowLeft size={20} />
          Back to Home
        </Button>
      </div>
    </div>
  );
};

export default ComingSoon;
