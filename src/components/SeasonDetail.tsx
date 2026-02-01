import {useParams, useNavigate} from 'react-router-dom';

export const SeasonDetail = () => {
    const {id} = useParams();
    const navigate = useNavigate();

    return (
        <div className="seasonDetailContainer componentContainer">
            <h1>Season Details</h1>
            <button className="dbdButton" onClick={() => navigate(-1)}>Back</button>
        </div>
    )
}
