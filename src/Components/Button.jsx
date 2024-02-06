

const Button = ({text, className, onClick}) => {
    const btnClassName = className ? className : 'btn btn-primary';
    const btnOnClick = onClick ? onClick : null;

    return (
        <>
        <button className={btnClassName} onClick={btnOnClick}>{text}</button>
        </>
    );
}


export default Button