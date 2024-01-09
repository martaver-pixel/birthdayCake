// @ts-nocheck
import styled from 'styled-components';

export const Congratulations = styled.h1`
  display: flex;
  justify-content: center;
  font-size: 3rem;
  color: wheat;
  text-shadow: -1px 0 pink, 0 1px pink, 1px 0 pink, 0 -1px pink;
`;

export const HoleCake = styled.div`
  position: absolute;
  height: 500px;
  width: 500px;
  left: 45%;
  margin: -125px 0 0 -125px;
`;

export const Candle = styled.div`
  position: absolute;
  height: 60px;
  width: 10px;
  /* background: #5d2aa5; */
  z-index: 5;
  border-top-left-radius: 45%;
  border-top-right-radius: 45%;
  &::before {
    content: '';
    position: absolute;
    height: 24px;
    width: 10px;
    top: -12px;
    border-radius: 10px 10px 10px 10px / 25px 25px 10px 10px;
    background-image: linear-gradient(
      to right top,
      #c27a59,
      #d98f4c,
      #e6aa39,
      #e5c922,
      #d5eb12
    );
  }
`;

export const Icing = styled.div`
  position: relative;
  height: 100px;
  width: 360px;
  background: #eef5db;
  border-radius: 50%;
  left: 35px;
  bottom: -300px;
  z-index: 4;
`;

export const Layer = styled.div`
  position: relative;
  height: 100px;
  width: 360px;
  left: 35px;
  background: #362417;
  border-radius: 50%;
  border-top-right-radius: 25%;
  border-top-left-radius: 25%;
  box-shadow: 0px 5px #faa2c2;
  z-index: 1;
`;
export const LayerBottom = styled(Layer)`
  bottom: -116px;
`;
export const LayerMiddle = styled(Layer)`
  bottom: -174px;
  z-index: 2;
`;
export const LayerTop = styled(Layer)`
  bottom: -236px;
  z-index: 3;
`;

export const Plate = styled.div`
  position: relative;
  height: 100px;
  bottom: -37px;
  width: 400px;
  left: 15px;
  border-radius: 50%;
  background: #f2edeb;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset,
    rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset;
`;
