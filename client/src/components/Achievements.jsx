import React from 'react';
import { Trophy, Award, GraduationCap, Rocket, Users, BookOpen } from 'lucide-react';

const achievements = [
  {
    id: 1,
    img: '/Achievements/Anbu.png',
    title: 'AWS Solutions Architect',
    category: 'CERTIFICATION',
    date: 'AUG 2019',
    description: 'Passed the professional-level exam on the first attempt and re-architected our staging environment around it.',
  },
  {
    id: 2,
    img: '/Achievements/Oscar.png',
    title: 'Shipped v1.0 Solo',
    category: 'MILESTONE',
    date: 'MAR 2020',
    description: 'Built and launched a scheduling tool end to end — design, backend, and support docs — in one quarter.',
  },
  {
    id: 3,
    img: '/Achievements/STJ.png',
    title: 'Studio Innovation Prize',
    category: 'AWARD',
    date: 'JUN 2021',
    description: 'Runner-up out of forty submissions for a prototype that cut onboarding time from twenty minutes to three.',
  },
  {
    id: 4,
    img: '/Achievements/Oscar-Tab.png',
    title: 'Featured in Field Notes',
    category: 'PUBLICATION',
    date: 'NOV 2022',
    description: 'Wrote a long-form piece on offline-first mobile design, later cited in two conference talks.',
  },
  {
    id: 5,
    img: '/Achievements/OscarMoU.png',
    title: 'Hack Night — 1st Place',
    category: 'COMPETITION',
    date: 'SEP 2023',
    description: 'Teamed up with two strangers at 9pm and shipped a working accessibility checker by sunrise.',
  },
];

function Card({ title, category, date, description, img }) {
  return (
    <div className="card">
      {/* <Icon className="img" strokeWidth={1.5} /> */}
      <img src={img} alt={title} className="img" />
      <div className="textBox">
        <span className="category">{category}</span>
        <p className="text head">{title}</p>
        <p className="description">{description}</p>
        <p className="text price">{date}</p>
      </div>
    </div>
  );
}

export default function AchievementsComponent() {
  return (
    <div className="page">
      <style>{`
       @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400;1,600&family=DM+Sans:ital,wght@0,300;0,400;0,500;0,600;1,300&family=Cinzel:wght@600;700&display=swap');

        .about-page { font-family: 'DM Sans', sans-serif; }

        .font-display { font-family: 'Cormorant Garamond', serif; }
        .font-cinzel  { font-family: 'Cinzel', serif; }
        .page {
          min-height: 100vh;
          background: #1c1c1c;
          padding: 60px 24px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .heading {
          color: white;
          font-size: 50px;
          font-weight: bold;
          margin-bottom: 8px;
          text-align: center;
          font-family: 'Cormorant Garamond', serif;
        }
        .subheading {
          color: #9a9a9a;
          font-size: 14px;
          margin-bottom: 48px;
          text-align: center;
        }

        .grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 36px;
          max-width: 1080px;
          width: 100%;
        }
        @media (max-width: 900px) {
          .grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 600px) {
          .grid {
            grid-template-columns: 1fr;
          }
        }
        .card {
          position: relative;
          width: 100%;
          height: 340px;
          background: #313131;
          border-radius: 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          color: white;
          transition: 0.2s ease-in-out;
          overflow: hidden;
        }
        .img {
          width: 100%;
          height: 100%;
          position: absolute;
          color: #c6a15b;
          transition: 0.2s ease-in-out;
          z-index: 1;
        }
        .textBox {
          opacity: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 0 28px;
          transition: 0.2s ease-in-out;
          z-index: 2;
          text-align: center;
        }
        .textBox > .text {
          font-weight: bold;
        }
        .textBox > .head {
          font-size: 20px;
        }
        .textBox > .price {
          font-size: 15px;
          color: #c6a15b;
          margin-top: 4px;
        }
        .textBox > .category {
          font-size: 11px;
          letter-spacing: 0.1em;
          color: lightgrey;
        }
        .textBox > .description {
          font-size: 13px;
          line-height: 1.5;
          color: #000000;
        }
        .card:hover > .textBox {
          opacity: 1;
        }
        .card:hover > .img {
          transform: scale(2.1);
          filter: blur(7px);
          animation: anim 3s infinite;
        }
        @keyframes anim {
          0% { transform: scale(2.1) translateY(0); }
          50% { transform: scale(2.1) translateY(-20px); }
          100% { transform: scale(2.1) translateY(0); }
        }
        .card:hover {
          transform: scale(1.03) rotate(-1deg);
        }
      `}</style>

      <h1 className="heading">Achievements</h1>
      <p className="subheading">Hover a card to reveal the details</p>

      <div className="grid">
        {achievements.map((a) => (
          <Card
            key={a.id}
            title={a.title}
            category={a.category}
            date={a.date}
            description={a.description}
            img={a.img}
          />
        ))}
      </div>
    </div>
  );
}