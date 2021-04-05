import axios from 'axios'

export const runCommand = (command) => {
    console.log('running command:', command)
    axios.get(`http://localhost:9001/api/shell?command=${command}`)
    axios.get('http://localhost:9001/api/shell')
}
