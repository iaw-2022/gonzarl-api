const config = require('../config');
const axios = require('axios').default;

getUserInfoFromToken = async (req) => {
    const token = req.headers.authorization.split(' ')[1];

    const header = {
        headers:{
            authorization: `Bearer ${token}`
        } 
    };

    const response = await axios.get(config.AUTH_INFO,header);

    return response.data;
}

module.exports = {
    getUserInfoFromToken
}