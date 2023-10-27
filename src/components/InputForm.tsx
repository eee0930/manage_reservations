import React, { useState } from 'react';

interface IInputForm {
  name: string;
  label: string;
  isMust: boolean;
}
export function InputForm({ name, label, isMust }: IInputForm) {
  const [value, setValue] = useState('');
  const [isInputed, setIsInputed] = useState(false);
  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const thisValue = e.target.value;
    setValue(thisValue);
    if (thisValue.length > 0) {
      setIsInputed(true);
    } else {
      setIsInputed(false);
    }
  };
  return (
    <div className="form-group">
      <input
        name={name}
        type="text"
        className={`input ${isInputed ? 'inputed' : ''}`}
        value={value}
        onChange={handleChangeInput}
      />
      <label>
        {label}
        {isMust && <span>*</span>}
      </label>
    </div>
  );
}
