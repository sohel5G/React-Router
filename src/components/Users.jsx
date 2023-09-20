import { useLoaderData } from "react-router-dom";
import User from "./User";


const Users = () => {

    const users = useLoaderData();

    return (
        <div className="flex gap-8 flex-wrap py-36 justify-center">
            {
                users.map( user=> <User key={user.id} user={user}/> )
            }
        </div>
    );
};

export default Users;

