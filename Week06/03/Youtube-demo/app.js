// 기본 Express 설정
require('dotenv').config({ path: './Week06/03/Youtube-demo/.env' });
const express = require('express');
const app = express();

app.listen(process.env.PORT);
app.use(express.json());

// 라우터 모듈 가져오기
const userRouter = require('./routes/users'); // user-demo.js 불러오기
const channelRouter = require('./routes/channels'); // channel-demo.js 불러오기

// 라우터를 애플리케이션에 등록
app.use("/users", userRouter);
app.use("/channels", channelRouter);