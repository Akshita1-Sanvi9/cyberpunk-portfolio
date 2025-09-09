import React from 'react';
import './Intro.css';

export default function Intro() {
  return (
    <section className="intro-section">
      <div className="terminal-block">
        <p className="boot-line line-1">&gt; Initializing interface...</p>
        <p className="boot-line line-2">&gt; Loading modules...</p>

        <p className="terminal-line line-3">
          <span className="typing-text glitch">
            &gt; Hello, I am Akshita<span className="cursor">_</span>
          </span>
        </p>

        <p className="terminal-tagline line-4">
          &gt; Compiled in 48 hours. Sleep not included. Sanity questionable.
        </p>
      </div>
    </section>
  );
}
