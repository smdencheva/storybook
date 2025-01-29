import React, { useState } from 'react';
import { Autocomplete } from './Autocomplete';

export default {
  title: 'Components/Autocomplete',
  component: Autocomplete,
};

export const Basic = () => {

  const suggestions = [
    'Apple',
    'Banana',
    'Blueberry',
    'Cherry',
    'Grape',
    'Mango',
    'Orange',
    'Peach',
    'Strawberry',
    'Watermelon',
  ];

  const [selectedValue, setSelectedValue] = useState('');

  return (
    <div style={{ padding: '1rem' }}>
      <h3>Basic Autocomplete</h3>
      <p>Selected Value: {selectedValue}</p>
      <Autocomplete
        suggestions={suggestions}
        onChange={(val) => {
          setSelectedValue(val);
        }}
      />
    </div>
  );
};
