import React from "react";
import styled from "styled-components";

const Cardbox = styled.div`
  background-color: #f8f9fa;
  width: auto;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 2rem;
`;
const Cardbody = styled.div`
  height: 24rem;
  margin: 0.9rem 1rem;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.2rem;
  box-shadow: 0.5px 0.5px 2px 0.5px #dadce0;
`;
const Cardimg = styled.div`
  width: 21.5rem;
  height: 14rem;
  border-top-right-radius: 0.2rem;
  border-top-left-radius: 0.2rem;
  background: url(${(props) => props.imageurl});
  background-position: center;
  background-size: contain;
`;
const Cardtext = styled.div`
  width: 21.5rem;
  height: 9rem;
  background: white;
`;
const CardMaintext = styled.p`
  font-size: 1rem;
  position: relative;
  margin: 1rem;
  line-height: 1.5rem;
`;
const CardDown = styled.div`
  display: flex;
  justify-content: space-between;
`;
const CardB = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0rem 1rem;
  width: 2.75rem;
  height: 2rem;
  text-align: center;
  font-size: 0.9rem;
  font-weight: 400;
`;
const CardButton1 = styled.button`
  border-top-left-radius: 0.25rem;
  border-bottom-left-radius: 0.25rem;
  border: 1px solid #6c757d;
  background-color: white;
  color: #6c757d;
`;
const CardButton2 = styled.button`
  border-top-right-radius: 0.25rem;
  border-bottom-right-radius: 0.25rem;
  border: 1px solid #6c757d;
  background-color: white;
  color: #6c757d;
`;
const CardTime = styled.p`
  font-size: 0.8rem;
  margin: 0.5rem 1rem;
  color: #6c757d;
`;

const Card = () => {
  return (
    <Cardbox>
      <Cardbody>
        <Cardimg imageurl="gray.jpg"></Cardimg>
        <Cardtext>
          <CardMaintext>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </CardMaintext>
          <CardDown>
            <CardB>
              <CardButton1>View</CardButton1>
              <CardButton2>Edit</CardButton2>
            </CardB>
            <CardTime>9 mins</CardTime>
          </CardDown>
        </Cardtext>
      </Cardbody>
      <Cardbody>
        <Cardimg imageurl="gray.jpg"></Cardimg>
        <Cardtext>
          <CardMaintext>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </CardMaintext>
          <CardDown>
            <CardB>
              <CardButton1>View</CardButton1>
              <CardButton2>Edit</CardButton2>
            </CardB>
            <CardTime>9 mins</CardTime>
          </CardDown>
        </Cardtext>
      </Cardbody>
      <Cardbody>
        <Cardimg imageurl="gray.jpg"></Cardimg>
        <Cardtext>
          <CardMaintext>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </CardMaintext>
          <CardDown>
            <CardB>
              <CardButton1>View</CardButton1>
              <CardButton2>Edit</CardButton2>
            </CardB>
            <CardTime>9 mins</CardTime>
          </CardDown>
        </Cardtext>
      </Cardbody>
      <Cardbody>
        <Cardimg imageurl="gray.jpg"></Cardimg>
        <Cardtext>
          <CardMaintext>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </CardMaintext>
          <CardDown>
            <CardB>
              <CardButton1>View</CardButton1>
              <CardButton2>Edit</CardButton2>
            </CardB>
            <CardTime>9 mins</CardTime>
          </CardDown>
        </Cardtext>
      </Cardbody>
      <Cardbody>
        <Cardimg imageurl="gray.jpg"></Cardimg>
        <Cardtext>
          <CardMaintext>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </CardMaintext>
          <CardDown>
            <CardB>
              <CardButton1>View</CardButton1>
              <CardButton2>Edit</CardButton2>
            </CardB>
            <CardTime>9 mins</CardTime>
          </CardDown>
        </Cardtext>
      </Cardbody>
      <Cardbody>
        <Cardimg imageurl="gray.jpg"></Cardimg>
        <Cardtext>
          <CardMaintext>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </CardMaintext>
          <CardDown>
            <CardB>
              <CardButton1>View</CardButton1>
              <CardButton2>Edit</CardButton2>
            </CardB>
            <CardTime>9 mins</CardTime>
          </CardDown>
        </Cardtext>
      </Cardbody>
      <Cardbody>
        <Cardimg imageurl="gray.jpg"></Cardimg>
        <Cardtext>
          <CardMaintext>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </CardMaintext>
          <CardDown>
            <CardB>
              <CardButton1>View</CardButton1>
              <CardButton2>Edit</CardButton2>
            </CardB>
            <CardTime>9 mins</CardTime>
          </CardDown>
        </Cardtext>
      </Cardbody>
      <Cardbody>
        <Cardimg imageurl="gray.jpg"></Cardimg>
        <Cardtext>
          <CardMaintext>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </CardMaintext>
          <CardDown>
            <CardB>
              <CardButton1>View</CardButton1>
              <CardButton2>Edit</CardButton2>
            </CardB>
            <CardTime>9 mins</CardTime>
          </CardDown>
        </Cardtext>
      </Cardbody>
      <Cardbody>
        <Cardimg imageurl="gray.jpg"></Cardimg>
        <Cardtext>
          <CardMaintext>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </CardMaintext>
          <CardDown>
            <CardB>
              <CardButton1>View</CardButton1>
              <CardButton2>Edit</CardButton2>
            </CardB>
            <CardTime>9 mins</CardTime>
          </CardDown>
        </Cardtext>
      </Cardbody>
    </Cardbox>
  );
};

export default Card;
