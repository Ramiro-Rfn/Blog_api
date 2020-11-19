
import mysql from 'mysql';

function connections (){
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
    })
    
    connection.connect((err)=>{
        if (err) {
            console.error('error connecting: ' + err.stack);
            return;
          }
         
          console.log('connected as id ' + connection.threadId);
    })
    
    return connection;
}

export default connections;