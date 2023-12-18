// const http = require('http')
// const port = process.env.PORT || 3000

// const server = http.createServer((req, res) => {
//     res.writeHead(200, {'Content-Type': 'text/plain'})
//     res.end('Hello world NodeJS!')
// })

// server.listen(port, () => console.log(`server started on port ${port}; ` +  'press Ctrl-C to terminate.....'))

const http = require('node:http');
//Sử dụng module http trong Node.js để tạo một máy chủ HTTP. 
//Đối tượng http chứa các phương thức và thuộc tính cần thiết để tạo và quản lý máy chủ web.
const hostname = '127.0.0.1';
//Biến hostname được sử dụng để chỉ định địa chỉ IP của máy chủ.
const port = 3000;
//Biến port chỉ định cổng mà máy chủ sẽ lắng nghe các kết nối.
const server = http.createServer((req, res) => {
    //Tạo một đối tượng máy chủ bằng cách sử dụng phương thức createServer của đối tượng http. 
    //Đối số của createServer là một hàm callback được gọi mỗi khi có một yêu cầu HTTP được nhận.
  res.statusCode = 200;
  //Đặt mã trạng thái của phản hồi là 200, có nghĩa là "OK".
  res.setHeader('Content-Type', 'text/plain');
  //Thiết lập tiêu đề của phản hồi.
  res.end('Hello World\n');
  //Kết thúc phản hồi .
});
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
//Lắng nghe kết nối đến máy chủ trên cổng và địa chỉ IP được chỉ định. 
//Khi máy chủ đã sẵn sàng lắng nghe, hàm callback được gọi và một thông báo được in ra console thông qua console.log.