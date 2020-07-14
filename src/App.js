import React from 'react';
import AppRouter from './AppRouter'

const App = () => {
   return (
      <AppRouter></AppRouter>


      // <Grid justify="center" container spacing={10}> 
      //    <Grid item xs={12}>
      //       <Grid container spacing={10}>
      //          <Grid item xs={12}>
      //             <SearchBar onFormSubmit={handleSubmit}/>
      //          </Grid>
      //          <Grid item xs={8}>
      //             <VideoDetails video={selectedVideo}/>
      //          </Grid>
      //          <Grid item xs={4}>
      //             <VideoList videos={videos} onVideoSelect={setSelectedVideo} />
      //          </Grid>
      //       </Grid>
      //    </Grid>
      // </Grid>
   )
}

export default App;