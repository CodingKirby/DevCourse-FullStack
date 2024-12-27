const express = require("express");
const app = express();
const { faker } = require("@faker-js/faker");

app.get("/fake/users/", function (req, res) {
  const { num } = req.query;
  let users = [];
  console.log(num);

  if (num) {
    // 유저 수가 있을 때: 여러 명 생성
    users = Array.from({ length: num }, () => ({
      email: faker.internet.email(),
      password: faker.internet.password(),
      name: faker.internet.username(),
      phone: faker.phone.number({ style: "national" }),
    }));
  } else {
    // 유저 수가 없을 때: 한 명 생성
    users = {
      email: faker.internet.email(),
      password: faker.internet.password(),
      name: faker.internet.username(),
      phone: faker.phone.number({ style: "national" }),
    };
  }

  res.status(200).json(users);
});

app.listen(5555);
