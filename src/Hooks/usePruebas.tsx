import React, { useState } from "react";

const usePrueba1 = () => {
  const [value, setvalue] = useState("");
  const [error, seterror] = useState(false);
  const [Fibonacci, setFibonacci] = useState("");
  const [Multiplos, setMultiplos] = useState("");

  const validateValue = () => {
    let regex = /^[0-9]+$/;
    let isOk = true;

    if (value.match(regex)) {
      seterror(false);
    } else {
      seterror(true);
      setFibonacci("");
      isOk = false;
    }

    if (value === "0" || value[0] === "0") {
      seterror(true);
      isOk = false;
    }

    return isOk;
  };

  const tryDraw = () => {
    let res = validateValue();

    if (res) {
      drawFibonacci(parseInt(value));
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

  //PRUEBA 2
  const tryDrawMultiplos = () => {
    let res = validateValue();
    let returnArray = [];

    if (res) {
      for (let i = 1; i <= parseInt(value); i++) {
        if (i % 3 === 0) {
          returnArray.push("AKE");
        } else if (i % 5 === 0) {
          returnArray.push("LAB");
        } else {
          returnArray.push(i);
        }
      }

      setMultiplos(returnArray.join(", "));
    }
  };

  return {
    value,
    setvalue,
    error,
    Fibonacci,
    validateValue,
    drawFibonacci,
    tryDraw,
    tryDrawMultiplos,
    Multiplos,
  };
};

export default usePrueba1;
