console.log('welcome to new_project');
import axios from "axios"

axios.get('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => {
        console.log(response.data);
        console.log(chalk.bgGreen(response.data)); // utilizzo di chalk 
    })
    .catch(error => {
        console.log('Error fetching data', error);

    })

