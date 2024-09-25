var mysql = require('mysql2')

var conn = mysql.createConnection({
    host: 'localhost',
    user: 'Dennis Otniel Rorimpandey',
    password: 'Dennis2602',
    database: 'color'
})




conn.connect(function(err){
    if (err) throw err;
    console.log('Database Connected');
    conn.query('SELECT * FROM contrast_score order by score desc', function(err, results){
        if (err) throw err;

        results.forEach(item => {
            console.log(`Color1: ${item.color1}, Color2: ${item.color2}, Score: ${item.score}`);
          });

        conn.end()
    })

})

