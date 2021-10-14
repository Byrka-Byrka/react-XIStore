import './Button.css'

export function Button(props) {
    const { className, eventCallback, value, type } = props;
    const btnClassName = className ? `button ${className}` : 'button';
    return (
        <div type={type} className={btnClassName} onClick={eventCallback}>
            {value}
        </div>
    )
}