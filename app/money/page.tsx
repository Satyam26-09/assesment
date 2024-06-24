"use client";

import React, { useState } from "react";

type Child1Props = {
  incrementMoney: () => void;
};

const Child1: React.FC<Child1Props> = ({ incrementMoney }) => {
  return (
    <button
      onClick={incrementMoney}
      className="px-4 py-2 bg-green-500 text-white rounded"
    >
      <p>Child 1</p>
      <p>Increment by 1000</p>
    </button>
  );
};

type Child2Props = {
  decrementMoney: () => void;
};

const Child2: React.FC<Child2Props> = ({ decrementMoney }) => {
  return (
    <button
      onClick={decrementMoney}
      className="px-4 py-2 bg-red-500 text-white rounded"
    >
      <p>Child 2</p>
      <p>Decrement by 500</p>
    </button>
  );
};

const Parent = () => {
  const [money, setMoney] = useState<number>(0);

  const incrementMoney = () => setMoney(money + 1000);
  const decrementMoney = () => setMoney(money - 500);

  return (
    <div className="flex flex-col items-center p-4 mt-40">
      <h1 className="text-2xl font-bold mb-4">Money: {money}</h1>
      <div className="flex space-x-4">
        <Child1 incrementMoney={incrementMoney} />
        <Child2 decrementMoney={decrementMoney} />
      </div>
    </div>
  );
};

export default Parent;
