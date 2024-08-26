const fs = require('fs'); // fs 모듈을 불러옴: 파일 시스템을 다루는 모듈, file syncronous의 약자
const main_view = fs.readFileSync('./main.html', 'utf8'); // main.html 파일을 읽어 main_view 변수에 저장

const mariadb = require('./database/connect/mariadb'); // mariadb 모듈을 불러옴

function main(response) { // main 함수 정의: '/' 경로로 요청이 들어왔을 때 실행될 함수
  console.log('Request handler "main" was called.');

  // mariadb 모듈의 query 함수 호출: product 테이블의 모든 데이터를 가져옴
  mariadb.query('SELECT * FROM product', function (err, rows) { // 쿼리문과 콜백 함수를 인자로 받음
    console.log(rows); // product 테이블의 모든 데이터 출력
  })

  response.writeHead(200, {"Content-Type": "text/html"}); // 응답 헤더 작성: 200은 성공을 의미, Content-Type은 text/html로 설정
  response.write(main_view); // 응답 본문 작성: body에 main_view를 출력
  response.end(); // 응답 종료: 클라이언트에게 응답을 전송하고 응답을 종료
}

function order(response, productId) { // order 함수 정의: '/order' 경로로 요청이 들어왔을 때 실행될 함수
  response.writeHead(200, {"Content-Type": "text/html"}); // 응답 헤더 작성: 200은 성공을 의미, Content-Type은 text/html로 설정
  
  mariadb.query("INSERT INTO orderlist VALUES (" + productId + ", '" + new Date().toLocaleDateString() + "');", function(err, rows) {
    console.log(rows);
  })
  
  response.write('Order page'); // 응답 본문 작성: body에 Order page를 출력
  response.end(); // 응답 종료: 클라이언트에게 응답을 전송하고 응답을 종료
}

function mainCss(response) {
  fs.readFile('./main.css', function (err, data) {
    response.writeHead(200, {'Content-Type': 'text/css'});
    response.end(data);
  });
}

function redRacket(response) {
  fs.readFile('./img/redRacket.png', function (err, data) {
    response.writeHead(200, {'Content-Type': 'image/png'});
    response.end(data);
  });
}

function blueRacket(response) {
  fs.readFile('./img/blueRacket.png', function (err, data) {
    response.writeHead(200, {'Content-Type': 'image/png'});
    response.end(data);
  });
}

function blackRacket(response) {
  fs.readFile('./img/blackRacket.png', function (err, data) {
    response.writeHead(200, {'Content-Type': 'image/png'});
    response.end(data);
  });
}

let handle = {}; // key:value 형태의 객체 생성
handle['/'] = main; // '/' 키에 main 함수 저장
handle['/order'] = order;

/* css directory */
handle['/main.css'] = mainCss;

/* image directory */
handle['/img/redRacket.png'] = redRacket;
handle['/img/blueRacket.png'] = blueRacket;
handle['/img/blackRacket.png'] = blackRacket;

exports.handle = handle; // handle 객체를 외부에서 사용할 수 있도록 exports 객체에 저장