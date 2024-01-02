import {Grid, Typography, Button} from '@mui/material';

const Userform = (props) =>{
    return(
        <Grid
            container
            spacing={2}
            sx={{
                backgroundColor:'white',
                marginBottom:'30px',
                display:'block'

            }}
        >
            <Grid item xs={12}>
                <Typography component={'h1'} sx={{color:'black'}}>User Form</Typography>
            </Grid>
            <Grid item xs={12} sm={6} sx={{display:'flex'}}>
                <Typography
                    component={'label'}
                    htmlFor="id"
                    sx={{
                        color:'black',
                        marginRight:'20px',
                        fontSize:'16px',
                        width:'100px',
                        display:'block',
                    }}
                >
                    ID
                </Typography>
                <input
                    type="number"
                    id='id'
                    name='id'
                    sx={{
                        width:'400px'
                    }}
                    value={''}
                    onChange={e=>{}}
                />
            </Grid>
            <Grid item xs={12} sm={6} sx={{display:'flex'}}>
                <Typography
                    component={'label'}
                    htmlFor="id"
                    sx={{
                        color:'black',
                        marginRight:'20px',
                        fontSize:'16px',
                        width:'100px',
                        display:'block',
                    }}
                >
                    Name
                </Typography>
                <input
                    type="text"
                    id='name'
                    name='name'
                    sx={{
                        width:'400px'
                    }}
                    value={''}
                    onChange={e=>{}}
                />
            </Grid>
            <Button sx={{
                margin:'auto',
                marginBottom:'20px',
                backgroundColor:'#00c6e6',
                color:'black',
                marginLeft:'15px',
                marginTop:'20px',
                '&:hover':{
                    opacity:'0.7',
                    backgroundColor:'#00c6e6',
                }
            }}>
                Add
            </Button>
        </Grid>
    );
}
export default Userform;