import './Input.css';

export function Input(props) {
    const { name, type, value, placeholder, requiredValue, className, onInputEvent, onChangeEvent, labelValue, id, min, max, step, list } = props;
    return (
        <div className = 'input_wrapper'>
            <label className = 'input_wrapper__label' htmlFor={id}>
                {labelValue}
            </label>
            <input type={type} list={list} min={min} max={max} step={step} id={id} required={requiredValue} onInput={onInputEvent} onBlur={onChangeEvent} className={className} placeholder={placeholder} value={value} name={name}/>

        </div>
    )
}