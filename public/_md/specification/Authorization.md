# 1. 회원가입

---

- 요청(Request)
  `<https://eduapi.weniv.co.kr/1/signup>{:html}`
  으로 회원 가입 정보를 전송하는 POST 요청을 보냅니다.

```json
// 회원가입 성공했을 경우
{
  message: "User created successfully";
}

// 이미 가입된 사용자의 경우
{
  message: "User already exists";
}

// 필수값이 누락되었을 경우(누락된 값만큼 detail value 배열에 추가됨)
{
  detail: [
    {
      input: { username: value }, // 전송한 값
      loc: ["body", "password"], // 에러가 발생한 필드(누락된 값)
      msg: "Field required", // 에러 메시지
      type: "missing", // 에러 타입
      url: "https://errors.pydantic.dev/2.6/v/missing", // 에러 설명
    },
  ];
}

// 잘못된 타입의 값을 전송했을 경우
{
  detail: [
    {
      input: value, // 전송한 값
      loc: ["body", "username"], // 에러가 발생한 필드
      msg: "Input should be a valid string", // 에러 메시지
      type: "string_type", // 에러 타입
      url: "https://errors.pydantic.dev/2.4/v/string_type", // 에러 설명
    },
  ];
}

// json 형식이 아닌 값으로 전송했을 경우
{
  detail: [
    {
      ctx: { errors: "Expecting value" },
      input: {},
      loc: ["body", 1],
      msg: "JSON decode error",
      type: "json_invalid",
    },
  ];
}
```
