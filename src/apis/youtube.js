import axios from 'axios';


const KEY = 'AIzaSyDBQC3m7JtZGWmvJUVcAOZGZbq70hNfQPw';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY,
    }
})                                                          