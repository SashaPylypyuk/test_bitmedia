import React from 'react';
import '../styles/style.css';
import group13 from '../images/Group 13.svg';
import group14 from '../images/Group 14.svg';
import group15 from '../images/Group 15.svg';

export const About = () => (
  <section className="about">
    <h1 className="about__text--header">
      Why
      <strong> small business owners love </strong>
      AppCo?
    </h1>
    <p className="about__text--description">
      Our design projects are fresh and simple and will
      benefit your business greatly. Learn more about our work!
    </p>
    <div className="about__cards">
      <div className="card">
        <img alt="icon" className="card__image" src={group13} />
        <p className="card__text--header">
          Clean Design
        </p>
        <p className="card__text--description">
          Increase sales by showing true dynamics of your website.
        </p>
      </div>
      <div className="card">
        <img alt="icon" className="card__image" src={group15} />
        <p className="card__text--header">
          Secure Data
        </p>
        <p className="card__text--description">
          Build your online store’s trust using Social Proof & Urgency.
        </p>
      </div>
      <div className="card">
        <img alt="icon" className="card__image" src={group14} />
        <p className="card__text--header">
          Retina Ready
        </p>
        <p className="card__text--description">
          Realize importance of social proof in customer’s purchase decision.
        </p>
      </div>
    </div>
  </section>
);
