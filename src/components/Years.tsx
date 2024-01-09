// @ts-nocheck
import React from 'react';
import { Congratulations } from '../styledComponents';

const Years = ({ age }: { age: number }) => {
  let typeOfNumber = '';
  const ageLastDigit = age % 10;
  if (age >= 4 && age <= 20) {
    typeOfNumber = 'th';
  }
  if (ageLastDigit === 1) {
    typeOfNumber = 'st';
  }
  if (ageLastDigit === 2) {
    typeOfNumber = 'nd';
  }
  if (ageLastDigit === 3) {
    typeOfNumber = 'rd';
  }

  return (
    <>
      <Congratulations>
        Happy {age}
        {typeOfNumber} Birthday!
      </Congratulations>
      <h3>Place the candles!</h3>
    </>
  );
};

export default Years;
// 1st, 2nd, 3rd, 4th, 5th, 6th, then use th until 21st,
//22nd, 23rd, 24th, etc.
