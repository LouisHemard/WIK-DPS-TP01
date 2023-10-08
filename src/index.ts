import express, { Request, Response } from 'express';

const app = express();

app.get('/ping', (req: Request, res: Response) => {
    const headers = req.headers;
    res.json({ headers });
})

app.all('*', (req, res) => {
    res.status(404).send('This is a 404 error!');
})

app.listen(3000, () => {
    console.log('The application is listening on port 3000!');
})