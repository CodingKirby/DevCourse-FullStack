function route(pathname, handle, response) { // route 함수가 response 인자를 받도록 수정
    if (typeof handle[pathname] === 'function') {
        console.log("pathname: " + pathname);
        handle[pathname](response); // response 객체를 함수에 전달
    } else {
        console.log("No request handler found for " + pathname);
        response.writeHead(404, {"Content-Type": "text/html"});
        response.write("404 Not Found");
        response.end(); 
    }
}

exports.route = route;