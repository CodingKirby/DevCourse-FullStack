function main() {
  console.log('Request handler "main" was called.');
}

function login() {
  console.log('Request handler "login" was called.');
}

let handle = {};
handle['/'] = main;
handle['/login'] = login;

exports.handle = handle;