import React from 'react';
import { TextField } from '@mui/material';

const Filter = ({ value, onChange }) => {
  return (
    <TextField
      size="small"
      autoComplete="off"
      type="text"
      name="filter"
      label="Find contacts by name"
      value={value}
      onChange={onChange}
    />
  );
};

export default Filter;
