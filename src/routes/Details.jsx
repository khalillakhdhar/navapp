import { useParams } from 'react-router-dom';

const Details = () => {
    const { id } = useParams();

    // Assuming you have an array of specialties
   

    return (
        <div>
            <h1>Choix</h1>
        {id}
        </div>
    );
};

export default Details;