var http = require('http')

http.createServer((req, res) => {
    res.write('hello world')
    res.end()
}).listen(8000)

function add(a,b){
  let result = a+b;
  console.log(result)
  return result;
}
let someData = add(1,4)+100;
console.log(someData)