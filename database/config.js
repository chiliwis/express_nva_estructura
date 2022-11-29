const mongoose = require('mongoose');

const dbConnection = async () => {
    try {
        await mongoose.connect("mongodb+srv://noolvidar:noolvidar@cluster0.psdkwbx.mongodb.net/test", { useNewUrlParser: true, useUnifiedTopology: true });

        console.log('Base de datos online');
    } catch (error) {
        console.log(error);
        throw new Error('Error a la hora de iniciar la base de datos');
    }
};

module.exports = {
    dbConnection
}