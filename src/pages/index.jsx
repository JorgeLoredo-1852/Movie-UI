
import Head from 'next/head'
import Image from 'next/image'
import { Poppins } from '@next/font/google'

import styles from '@/styles/Home.module.css'
import {Box, Grid, IconButton, TextField} from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { ThemeProvider } from '@mui/material'
import theme from '@/styles/material'
import { useEffect, useState, useRef } from 'react' 
import { CardList } from '../components/CardList'
import { ModalProject } from '../components/Modal'
import {
    slideInBottom,
    slideOnScroll,
  } from '@/components/Animations';
  import ScrollAnimatable from '@/components/Animation';

import { FadeLoader} from "react-spinners";

const inter = Poppins({
  weight: '400',
  subsets: ['latin'],
})

export default function Home() {

    const refListBio = useRef(null)
    const refSearchBar = useRef(null)

  const themeM = useTheme();
  const downLg = useMediaQuery(themeM.breakpoints.down('lg'));
  const downMd = useMediaQuery(themeM.breakpoints.down('md'));
  const downSm = useMediaQuery(themeM.breakpoints.down('sm'));

  const [movies, setMovies] = useState([]);
  const [open, setOpen] = useState(false);
  const [detailProject, setDetailProject] = useState(null)
  const [showAll, setShowAll] = useState(true)
  const [search, setSearch] = useState("Iron Man")
  const [searchLetter, setSearchLetter] = useState("")

  const [loading, setLoading] = useState(false)
  

  useEffect(() => {
     fetch(`https://moviesphp-production.up.railway.app/api/movie?term=${search}`)
        .then((res) => res.json())
        .then((data) => {
           setMovies(data.results);
           setLoading(false)
        })
        .catch((err) => {
        });
     setLoading(true)
  }, [search]);

  const onClickSearchBar = (e) => {
    e.preventDefault();
    setSearch(e.target[0].value)
    e.target[0].value = ""
}

const onClickButton = (e) => {
    e.preventDefault();    
    setSearch(searchLetter)
    refListBio.current?.scrollIntoView({behavior: 'smooth'});
    console.log(refSearchBar)
}

const onChangeLetter = (e) =>{
    setSearchLetter(e.target.value)
}

  const handleOpen = (project) => {
      setOpen(true);
      setDetailProject(project)
  }
  const handleClose = () => setOpen(false);

  return (
    <>
      <Head>
        <title>Moviefi</title>
        <meta name="description" content="Search any movie" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ThemeProvider theme={theme}>
      <main className={ styles.main}> 
        <div className={inter.className}>


        <Grid container className={styles.container1} sx={{overflowX:"hide"}}>
            <Grid item xs={12} sx = {{height: "100vh", width:"100%", overflow: "hidden", position:"relative"}} className={styles.section1}>              
                <Box  sx={{overflow:"hidden", width:"100vw", height:"100vh", display:"flex", flexDirection:"column", justifyContent:"center"}}>
                  
                  
                  <Box sx={{position:"absolute", padding:downMd ? "2rem" :"5rem", width:"100vw", height:"100vh", display:"flex", justifyContent:"center", alignItems:"center"}}>
                    
                  <ScrollAnimatable
                            initial='start'
                            animate='end'
                            animation={slideInBottom}
                            transition={slideOnScroll}>
                    <Box>
                      <div style= {{color:"white", textAlign:"center", fontSize: downMd ? "2.5rem" : "4rem"}}>Don't know what movie to watch?</div>
                      <div style={{color:"#B81D24", textAlign:"center", fontSize: downMd ? "1.5rem" :"2.5rem", marginBottom:"2rem"}} >Just search a title and we'll find all the variations</div>
                      <Grid container mt={1} spacing={1} sx={{display:"flex", justifyContent:"center", alignItems:"center"}}>
                    <Grid item xs={12}>
                        <Box
                                component="form"
                                sx={{
                                    backgroundColor:"#221f1f",
                                    position:"relative",
                                    display:"flex",
                                    flexDirection:downSm ? "column" : ""
                                }}
                                noValidate
                                autoComplete="off"
                                onSubmit={onClickSearchBar}
                            >
                                <ThemeProvider theme={theme}>
                                    <TextField onChange={onChangeLetter} ref = {refSearchBar}  color="error" placeholder='Iron Man' sx={{ flex: 1, input:{ textAlign: downSm ? "center":"left",color:"white", fontSize:"1.4rem", padding:downSm ? "0.5rem 1rem" : "0.5rem 10rem 0.5rem 1rem"} }}/>
                                </ThemeProvider>
                                {!downSm ? <div onClick={onClickButton} style={{color:"white", fontSize:"1.4rem", position:downSm ? "relative" : "absolute", right:"0",  padding:"0.45rem 1.5rem", cursor:"pointer",backgroundColor:"#B81D24"}}>Search</div> : <></>}
                        </Box>
                        {downSm ?<div style={{marginTop:"1rem",color:"white", fontSize:"1.4rem", textAlign:"center", position:downSm ? "relative" : "absolute", right:"0",  padding:"0.45rem 1.5rem", cursor:"pointer",backgroundColor:"#B81D24"}}>Search</div> : <></>}

                    </Grid>
                </Grid>
                    </Box>
                    </ScrollAnimatable>
                  </Box>  
                <div style={{width: '100%', height: '100%', position: 'absolute', zIndex:"-100"}}>
                  <Image
                    alt='Mountains'
                    src='/images/banner.jpg'
                    fill
                    style={{objectFit:"cover"}} 
                  />
  </div>     
                     
              </Box>
            </Grid> 
            <Grid item xs={12} className={styles.section3}>
                
                </Grid>    
            <Grid item xs={12} className={styles.section2} style={{overflow:"hidden"}} ref={refListBio}>
                    <div style={{backgroundColor:"black", width: "100%", display:"flex", justifyContent:"center", paddingBottom:"3rem"}}>
                    <div style={{maxWidth: '1200px', width:"100%", minHeight:"100vh", padding:downLg ? "2rem" : "0.5rem"}}>
                    <ScrollAnimatable
                            initial='start'
                            animate='end'
                            animation={slideInBottom}
                            transition={slideOnScroll}>

                        <Grid container mt={1} spacing={1}>
                            <Grid item xs={12}>
                                <Box
                                        component="form"
                                        sx={{
                                            backgroundColor:"#221f1f",
                                            position:"relative",
                                            display:"flex"
                                        }}
                                        noValidate
                                        autoComplete="off"
                                        onSubmit={onClickSearchBar}
                                    >
                                        <ThemeProvider theme={theme}>
                                        <TextField  color="error" placeholder='Iron Man' sx={{ flex: 1, input:{ textAlign: downSm ? "center":"left",color:"white", fontSize:"1.4rem", padding:downSm ? "0.5rem 1rem" : "0.5rem 10rem 0.5rem 1rem"} }}/>
                                        </ThemeProvider>
                                        <div style={{position:"absolute", right:"8px"}}>
                                            <IconButton type="button" sx={{p:"10px" }} aria-label="search" >
                                                <SearchIcon sx={{ color:"white", fontSize:"1.6rem" }} />
                                            </IconButton>
                                        </div>
                                </Box>
                            </Grid>
                            <Grid item xs={12} mt={4}>
                                {!loading ? <CardList key={"cardlist"} openFunc={handleOpen} showAll={showAll} movies={movies}/> : <Grid item xs={12} sx={{display:"flex",justifyContent:"center"}}>
                        <div style={{marginTop:"6rem"}}>
                                
                                <FadeLoader color="#4f4848"/>
                        </div> 
                        </Grid>}
                            </Grid>
                        </Grid> 
                        </ScrollAnimatable>
                    </div>
                    <div>
                        <ModalProject project={detailProject} open={open} onClose={handleClose}/>
                    </div>
                </div>  

            </Grid>  

        </Grid>
        </div>
      </main>
      </ThemeProvider>
    </>
  )
}
