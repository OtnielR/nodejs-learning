var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/school"

MongoClient.connect(url, function(err, db) {
    if (err) throw err
    console.log('Connection success')
    db.close()
})