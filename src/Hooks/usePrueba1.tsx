import React, { useState } from "react";

const usePrueba1 = () => {
  const [value, setvalue] = useState("");
  const [error, seterror] = useState(false);
  const [Fibonacci, setFibonacci] = useState("");

  const validateValue = () => {
    let regex = /^[1-9]+$/;
    if (value.match(regex)) {
      seterror(false);
      drawFibonacci(parseInt(value));
    } else {
      seterror(true);
      setFibonacci("");
    }
  };

  const drawFibonacci = (value: number) => {
    let fibo: number[] = [];

    for (let i = 0; i < value; i++) {
      if (fibo.length <= 1) {
        fibo.push(1);
      } else {
        fibo.push(fibo[i - 2] + fibo[i - 1]);
      }
    }

    setFibonacci(fibo.join(", "));
  };
  return {
    value,
    setvalue,
    error,
    Fibonacci,
    validateValue,
    drawFibonacci,
  };
};

export default usePrueba1;
