const dotenv = require("dotenv")

dotenv.config();

module.exports = {
    port: process.env.PORT,
    host: process.env.HOST,
    firebaseConfig:{
        apikey: process.env.API_KEY,
        authDomain: process.env.AUTH_DOMAIN,
        projectId: process.env.PROJECT_ID,
        strorageBucket: process.env.STORAGE_BUCKET,
        messagingSenderId: process.env.MESSAGING_SENDER_ID,
        appId: process.env.APP_ID,
        
    }
}