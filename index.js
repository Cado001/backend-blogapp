import express from 'express';
import cors from 'cors';
import { MongoClient } from 'mongodb';

const app = express()
app.use(cors())




const MONGO_URI= "mongodb+srv://biml16gb:mEK8ggrwk1uBRB2J@myfirstcluster.fctdvbv.mongodb.net/?retryWrites=true&w=majority"
const client = new MongoClient(MONGO_URI)
const db = client.db('blogapp-c12')
const blog = db.collection('blog-post')

client.connect()
console.log('Connected to Mongo')


app.get('/', async (req,res) => {
const allPosts = await blogPosts.find().toArray()
console.log('allPost -> ', allPosts)
    res.send('here are some blog post, not yet! 🐶')
} )

app.listen('8080', () => console.log('Api listening on port 8080 😎'))