import express from "express";
import dotenv from "dotenv";
import admin from "firebase-admin";

dotenv.config();
const app = express();
const PORT = process.env.PORT;

app.use(express.json());

app.post('/send-notification', (req, res) => {
    console.log(req.body);
    
    const { token, message } = req.body;
    console.log(token,message);
    
  
    const payload = {
      notification: {
        title: message.title,
        body: message.body
      }
    };

    admin.messaging().sendToDevice(token, payload)
    .then(response => {
      res.status(200).send('Notification sent successfully!');
    })
    .catch(error => {
      console.error('Error sending notification:', error);
      res.status(500).send('Error sending notification');
    });
});



app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});