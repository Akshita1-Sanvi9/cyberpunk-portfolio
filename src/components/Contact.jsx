import React, { useEffect, useState, useRef } from 'react';
import './Contact.css';

export default function ContactSection() {
  const [lastPing, setLastPing] = useState('');
  const glitchRef = useRef(null);

  // Timestamp logic
  useEffect(() => {
    const now = new Date();
    const formatted = now.toLocaleString('en-IN', {
      weekday: 'short',
      day: 'numeric',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
    setLastPing(formatted);
  }, []);

  // Glitch burst on click
  useEffect(() => {
    const button = glitchRef.current;
    const handleClick = () => {
      button.classList.add('svg-glitch-burst');
      setTimeout(() => button.classList.remove('svg-glitch-burst'), 400);
    };
    button.addEventListener('click', handleClick);
    return () => button.removeEventListener('click', handleClick);
  }, []);

  return (
    <section className="contact-section">
      {/* SVG Filter */}
      <svg style={{ display: 'none' }}>
        <filter id="glitchFilter">
          <feTurbulence type="turbulence" baseFrequency="0.02" numOctaves="3" result="turbulence" />
          <feDisplacementMap in="SourceGraphic" in2="turbulence" scale="20" xChannelSelector="R" yChannelSelector="G" />
          <feColorMatrix type="matrix"
            values="1 0 0 0 0
                    0 1 0 0 0
                    0 0 1 0 0
                    0 0 0 1 0" />
        </filter>
      </svg>

      <h2 className="contact-heading">CONTACT SECTION...</h2>
      <p className="contact-subtext">
        Ready to connect? Drop a line, spark a collab, or just say hi.
      </p>

      <form className="contact-form">
        <input
          type="text"
          placeholder="Your alias"
          className="contact-input"
        />
        <input
          type="email"
          placeholder="Encrypted channel (email)"
          className="contact-input"
        />
        <textarea
          placeholder="Message payload"
          className="contact-textarea"
          rows="5"
        />
        <button
          type="submit"
          className="glitch-button svg-glitch"
          ref={glitchRef}
        >
          <span className="glitch-layer" data-text="Send Signal">Send Signal</span>
          <span className="glitch-layer" data-text="Send Signal">Send Signal</span>
          <span className="glitch-layer" data-text="Send Signal">Send Signal</span>
        </button>
      </form>

      <p className="last-ping">Last ping received: {lastPing}</p>
      <footer className="site-footer">
  <p className="tagline">  If this site feels alive, it’s because I fed it my sleep schedule.</p>
</footer>

    </section>
  );
}

