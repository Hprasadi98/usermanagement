import { Box } from "@mui/material";
import Userform from "./Userfrom";
import UserTable from "./UsersTable";
import Axios from "axios";
import { useEffect, useState } from "react";
import './Users.css';

const Users = ()=>{
    const [users, setUsers] = useState([]);
    const [submitted, setSubmitted] = useState(false);
    const [isEdit , setIsEdit] = useState(false);
    const [selectedUser, setSelectedUser] = useState({})

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

    const addUser =(data)=>{
        setSubmitted(true);
        const payload={
            id: data.id,
            name: data.name,
        }
        Axios.post('http://localhost:3001/api/createuser', payload)
            .then(() =>{
                getUsers();
                setSubmitted(false);
                setIsEdit(false);
            })
            .catch(error =>{
                console.log("Axios Error : ", error);
            });
    }

    const updateUser = (data)=>{
        setSubmitted(true);

        const payload={
            id:data.id,
            name:data.name,
        }
        Axios.post('http://localhost:3001/api/updateuser', payload)
            .then(() =>{
                getUsers();
                setSubmitted(false);
                setIsEdit(false);
            })
            .catch(error =>{
                console.log("Axios Error : ", error);
            });
    }

    const deleteUser =(data)=>{

        Axios.post('http://localhost:3001/api/deleteuser',data)
            .then(() =>{
                getUsers();
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
                backgroundColor:'yellow'
            }}
        >
            <Userform 
                addUser={addUser}
                updateUser={updateUser}
                submitted={submitted}
                data={selectedUser}
                isEdit={isEdit}
            />
            <UserTable
                rows={users}
                selectedUser={data =>{
                    setSelectedUser(data);
                    setIsEdit(true);
                }}
                deleteUser={data=>window.confirm('Are you sure?') && deleteUser(data)}
            />
        </Box>
    );
}
export default Users;