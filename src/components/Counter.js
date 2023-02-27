import React, { useState, useEffect } from 'react';

// COMPONENT has a LifeCycle
// So We can Listened the LifeCycle
// MOUNTED, UNMOUNTED, UPDATED, DESTROY
// The state define a VALUE of one PARAM of COMPONENT
// We use the HOOKS to implement that way
// The HOOKS are the Functions which can let us to follow the COMPONENT Reaction
// useState let us to INITIALIZE the PARAM
// useState let us to give DEFAULT VALUE for PARAM
// useState return ARRAY[2]
function Counter(props) {
  console.log(props);

  // count === 0
  const [count, setCount] = useState(0);
  const [fruit, setFruit] = useState('Mango');
  const [animal, setAnimal] = useState(['CAT', 'DOG', 'FISH', 'LION']);

  // EXAMPLE...
  function displayAnimal() {
    setAnimal(function (item) {
      return animal.remove(item);
    });
  }

  /**
   * [increment description]
   * @param  {ClickEvent} event [description]
   * @return {Void}       [description]
   */
  function increment(event) {
    setCount(function (value) {
      if (value < 0) return 0;
      return value + 1;
    });
  }

  /**
   * [decrement description]
   * @param  {ClickEvent} event [description]
   * @return {Void}       [description]
   */
  function decrement(event) {
    setCount(function (value) {
      if (value === 0) return 0;
      return value - 1;
    });
  }

  // UPDATED Du COMPONENT
  useEffect(function () {
    console.log('COMPONENT HAS UPDATED');
  });

  // MOUNTED Du COMPONENT
  // First PARAM of useEffect is CALLBACK
  // Second PARAM of useEffect is ARRAY
  useEffect(function () {
    console.log('COMPONENT IS MOUNTED');
  }, []);

  // We can WATCH all data we want
  // So the ARRAY param have N DIMENSION
  useEffect(
    function () {
      console.log(`count has changed at: ${new Date()}`);
    },
    [count]
  );

  // We can WATCH all data we want
  // So the ARRAY param have N DIMENSION
  useEffect(
    function () {
      console.log(`count has changed at: ${new Date()}`);
    },
    [count, fruit, animal]
  );

  return (
    <div
      style={{
        border: '1px solid black',
        padding: '20px',
        margin: '10px',
        width: '200px',
        height: 'auto',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        borderRadius: '8px',
      }}
    >
      <p style={{ fontSize: '1.8em', fontWeight: 'bold', textAlign: 'center' }}>
        {count}
      </p>
      <div style={{ display: 'flex' }}>
        <button
          style={{
            padding: '5px 10px',
            border: '1px solid black',
            borderRadius: '4px',
            marginRight: '5px',
            cursor: 'pointer',
          }}
          onClick={increment}
        >
          Increment
        </button>
        <button
          style={{
            padding: '5px 10px',
            border: '1px solid black',
            borderRadius: '4px',
            marginLeft: '5px',
            cursor: 'pointer',
          }}
          onClick={decrement}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}

export default Counter;
