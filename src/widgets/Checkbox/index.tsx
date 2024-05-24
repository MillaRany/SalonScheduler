import React from 'react';
import Select from 'react-select';

interface OptionsProps {
  value: string;
  label: string;
}

interface CheckboxProps {
  options: OptionsProps[];
  onChange: (value: any) => void;
  defaultValue: any;
  value?: any;
  isSearchable?: boolean;
}

function Checkbox({ options, onChange, defaultValue, isSearchable }: CheckboxProps) {

  return (
    <Select
        options={options}
        onChange={onChange}
        defaultValue={defaultValue}
        isSearchable={isSearchable}
      />
  );
}

export default Checkbox;
