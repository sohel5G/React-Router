import PropTypes from 'prop-types';
import { Link, useNavigate } from 'react-router-dom';

const User = ({user}) => {
    const { id, name, email } = user;

    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate(`/user/${id}`)
    }

    return (
        <div className='border-2 border-sky-300 p-10'>
            <p>{name}</p>
            <p>{email}</p>
            <p>{id}</p>
            <br /><br />
            <Link className='btn btn-primary' to={`/user/${id}`}><button>Show Details</button></Link>
            <br /><br />
            <button onClick={handleButtonClick} className='btn btn-primary'>onClick Event Button</button>
        </div>
    );
};

export default User;

User.propTypes = {
    user:PropTypes.object.isRequired
}
