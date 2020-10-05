import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import userRoute from './routes/userRoute';
import productRoute from './routes/productRoute';
import config from './config';

const mongoUrl = config.MONGODB_URL;
mongoose.connect(mongoUrl , {
    useNewUrlParser : true,
    useUnifiedTopology: true,
    useCreateIndex: true
    
}).catch(error => console.log(error.reason));

const app = express();
app.use(bodyParser.urlencoded({
    extended: true,
}));

// apis to fetch data from database
app.use("/api/users" ,userRoute);
app.use("/api/products" , productRoute);

app.listen(5000 , ()=>{
    console.log("Server start at the 5000")
})