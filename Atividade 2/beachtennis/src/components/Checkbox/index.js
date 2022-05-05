import { CheckboxContainer } from "./styles";

const Checkbox = ({ label, checked, onClick }) => {
  return (
    <CheckboxContainer>
      {label}
      <input type="checkbox" onClick={onClick} checked={checked} />
      <span class="checkmark" />
    </CheckboxContainer>
  );
};

export default Checkbox;
