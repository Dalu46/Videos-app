import axios from 'axios';

const KEY = 'AIzaSyCr7fbXzgjynuhgZ3kP-LHiSt50s5COKi4';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        type: 'video',
        key: KEY
    }
})