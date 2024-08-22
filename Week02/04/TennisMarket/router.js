function route(pathname) { // route 함수 정의: pathname을 인자로 받음
    console.log("pathname: " + pathname); // request.url 출력, console.log란 터미널에 출력하는 함수
}

exports.route = route; // route 함수를 외부에서 사용할 수 있도록 exports 객체에 저장