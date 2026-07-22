import express from 'express'
import courseRoutes from "./routes/courses.js"
const app=express();
const port=3000;

app.use(express.json())
app.use('/api',courseRoutes);
app.get('/',(req,res)=>{
    res.send('hello world');
});

app.listen(port,()=>{
    console.log(`server is running on http://localhost:${port}`);
});
