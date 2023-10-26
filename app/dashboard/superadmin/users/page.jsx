'use client';
import { useState } from "react";
import UserDetails from "@/components/UserDetails";
import { getUsers } from "@/utils/getData";
const Users = () => {
    const [displayUsers,setDisplayUsers] = useState(null);
    const getAllUsers = async () => {
       const users = await getUsers();
       if(!displayUsers){
       setDisplayUsers(users);
       };
    };
    getAllUsers();
    return(
        <>
        {displayUsers ?
            <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {displayUsers.map(user => (
                <UserDetails
                 key={user._id}
                 userData={user}
                 />
            ))}
            </div>
            :
            <div>No product yet or loading</div>}
            </>
    );
};
export default Users;