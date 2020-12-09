import React, { useRef } from "react";

interface IOnInputChange {
  label: string;
  onInputChangeCb: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const StringInput: React.FC<IOnInputChange> = ({ label, onInputChangeCb }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <span>
      {label}
      <input ref={inputRef} onChange={onInputChangeCb} />
    </span>
  );
};

export default StringInput;
