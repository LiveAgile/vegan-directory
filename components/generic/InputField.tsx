import styles from './InputField.module.css';

export interface IInputField {
  type: string;
  id: string;
  value: string;
  name: string;
  placeholder: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

const InputField: React.FC<IInputField> = ({
  type,
  id,
  value,
  name,
  placeholder,
  onChange,
}) => {
  return (
    <div className={styles.component}>
      <input
        type={type}
        id={id}
        value={value}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
      ></input>
    </div>
  );
};

export default InputField;
