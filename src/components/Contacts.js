import React from "react";
import styled from "styled-components";

const ContactsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 508px;
  background: #1a1a1a;

  @media (max-width: 768px) {
    height: 100%;
    min-height: 508px;
    padding: 20px;
  }
`;

const Subscribe = styled.form`
  display: flex;
  justify-content: space-around;
  width: 600px;
  margin-bottom: 80px;

  input[type="email"] {
    font-family: "Montserrat", sans-serif;
    font-weight: 400;
    color: #fff;
    background-color: transparent;
    border: none;
    border: 1px solid #999999;
    padding: 10px 15px;
    width: 400px;
    -webkit-appearance: none;
  }

  input[type="email"]::placeholder {
    color: #55565b;
  }

  button {
    font-family: "Montserrat", sans-serif;
    font-size: 15px;
    text-transform: uppercase;
    color: #fff;
    background: #f85252;
    border: none;
    padding: 11px 40px;
    transition: background-color 0.5s;
  }

  button:hover {
    background-color: #f61a1a;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    width: 80%;
    flex-direction: column;

    input[type="email"] {
      width: 100%;
      margin-bottom: 20px;
    }
  }
`;

const Details = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 70%;
  margin-bottom: 80px;
`;

const Contact = styled.div`
  display: flex;
  align-items: center;
  font-family: "Montserrat", sans-serif;
  font-size: 15px;

  a {
    margin-left: 25px;
  }

  a:link,
  a:visited,
  a:hover,
  a:active {
    text-decoration: none;
    color: #55565b;
  }

  &:hover a {
    color: chocolate;
  }

  @media (max-width: 768px) {
    a {
      font-size: 13px;
    }
  }
`;

const Social = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

const SocialItem = styled.li`
  float: left;
  padding: 0 25px;
  line-height: 50px;

  a {
    vertical-align: baseline;
  }

  @media (max-width: 420px) {
    width: 100%;
    text-align: center;
  }
`;

const submitForm = e => {
  e.preventDefault();
};

const socialLinks = [
  {
    name: "facebook",
    icon: "facebook.png"
  },
  {
    name: "twitter",
    icon: "twitter.png"
  },
  {
    name: "dribble",
    icon: "dribble.png"
  },
  {
    name: "google",
    icon: "google.png"
  },
  {
    name: "youtube",
    icon: "youtube.png"
  }
];

const Contacts = () => {
  return (
    <ContactsWrapper>
      <Subscribe method="" action="">
        <input type="email" name="email" placeholder="Email Address" />
        <button onClick={submitForm}>Subscribe</button>
      </Subscribe>
      <Details>
        <Contact>
          <img src="../img/phone_icon.png" alt="Phone Icon" />
          <a href="tel:+99877654321098">998 776 54321098</a>
        </Contact>
        <Contact>
          <img src="../img/mail_icon.png" alt="Mail Icon" />
          <a href="mailto:gonex@mail.com">gonex@mail.com</a>
        </Contact>
        <Contact>
          <img src="../img/map_icon.png" alt="Map Icon" />
          <a href="">787 Gonex Avenue,New York</a>
        </Contact>
      </Details>

      <Social>
        {socialLinks.map(({ name, icon }, index) => (
          <SocialItem key={index}>
            <a href="">
              <img src={`../img/${icon}`} alt={name} />
            </a>
          </SocialItem>
        ))}
      </Social>
    </ContactsWrapper>
  );
};

export default Contacts;
