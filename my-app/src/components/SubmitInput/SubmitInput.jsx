import './SubmitInput.css';

export function SubmitInput(props) {
    const { value } = props 
    return (
            <input className='submitInput' type='submit' value={value}/>
    )
}