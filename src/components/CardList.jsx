import { Grid, Box } from "@mui/material"

import { List } from "./List"
import { Card } from "./Card"

import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useEffect } from "react";

import { FadeLoader} from "react-spinners";
import BounceLoader from "react-spinners/BounceLoader";

export const CardList = ({tags, openFunc, showAll, movies}) => {
    const themeM = useTheme();
    const downLg = useMediaQuery(themeM.breakpoints.down('lg'));
    const downMd = useMediaQuery(themeM.breakpoints.down('md'));
    const downSm = useMediaQuery(themeM.breakpoints.down('sm'));

    let founded = 0;

    const foundAtLeastOne = () =>{
        founded = founded + 1
    }

    if(movies){
         return(
            <Grid container spacing={3} rowSpacing={3} sx={{display:"flex", height:"100%", justifyContent: downLg ? "center" : ""}}>
                {movies.map((info) => {
                    foundAtLeastOne()
                    return(<Card info={info} key={`${info.id}-dasdada`} openFunc={openFunc}/>)
                })}

                {
                    founded == 0 && movies ? 
                        <Grid item xs={12} sx={{display:"flex",justifyContent:"center"}}>
                        <div style={{marginTop:"6rem"}}>
                                
                                <FadeLoader color="#4f4848"/>
                        </div> 
                        </Grid>
                        : <></>
                }
            </Grid>
    )
    }
return<></>
   
}