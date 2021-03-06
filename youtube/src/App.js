import React, { useEffect, useState} from 'react';
import './App.css';

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };

    fetch(
      //'https://www.googleapis.com/youtube/v3/videos?key=AIzaSyDMTeVsVBkqu_u8p3PBOLuV3dQlwQ2E6aM&part=snippet&chart=mostPopular&maxResults=25',
      'https://www.googleapis.com/youtube/v3/videos?key=AIzaSyDMTeVsVBkqu_u8p3PBOLuV3dQlwQ2E6aM&part=snippet&chart=mostPopular&maxResults=25',
      requestOptions
      
     )
      .then(response => response.json())
      .then(result => setVideos(result.items))
      .catch(error => console.log('error', error));
  },[]);
  return <VideoList videos={videos} />;
}

export default App;
