import React from 'react';
import styled from 'styled-components';
import AnimatedBackground from './AnimatedBackground';


const DEFAULT_IMAGES = [
  'event/img1.avif',
  'event/img2.avif',
  'event/img3.avif',
  'event/img4.avif',
  'event/img5.avif',
];


const EventCard = ({ images = DEFAULT_IMAGES }) => {
  const quantity = images.length;

  return (
    <StyledWrapper>
      <div className="bg-wrapper bg-transparent">
        <AnimatedBackground />
        <div className="inner" style={{ '--quantity': quantity }}>
          {images.map((src, index) => (
            <div
              className="card"
              key={index}
              style={{
                '--index': index,
              }}
            >
              <div className="img" style={{ backgroundImage: `url(${src})` }} />
            </div>
          ))}
        </div>
        <div className="overlay" />
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`

  .bg-wrapper {
    position: fixed;
    inset: 0;
    width: 100vw;
    top: -200px;
    height: 130vh;
    z-index: -1;
    background: transparent;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    pointer-events: none; /* let clicks pass through to page content */
  }

  /* darkens the carousel so foreground text/cards stay readable */
  .overlay {
    position: absolute;
    inset: 0;
    background: rgba(8, 8, 8, 0.24);
    z-index: 2;
  }

  .inner {
    --w: 185px;
    --h: 240px;   /* 135:240 = 9:16 */
    --translateZ: calc((var(--w) + var(--h)) + 60px);
    --rotateX: -10deg;
    --perspective: 1200px;
    position: relative;
    width: var(--w);
    height: var(--h);
    z-index: 1;
    transform-style: preserve-3d;
    transform: perspective(var(--perspective));
    animation: rotating 28s linear infinite;
  }

  @keyframes rotating {
    from {
      transform: perspective(var(--perspective)) rotateX(var(--rotateX)) rotateY(0);
    }
    to {
      transform: perspective(var(--perspective)) rotateX(var(--rotateX)) rotateY(1turn);
    }
  }

  .card {
    position: absolute;
    border: 2px solid rgba(var(--color-card), 0.5);
    border-radius: 12px;
    overflow: hidden;
    inset: 0;
    transform: rotateY(calc((360deg / var(--quantity)) * var(--index)))
      translateZ(var(--translateZ));
  }

  .img {
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    filter: brightness(0.8) ;
  }

  @media (max-width: 600px) {
    .inner {
        --w: 100px;
        --h: 160px;
    }
  }
`;

export default EventCard;