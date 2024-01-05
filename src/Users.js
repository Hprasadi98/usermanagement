import { Box } from "@mui/material";
import Userform from "./Userfrom";
import UserTable from "./UsersTable";
import Axios from "axios";
import { useEffect, useState } from "react";

const Users = ()=>{
    const [users, setUsers] = useState([]);

    useEffect(()=>{
        getUsers();
    }, []);

    const getUsers =()=>{
        Axios.get('http://localhost:3001/api/users')
            .then(response =>{
                setUsers(response?.data?.response || []);
            })
            .catch(error =>{
                console.log("Axios Error : ", error);
            });
    }

    return (
        <Box
            sx={{
                width:'calc(100% - 100px)',
                margin:'auto',
                marginTop: '100px',
            }}
        >
            <Userform/>
            <UserTable rows={users}/>
        </Box>
        
    );
}
export default Users;