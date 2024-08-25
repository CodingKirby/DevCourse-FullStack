function route(pathname, handle, response) { // route 함수 정의: pathname과 handle을 인자로 받음
    if (typeof handle[pathname] === 'function') { // handle 객체에 pathname 키가 존재하고, 그 값이 함수일 경우
        console.log("pathname: " + pathname); // request.url 출력, console.log란 터미널에 출력하는 함수
        handle[pathname](response); // handle 객체의 pathname 키에 해당하는 함수 호출
    } else { // handle 객체에 pathname 키가 존재하지 않을 경우
        return; // 아무 것도 하지 않음
    }
}

exports.route = route; // route 함수를 외부에서 사용할 수 있도록 exports 객체에 저장