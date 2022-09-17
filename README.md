# asana-regist-task
Register a task from the CSV to the project in asana.

## CSV Format (Name is issues.csv)
```
no,title,description
100,asana task title,"asana note"
```

## Quickstart
1. Install package. (`npm install`)
2. Copy .env.example as .env and set values for your own project. 
3. Prepare a CSV file named issues.csv.
4. Execute the program with the following command.
```
npm start
```

## See also
You can get Asana's project information with the following command.  
[(refs) asana developers](https://developers.asana.com/docs)
### Workspace GID
```
curl -X GET https://app.asana.com/api/1.0/workspaces \
-H 'Accept: application/json' \
-H 'Authorization: Bearer xxx'
```
### Project GID
```
curl -X GET https://app.asana.com/api/1.0/projects \
-H 'Accept: application/json' \
-H 'Authorization: Bearer xxx'
```
