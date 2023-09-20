import { Link, useLoaderData, useNavigate, useParams } from "react-router-dom";


const UserDetails = () => {

    const {id:userId} = useParams()
    console.log(userId);

    const user = useLoaderData()
    const { name, email, id } = user;

    const navigate = useNavigate();

    const handleGoBackButton = () => {
        navigate(-1)
    }

    return (
        <div className="flex justify-center py-12 my-9">
            <div className="border-2 border-sky-300 p-4">
                <h1>{name}</h1>
                <h1>{email}</h1>
                <h1>{id}</h1>
                <button onClick={handleGoBackButton} className="btn btn-primary">Go Back by function</button>
                <br /><br />
                <Link className="btn btn-primary" onClick={() => navigate('/about')}>Go to about page by anchor tag</Link>
            </div>
        </div>
    );
};

export default UserDetails;


