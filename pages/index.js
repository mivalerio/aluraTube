import config from "../config.json"
import styled from "styled-components"
import { CSSReset } from "../src/components/CSSReset";
import Menu from "../src/components/Menu";
import { StyledTimeline } from "../src/components/Timeline";

function HomePage() {
    const estiloDaHomePage = {
        //backgroundColor:"red"
    }
    console.log(config.playlists);
    return(
        <>
        <CSSReset/>
        <div style={estiloDaHomePage}>
        <Menu/>
        <Header/>
        <TimeLine playlists={config.playlists}>
            Conteudo
        </TimeLine>    
        </div>
        </>
    ) 
  }
  
  export default HomePage

  //function Menu (){
  //  return(
  //      <div>
  //          Menu
  //      </div>
  //  )
  //}
  const StyleHeader = styled.div`
    img{
        with: 80px;
        height: 80px;
        border-radius:50%;
    }
    .user-info{
        margin-top:50px;
        display:flex;
        align-items:center;
        width:100%;
        padding: 16px 32px;
        gap:16px;
    }
  `;
  function Header (){
    return(
        <StyleHeader>
            {/*<img src="banner"/>*/}
            <section className="user-info">
                <img src={`https://github.com/${config.github}.png`}/>
                <div>
                    <h2>
                        {config.name}
                    </h2>
                <p>
                    {config.job}
                </p>
                
                </div>
                
            </section>
            
            
        </StyleHeader>
    )
  }
  function TimeLine (props){
    console.log("Dentro do componente", props.playlists)
    const playlistName = Object.keys(props.playlists)
    return(
        <StyledTimeline>
         {playlistName.map((playlistName) => {
            const videos = props.playlists[playlistName]
            console.log(playlistName);
            console.log(videos);
            return (
                <section>
                    <h2>
                      {playlistName}
                        <div>
                            {
                                videos.map((video)=>{
                                    return(
                                        <a href={video.url}>
                                            <img src = {video.thumb} />
                                            <span>
                                                {video.title}
                                            </span>
                                        </a>
                                    )
                                    })
                            }
                        </div>
                    </h2>
                </section>
            )
         })}
        </StyledTimeline>
    )
  }