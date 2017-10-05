console.log("hello Jacopo");

import * as express from "express";
import { Express } from "express";

import { MyDatabase } from "./database";
import { Employee } from "./models/employee";
import { Visit } from "./models/visit";


let app: Express = express();
let db: MyDatabase = new MyDatabase();

app.get('/api/employee', function (req, res) {
    db.selectAll()
        .then( (rows: Employee[]) => { res.json(rows); })
        .catch( (err) => { res.send("ERROR") });
})

app.get('/api/visit', function (req, res) {
    db.getAllVisits()
        .then( (rows: Visit[]) => { res.send(rows); })
        .catch( (err) => { res.send("ERROR") });
})




app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
    
})
