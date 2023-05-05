
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const UserDetails = ({data})=>{

    return(
        <Box sx={{ height:'8rem', width:'100%', display:'flex',justifyContent:'center'}}>
            <Card sx={{ width:'100%', paddingLeft:'2rem', paddingRight:'2rem'}}>
                <CardContent>
                <Typography variant="h4" component="div" color="primary.dark">
                    {data.name}
                </Typography><br/>
                <Box sx={{display:'flex', flexDirection:'row', justifyContent:"space-between", width:"70%"}}>
                    <Typography variant="body" color="text.secondary">
                        <b>User ID:</b> {data.user_id}
                    </Typography>
                    <Typography variant="body" color="text.secondary">
                    <b>Phone:</b> {data.phone}
                    </Typography>
                    <Typography variant="body" color="text.secondary">
                    <b>Email:</b> {data.email}
                    </Typography>
                </Box>
            </CardContent>
        </Card>
      </Box>
    )
}

export default UserDetails