
import {Box, Typography} from '@mui/material';

const Qna = ({data})=>{

    return(
        <Box sx={{ padding:'0.8rem'}}>
            <Typography variant='body'>
                Q: <b>{data.que}</b>
            </Typography>
            <Box sx={{paddingLeft:'1rem', display:'flex',flexDirection:'row', justifyContent:'space-between', width:'60%'}}>
                <Box sx={{display:'flex',flexDirection:'column'}}>
                    <Typography variant='body'>
                        Ans: {data.ans}
                    </Typography>
                </Box>
            </Box>
        </Box>
    )
}

export default Qna