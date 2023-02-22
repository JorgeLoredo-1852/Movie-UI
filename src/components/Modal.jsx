import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Grid from '@mui/material/Grid';
import { Divider, Stack } from '@mui/material';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Backdrop from '@mui/material/Backdrop';
import Fade from '@mui/material/Fade';
import Image from 'next/image'
import StarIcon from '@mui/icons-material/Star';
import { Poppins } from '@next/font/google'
import {
  slideInBottom,
  slideOnScroll,
  slideInTop
} from '@/components/Animations';
import ScrollAnimatable from '@/components/Animation';

const inter = Poppins({
  weight: '400',
  subsets: ['latin'],
})

export const ModalProject = ({project, open, onClose}) => {
  const themeM = useTheme();
  const downLg = useMediaQuery(themeM.breakpoints.down('lg'));
  const downMd = useMediaQuery(themeM.breakpoints.down('md'));
  const downSm = useMediaQuery(themeM.breakpoints.down('sm'));

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    outline: "0",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    flexDirection: downMd ? "column" : "row"
  };

  const getimDBRating = () => {
    if(project.imDbRating){
      return project.imDbRating
    } else {
      return "N/A"
    }
  }

  const getRuntime = () => {
    if(project.runtimeStr){
      return project.runtimeStr
    } else {
      return "???"
    }
  }
  const getGenre = () =>{
    if(project.genreList){
      return project.genreList[0].value
    } else {
      return "???"
    }  }

    const getPlot = () =>{
      if(project.plot){
        return project.plot
      } else {
        return "No description is available"
      }  }
  const getActors = () => {
    if(project.starList){
      if(project.starList.length >= 1){
              return project.starList.map((t) => (<Grid item key={`${project.id} -  ${t.name}`}><span>{t.name}</span></Grid>))
      }else {
        return <div style={{marginLeft:"1rem"}}>No info available about the actors</div>
      }  

    } else {
      return <div style={{marginLeft:"1rem"}}>No info available about the actors</div>
    }  
  }
  
  if(project){
    return (
      <Modal
        open={open}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        closeAfterTransition
        sx={{backgroundColor:"rgba(0,0,0, 0.7)"}}
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
        <div style={style} className={inter.className}>
          <div style={{ backgroundColor:"#221f1f", display:"flex", justifyContent:"center", alignItems:"center" , flexDirection:"row",
    padding:"1rem",}}>
          {
            downMd ? <></> :             <img
            src={project.image}

            style = {{objectFit:"cover",width:"278px", height:"430px"}}
          />
          }
                  <div style={{minWidth:downMd ? "18rem" : "30rem", display:"flex", justifyContent:"space-around", flexDirection:"column" ,marginLeft: downMd ? "0" : "1rem"}}>
                    <div style={{color:"white", fontSize:"2rem", display:"flex", alignItems:downSm ? "flex-start": "center", justifyContent:"space-between", flexDirection: downSm ? "column" : "row" }}>
                      <div style={{marginRight:downSm ? "0" : "1rem", fontSize:downMd ? "1.6ren" : "2rem"}}>{project.title}</div>
                      
                      <div style={{display:"flex", justifyContent:"center", alignItems:"center", fontSize:downSm ? "1.2rem" : "1.4rem"}}><div>{getimDBRating()}</div>
                      <StarIcon sx={{fontSize:downSm ? "1.2rem" :"1.4rem", color:"#B81D24"}}/>
                      </div>
                    </div>
                    <Divider sx={{backgroundColor:"white", marginTop:"0.5rem", marginBottom:"1.5rem"}}/>
                    <Grid container style={{color:"white", fontSize:"1.3rem", display:"flex", justifyContent:"space-around", marginBottom:"1rem"}}>
                        <Grid item xs = {"auto"} sx = {{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
                          <div style={{fontSize:downSm ? "1.3rem" : "1.6rem", fontWeight:800}}>{project.description.replace(/\D/g, "").substring(0, 4)}</div>
                          <div style={{fontSize:"1rem", color:"#B81D24"}}>Year</div>
                        </Grid>
                        <Grid item xs = {"auto"} sx = {{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
                        <div style={{fontSize:downSm ? "1.3rem" : "1.6rem", fontWeight:800}}>{getRuntime()}</div>
                          <div style={{fontSize:"1rem", color:"#B81D24"}}>Duration</div>
                        </Grid>                      
                        <Grid item xs = {"auto"} sx = {{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
                        <div style={{fontSize:downSm ? "1.3rem" : "1.6rem", fontWeight:800}}>{getGenre()}</div>
                          <div style={{fontSize:"1rem", color:"#B81D24"}}>Genre</div>  
                        </Grid>
                    </Grid> 
                    <div style={{color:"white"}}>{getPlot()}</div>
                    <Divider sx={{backgroundColor:"white", marginTop:"1rem", marginBottom:"0.5rem"}}/>

                    <Grid container sx={{marginTop:"0.6rem", color:"white"}}>
              <Grid item xs={12}>
                <Grid container columnSpacing={2}>
                  { getActors()}
                </Grid>
              </Grid>
            </Grid>
                  </div>
                  </div>
        </div>
        </Fade>
      </Modal>
  );
  } 
  return <></>
}