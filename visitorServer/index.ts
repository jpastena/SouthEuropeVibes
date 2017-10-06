console.log("hello Jacopo");

import * as express from "express";
import { Express } from "express";

import { MyDatabase } from "./database";
import { Employee } from "./models/employee";
import { Visit } from "./models/visit";
import * as bodyParser from "body-parser";


let app: Express = express();
let db: MyDatabase = new MyDatabase();

app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 

app.get('/api/employee', function (req, res) {
    db.selectAll()
        .then( (rows: Employee[]) => { res.json(rows); })
        .catch( (err) => { res.send("ERROR") });
})

app.get('/api/visit', function (req, res) {
    //db.postVisit("fasbjfasfsakjnfkjsan","jac@jac.it",new Date())
      //  .then( () => { console.log("post is successful") } )
        //.catch( (err: Error) => { console.log("ERROR: ", err) } );
    db.getAllVisits()
        .then( (rows: Visit[]) => { res.send(rows); })
        .catch( (err) => { res.send("ERROR") });
})


app.post('/api/visit', function (req, res) {
    let guest = req.body.guest;
    let employee = req.body.employee;
    let date = req.body.date;

    console.log("--- a post request is coming ---");
    console.log("guest", guest);
    console.log("employee", employee);
    console.log("date", date);

    db.postVisit(guest,employee,date)
        .then( () => { console.log("post is successful") } )
        .catch( (err: Error) => { console.log("ERROR: ", err) } );
});


app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
    
})
