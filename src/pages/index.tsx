import { Checkbox, Input } from '@/widgets';
import { Label } from '@/widgets/Input/styles';
import React, { useState } from 'react';

function index() {
  const options = [
    { value: 'todos', label: 'todos' },
    { value: 'milla', label: 'Milla' },
    { value: 'rany', label: 'rany' },
  ];

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [value, setValue] = useState(options[0]);

  console.log(value);

  return (
    <div>
      <Input />
      <Checkbox
        options={options}
        defaultValue={options[0]}
        onChange={(selected) => setValue(selected.value)}
        isSearchable
      />
    </div>
  );
}

export default index;
