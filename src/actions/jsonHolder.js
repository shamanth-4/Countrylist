import axios from 'axios';


export default axios.create({
  baseURL: 'https://www.tui.co.uk/searchpanel/availability'
});

