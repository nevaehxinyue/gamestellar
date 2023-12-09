import axios from "axios";

export default axios.create( {
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'c9ee006775c24dbdb4ebe08f1f40330c'
    }
})