const mongoose = require('mongoose')

// mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
//     useNewUrlParser: true,
//     createNewIndex: true
// })

//UseNewURLParser and createNewIndex are no longer used and are set to true by default by the new versions of mongoose

mongoose.connect(process.env.MONGODB_URL)