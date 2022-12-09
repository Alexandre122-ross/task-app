import './style.inputData.css';

function InputDataComponent({ type = 'text', label, value , handleChange }) {
  return (
    <div className='input_data-container'>
      {type !== 'textarea'
        ? (
          <input
            type={type}
            className='data-input'
            placeholder=' '
            value={value}
            onChange={(e) => handleChange(e.target.value)}
          />
        )
        : (
          <textarea
            placeholder=' '
            className='data-input textarea-input'
            value={value}
            onChange={(e) => handleChange(e.target.value)}
          />
        )}
      <label className='label_input-text'> {label} </label>
    </div>
  );
}

export default InputDataComponent;