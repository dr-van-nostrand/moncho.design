import React from "react";
import styled from "styled-components";
import { Styled } from "../styles";


let FaqSection = (props) => {
  return (
    <Faq>
      <h2>
        Any Questions <span>FAQ</span>
      </h2>
      <div className="question">
        <h4>How do I Start?</h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum,
            autem!
          </p>
        </div>
        <div className="faq-line"></div>
      </div>
      <div className="question">
        <h4>Daily Schedule</h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum,
            autem!
          </p>
        </div>
        <div className="faq-line"></div>

      </div>
      <div className="question">
        <h4>Payments</h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum,
            autem!
          </p>
        </div>
        <div className="faq-line"></div>

      </div>
      <div className="question">
        <h4>What Product do you Offer?</h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum,
            autem!
          </p>
        </div>
        <div className="faq-line"></div>

      </div>
    </Faq>
  );
};

const Faq = styled(Styled)`
  display: block;
  span {
    display: block;
  }
  h2 {
    padding-bottom: 2rem;
    font-weight: 400;
  }
  .faq-line {
    background: #cccccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }
  .question {
    padding: 3rem 0rem;
    cursor: pointer;
  }
  .answer {
    padding: 2rem 0rem;
    p {
      padding: 1rem 0rem;
    }
  }
`;

export default FaqSection;

