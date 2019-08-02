import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 4b8f5f80b7bbe10c459dad79e89257f3b63bc71db938b2b590f5359fff770e33'
    }
})