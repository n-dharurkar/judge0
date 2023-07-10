const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv');
const connectDb = require('./config/connectDB');
const { exec } = require('child_process');
const Submission = require('./models/Submission');


dotenv.config();

connectDb();

const app = express();



app.use(morgan('dev'));
app.use(express.json());
app.use(cors());



app.get("/",(req,res)=>{
    res.send( "<h1> welcome to the judge0 platform </h1>");
})


app.post('/submit', (req, res) => {
    const code = req.body.code;
  
    // Execute the code asynchronously
    exec(code, (error, stdout, stderr) => {
      if (error) {
        console.error(`Error: ${error.message}`);
        return res.status(500).json({ error: 'Code execution failed' });
      }
  
      
      
const newSubmission = new Submission({
    user: userId, 
    code: codeSnippet,
    output: executionResult
  });
  
  
  newSubmission.save()
    .then(() => {
     
    })
    .catch((error) => {
      
      console.error(`Error saving submission: ${error}`);
    });
  
  
  Submission.find({ user: userId })
    .then((submissions) => {
      
    })
    .catch((error) => {
      
      console.error(`Error retrieving submissions: ${error}`);
    });
  
    });
  });

const PORT = 8080 || process.env.PORT;

app.listen(PORT,()=>{
    console.log(`server running on port ${PORT}`);
});