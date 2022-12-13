const express=require('express')
const app=express()
const tasks=require('./routes/tasks')
const connectDB=require('./db/connect');
const notFound=require('./middelware/NotFound')
const errorHandeler=require('./middelware/errorHandler')
const asyncWrapper=require('./middelware/async')


 require('dotenv').config;

// middelware

app.use(express.static('./public'))
app.use(express.json())

// routes

app.use('/api/v1/tasks',tasks)
app.use(notFound)
app.use(asyncWrapper)

app.use(errorHandeler)


const port = process.env.PORT || 3000;

const start = async () => {
  try {
    await connectDB();
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
