import * as sqlite3 from "sqlite3";
import { Database, Statement } from "sqlite3";
import { Employee } from "./models/employee";
import { Visit } from "./models/visit";



export class MyDatabase {
    protected database: Database;

    constructor() {
        this.database = new sqlite3.Database("./data/visit.db", function (err) {
            if (err) {
                console.log("connection with the database failed");
            } else {
                console.log("connection successeful");
            }
        });
    }

    selectAll(): Promise<Employee[]> {
        return new Promise((resolve, reject) => {
            this.database.all('SELECT * FROM Employee', function (err, rows: Employee[]) {
                if (err) {
                    reject(err);
                } else {
                    resolve(rows);
                }
            })
        });
    }

    getAllVisits(): Promise<Visit[]> {
        return new Promise((resolve, reject) => {
            this.database.all('SELECT * FROM Visit', function (err, rows: Visit[]) {
                if (err) {
                    reject(err);
                } else {
                    resolve(rows);
                }
            })
        });
    }
}





