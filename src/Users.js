import { Box } from "@mui/material";
import Userform from "./Userfrom";
import UserTable from "./UsersTable";

const users = [
    {
        id:1,
        name:'hasi'
    },
    {
        id:2,
        name:'prasa'
    }
];

const Users = ()=>{
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