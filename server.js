import express from 'express'

import mongoose from 'mongoose';
import userRouter from './Routes/user.js'
import productRouter from './Routes/product.js'
import cartRouter from './Routes/cart.js'
import addressRouter from './Routes/address.js'
import paymentRouter from  './Routes/payment.js'
import cors from 'cors'
import { config } from 'dotenv';
import dotenv from 'dotenv';
dotenv.config();

const app = express();

app.use(express.json())

// .env setup


app.use(cors({
  origin: 'https://e-commerce-frontend-two-snowy.vercel.app/',
  methods: ["POST", "GET", "DELETE", "PUT"],
  credentials: true
}));


app.get('/',(req,res)=>{res.json({message:'this is home page'})}) 

// user Router
app.use('/api/user',userRouter) 

// product Router
app.use('/api/product',productRouter);

// cart Router
app.use('/api/cart',cartRouter);

// address Router
app.use('/api/address',addressRouter);

// payment Router
app.use('/api/payment',paymentRouter)


mongoose
  .connect(
    'mongodb+srv://mrsurah12345:xRP3nNGcJUNrTCl4@cluster0.na2ugda.mongodb.net/',
    {
      dbName: "MERN_Ecommerce",
    }
  )
  .then(() => console.log("MongoDB is Connected..!"))
  .catch((err) => console.log(err.message));

const port = 1000;
app.listen(port,()=>console.log(`Server is running`))