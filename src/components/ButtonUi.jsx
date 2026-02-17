import React from 'react';
import styled from 'styled-components';

const Button = () => {
  return (
    <button type="submit" className='flex justify-center gap-2 items-center mx-auto shadow-xl text-lg bg-gray-50 backdrop-blur-md lg:font-semibold isolation-auto border-gray-50 before:absolute before:content-[""] before:w-full before:rounded-full before:h-full before:-z-10 before:-left-50 hover:before:left-0 before:bg-(--color-primary) hover:text-white before:transition-all before:duration-500 relative z-10 px-4 py-2 overflow-hidden border-2 rounded-full group'>
      Explore
      <svg className="w-8 h-8 justify-end group-hover:rotate-90 group-hover:bg-gray-50 text-gray-50 ease-linear duration-300 rounded-full border border-gray-700 group-hover:border-none p-2 rotate-45" viewBox="0 0 16 19" xmlns="http://www.w3.org/2000/svg">
        <path d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z" className="fill-gray-800 group-hover:fill-gray-800" />
      </svg>
    </button>
  );
}

export  {Button};


const NavButtons = ({text}) => {
  return (
    <StyledWrapper>
      <button>
        <span>{text}</span>
      </button>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  button {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50px;
    background: #F8F6F0;
    box-shadow: 0px 6px 24px 0px rgba(0, 0, 0, 0.2);
    overflow: hidden;
    cursor: pointer;
    border: none;
  }

  button:after {
    content: " ";
    width: 0%;
    height: 100%;
    background: #0A4D68;
    position: absolute;
    transition: all 0.4s ease-in-out;
    right: 0;
  }

  button:hover::after {
    right: auto;
    left: 0;
    width: 100%;
  }

  button span {
    text-align: center;
    text-decoration: none;
    width: 100%;
    padding: 7px 25px;
    color: #000;
    font-size: 1.125em;
    font-weight: 700;
    letter-spacing: 0.1em;
    z-index: 20;
    transition: all 0.3s ease-in-out;
  }

  button:hover span {
    color: #fff;
    animation: scaleUp 0.3s ease-in-out;
  }

  @keyframes scaleUp {
    0% {
      transform: scale(1);
    }

    50% {
      transform: scale(0.95);
    }

    100% {
      transform: scale(1);
    }
  }`;

export  {NavButtons};



const RegisterButton = ({text}) => {
  return (
    <RegisterBtnStyledWrapper>
      <div>
        <button className="c-button c-button--gooey"> {text}
          <div className="c-button__blobs">
            <div />
            <div />
            <div />
          </div>
        </button>
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" style={{display: 'block', height: 0, width: 0}}>
          <defs>
            <filter id="goo">
              <feGaussianBlur in="SourceGraphic" stdDeviation={10} result="blur" />
              <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
              <feBlend in="SourceGraphic" in2="goo" />
            </filter>
          </defs>
        </svg>
      </div>
    </RegisterBtnStyledWrapper>
  );
}

const RegisterBtnStyledWrapper = styled.div`
  .c-button {
    color: #000;
    font-weight: 700;
    font-size: 16px;
    text-decoration: none;
    padding: 0.5em 1.6em;
    cursor: pointer;
    display: inline-block;
    vertical-align: middle;
    position: relative;
    z-index: 1;
  }

  .c-button--gooey {
    color: #0A4D68;
    text-transform: uppercase;
    letter-spacing: 2px;
    border: 4px solid #0A4D68;
    border-radius: 0;
    position: relative;
    border-radius: 50px;
    transition: all 700ms ease;
  }

  .c-button--gooey .c-button__blobs {
    height: 100%;
    filter: url(#goo);
    border-radius: 50px;
    overflow: hidden;
    position: absolute;
    top: 0;
    left: 0;
    bottom: -3px;
    right: -1px;
    z-index: -1;
  }

  .c-button--gooey .c-button__blobs div {
    background-color: #0A4D68;
    width: 34%;
    height: 100%;
    border-radius: 100%;
    position: absolute;
    transform: scale(1.4) translateY(125%) translateZ(0);
    transition: all 700ms ease;
  }

  .c-button--gooey .c-button__blobs div:nth-child(1) {
    left: -5%;
  }

  .c-button--gooey .c-button__blobs div:nth-child(2) {
    left: 30%;
    transition-delay: 60ms;
  }

  .c-button--gooey .c-button__blobs div:nth-child(3) {
    left: 66%;
    transition-delay: 25ms;
  }

  .c-button--gooey:hover {
    color: #fff;
  }

  .c-button--gooey:hover .c-button__blobs div {
    transform: scale(1.4) translateY(0) translateZ(0);
  }`;

export  {RegisterButton};
