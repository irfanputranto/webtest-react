import {useNavigate} from "react-router-dom"


const First = () => {
    const navigate = useNavigate()

    return (
        <>
            <h3>Homepage Route</h3>
            <button onClick={() => navigate('/about')} className="btn btn-success">Check About</button>
        </>
    )
}

export default First