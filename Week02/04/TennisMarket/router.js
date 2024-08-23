function route(pathname, handle) { // route 함수 정의: pathname과 handle을 인자로 받음
    console.log("pathname: " + pathname); // request.url 출력, console.log란 터미널에 출력하는 함수

    handle[pathname]; // handle 객체의 pathname 프로퍼티에 해당하는 함수 호출
}

exports.route = route; // route 함수를 외부에서 사용할 수 있도록 exports 객체에 저장