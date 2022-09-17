'use strict';
require('dotenv').config();
const asana = require('asana');
const fs = require('fs');
const {parse} = require('csv-parse/sync')
const client = asana.Client.create().useAccessToken(process.env.ASANA_PERSONAL_ACCESS_TOKEN);

// Read CSV
const data = fs.readFileSync('issues.csv');
const records = parse(data, {columns: true});
// Register one line at a time with ASANA
for (const record of records) {
    let title = record.title;
    let note = record.description

    let newTask = {
        "workspace": process.env.ASANA_WORK_SPACE,
        "projects": process.env.ASANA_PROJECT_ID,
        "name": title,
        "notes": note,
    };
    client.tasks.createTask(newTask)
        .then((result) => {
            //console.log(result);
        }).catch((error) => {
        // console.log(error);
    });
}


