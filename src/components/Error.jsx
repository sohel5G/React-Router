import { Link, useRouteError } from "react-router-dom";



const Error = () => {

    const error = useRouteError();

    return (
        <div className="flex justify-center items-center min-h-screen">
            <div>
                <h1 className="text-3xl text-center py-6">Oops !!!</h1>
                <h2 className="text-3xl text-center py-6"> {error.statusText || error.message} </h2>
                <h1 className="text-8xl text-center my-9"> {error.status} </h1>
                <Link className="btn btn-primary" to={'/home'}>Go to Home page</Link>
            </div>
        </div>
    );
};

export default Error;


