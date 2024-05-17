# Authorization

---

## 1. 회원가입

- 요청(Request)

  `https://eduapi.weniv.co.kr/1/signup` 으로 회원 가입 정보를 전송하는 POST 요청을 보냅니다.

  ```python
  POST /1/signup
  ```

- 요청 헤더(Header)

  ```jsx
  {
    "Content-Type": "application/json"
  }
  ```

- 요청 바디(Body)

  - 필수값: username, password

  ```jsx
  body: JSON.stringify({
    username: string*,
    password: string*
  })
  ```

- 응답(Response)

  ```jsx
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

- 예제
  ```jsx
  fetch("https://eduapi.weniv.co.kr/1/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: "test1",
      password: "test1234",
    }),
  })
    .then((response) => response.json())
    .then((json) => console.log(json))
    .catch((error) => console.error(error));
  ```

## 2. 로그인

- 요청(Request)
  `https://eduapi.weniv.co.kr/1/login` 으로 로그인을 하기 위해 계정 정보를 전송하는 POST 요청을 보냅니다.

  ```python
  POST / 1 / login;
  ```

- 요청 헤더(Header)

  ```jsx
  {
    "Content-Type": "application/json"
  }
  ```

- 요청 바디(Body)

  - 필수값: username, password

  ```jsx
  body: JSON.stringify({
    username: string*,
    password: string*
  })
  ```

- 응답(Response)

  ```jsx
  // 로그인 성공했을 경우
  {
    message: 'Login success',
    access_token: 'eyJhbGciOi.weniv.h8t7NJKEiWCh7G3',
    refresh_token: 'eyJhbGciOi.weniv.h8t7NJKEiWCh7G3'
  }

  // 로그인 실패했을 경우
  {message: 'Login failed'}

  // 필수값이 누락되었을 경우(누락된 값만큼 detail value 배열에 추가됨)
  {
    detail:[
    {
      input: {username: value}, // 전송한 값
      loc: ['body', 'password'], // 에러가 발생한 필드(누락된 값)
      msg: "Field required", // 에러 메시지
      type: "missing", // 에러 타입
      url: "https://errors.pydantic.dev/2.6/v/missing" // 에러 설명
    }
    ]
  }

  // 잘못된 타입의 값을 전송했을 경우
  {
    detail:[
    {
      input: value, // 전송한 값
      loc: ['body', 'username'], // 에러가 발생한 필드
      msg: "Input should be a valid string", // 에러 메시지
      type: "string_type", // 에러 타입
      url: "https://errors.pydantic.dev/2.4/v/string_type" // 에러 설명
    }
    ]
  }

  // json 형식이 아닌 값으로 전송했을 경우
  {
    detail:[
    {
      ctx: {errors: 'Expecting value'},
      input: {},
      loc: ['body', 1],
      msg: "JSON decode error",
      type: "json_invalid",
    }
    ]
  }
  ```

- 예제
  ```jsx
  fetch("https://eduapi.weniv.co.kr/1/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: "test1",
      password: "test1234",
    }),
  })
    .then((response) => response.json())
    .then((json) => console.log(json))
    .catch((error) => console.error(error));
  ```

## 3. 토큰 확인

- 요청(Request)

  `https://eduapi.weniv.co.kr/login_confirm` 으로 헤더에 토큰 정보를 실어 POST 요청을 보내면 토큰이 유효한지 확인할 수 있습니다.

  ```python
  POST / login_confirm
  ```

- 요청 헤더(Header)

  ```jsx
  {
    'Authorization': `Bearer ${access_token}`,
  }
  ```

- 응답(Response)

  ```jsx
  // 토큰이 유효할 때
  {
    message: "Token is valid";
  }

  // 토큰이 유효하지 않을 때(잘못된 토큰으로 요청했을 때)
  {
    detail: "Invalid token";
  }
  ```

- 예제
  ```jsx
  fetch("https://eduapi.weniv.co.kr/login_confirm", {
    method: "POST",
    headers: {
      Authorization: "Bearer eyJhbGciOi.weniv.h8t7NJKEiWCh7G3",
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json))
    .catch((error) => console.error(error));
  ```

## 4. 사용자 정보 확인

- 요청(Request)

  `https://eduapi.weniv.co.kr/1/login_user_info` 으로 GET 요청을 보내면 회원가입된 모든 사용자의 정보를 확인할 수 있습니다.

  ```python
  GET / 1 / login_user_info
  ```

- 응답(Response)

  - 사용자 정보가 담긴 리스트가 출력됩니다.

  ```jsx
  [{username: string, password: string}, {…}]
  ```

- 예제
  ```jsonc
  fetch("https://eduapi.weniv.co.kr/1/login_user_info")
    .then((response) => response.json())
    .then((json) => console.log(json))
    .catch((error) => console.error(error));
  ```
