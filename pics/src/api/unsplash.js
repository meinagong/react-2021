import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization:
      'Client-ID IcTWI1iyyjEG6IH-4xkM_en5AGWHhYQmv-ZLkPMvYpw'
  }
});
