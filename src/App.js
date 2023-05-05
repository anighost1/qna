import './App.css';
import { useRef } from "react"
import UserDetails from './component/UserDetails';
import { Box, Card, Button } from '@mui/material';
import Qna from './component/Qna';
import DummyData from './component/DummyData'
import UserData from './component/UserData'
import { PDFExport, savePDF } from "@progress/kendo-react-pdf";

function App() {

    const download = useRef(null)

    const handleClick = ()=>{
        savePDF(download.current,{margin:'pt',paperSize:"A4",title:'Q&A',scale:1})
    }

  return (
    <Box sx={{ height:'100vh', display:'flex', flexDirection:'column',justifyContent:'center', alignItems:'center', padding:'3rem', backgroundColor:'#F0F0F0'}}>
        <Card ref={download} sx={{width:'85%', height:'85%',overflowY:'scroll'}} >
            <UserDetails data={UserData}/>
            <Box sx={{padding:'1.5rem'}}>
                {/* {DummyData.map((item,index)=>{
                    index += 1
                    return <Qna data={item} index={index}/>
                })} */}
                <Qna data={DummyData}/>
                <Qna data={DummyData}/>
                <Qna data={DummyData}/>
                <Qna data={DummyData}/>
                <Qna data={DummyData}/>
                <Qna data={DummyData}/>
                <Qna data={DummyData}/>
                <Qna data={DummyData}/>
                <Qna data={DummyData}/>
                <Qna data={DummyData}/>
                <Qna data={DummyData}/>
                <Qna data={DummyData}/>
                <Qna data={DummyData}/>
                <Qna data={DummyData}/>
                <Qna data={DummyData}/>
                <Qna data={DummyData}/>
                <Qna data={DummyData}/>
                <Qna data={DummyData}/>
                <Qna data={DummyData}/>
                <Qna data={DummyData}/>
                <Qna data={DummyData}/>
                <Qna data={DummyData}/>
                <Qna data={DummyData}/>
                <Qna data={DummyData}/>
                <Qna data={DummyData}/>
            </Box>
        </Card>
        <br/>
        <Button onClick={handleClick} variant='contained'>
                Download
        </Button>
    </Box>
  );
}

export default App;
