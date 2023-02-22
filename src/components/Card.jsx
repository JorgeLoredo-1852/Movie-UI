import { Grid, Box, Divider } from "@mui/material";
import React from "react";
import styles from '@/styles/Home.module.css';
import Image from 'next/image'
import StarIcon from '@mui/icons-material/Star';
export const Card = ({ info, ke, openFunc }) => {
    const openModal = () => {
        openFunc(info)
    }
    const getimDBRating = () => {
      if(info.imDbRating){
        return info.imDbRating
      } else {
        return "N/A"
      }
    }
  if (info.image){
    if(info.image !== "https://imdb-api.com/images/original/nopicture.jpg" )
    {
      return (
    <Grid item xs={"auto"} key={`${info.id}-card`}>

        <div key={`${info.id}-cardText`} onClick={openModal} className={styles.card}>
            <div className={styles.date} style={{position: "absolute", zIndex:"20", left:"1rem", top:"1rem", padding:"0.5rem", fontSize:"1.1rem", fontWeight:500}}>{info.description.replace(/\D/g, "").substring(0, 4)}</div>
            <div className={styles.date} style={{position: "absolute", zIndex:"20", right:"1rem", top:"1rem", padding:"0.5rem", fontSize:"1.1rem", fontWeight:500, display:"flex", justifyContent:"center", alignItems:"center"}}>
            <div style={{marginRight:"0.5rem"}}>{getimDBRating()}</div>
            <StarIcon sx={{color:"#B81D24"}}/>
            </div>
            <img
                    src={info.image}

                    style = {{objectFit:"cover",width:"278px", height:"430px", position:"absolute", zIndex:"10"}}
                  />
        </div>
    </Grid>
  );
    }
    
  }
  return <></>
};

