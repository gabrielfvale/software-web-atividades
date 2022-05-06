import { CheckboxContainer } from "./styles";

const Checkbox = ({ label, checked, onChange }) => {
  return (
    <CheckboxContainer>
      {label}
      <input type="checkbox" onChange={onChange} checked={checked} />
      <span />
    </CheckboxContainer>
  );
};

export default Checkbox;
