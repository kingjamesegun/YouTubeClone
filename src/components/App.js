import React from 'react';
import SearchBar from "./SearchBar";
import VideoList from './VideoList';
import axios from 'axios';
import VideoDetail from './VideoDetails';
import './App.css';


class App extends React.Component {
    state = {
        videos : [],
        selectedVideo: null
     }

     componentDidMount(){
         this.onTermSubmit("photography");
     }
     onTermSubmit= async (term)=>{
        const response= await axios.get('https://www.googleapis.com/youtube/v3/search',{
            params:{
                q: term,
                part: 'snippet',
                maxResults: 6,
                key: 'AIzaSyDBQC3m7JtZGWmvJUVcAOZGZbq70hNfQPw',
            }
        }
        )
        this.setState({
            videos: response.data.items,
            selectedVideo: response.data.items[0]
        });
        console.log(response);

    };

    onVideoSelect=(video)=>{
           this.setState({selectedVideo: video})
    }
   
    render() { 
        return ( 
        <div className="">
            <div className='container'>
                <SearchBar onFormSubmit={this.onTermSubmit}/>
                <div className="ui grid">
                    <div className="row">
                        <div className="col-lg-8 col-md-8 col-xs-12">
                            <VideoDetail video={this.state.selectedVideo}/>
                        </div>
                        <div className="col-lg-4 col-md-4 col-xs-12">
                            <VideoList 
                            onVideoSelect={this.onVideoSelect} 
                            videos={this.state.videos}
                            /> 
                        </div>
                    </div>
                </div>
            </div>
            
        </div> 
        );
    }
}
 
export default App;