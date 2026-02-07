import express from 'express'
const app = express();


// app.get('/', (req, res) => {
//     res.send("Send sever is on")
// });

app.get('/api/names', (req, res) => {
    const names = [
        {
            id: 1,
            name: "Luffy",
            age: 18,
            gpa: 6.6,
        },
        {
            id: 2,
            name: "Zoro",
            age: 19,
            gpa: 7.4
        },
        {
            id: 3,
            name: "Nami",
            age: 17,
            gpa: 9.9
        }];
    res.send(names);
    });
    const port = process.env.PORT || 3000;

    app.listen(port, () => {
        console.log(`Server at http://localhost:${port}`)
    }
    );

