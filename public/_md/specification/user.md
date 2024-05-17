# 사용자 정보

---

## 1. 사용자 목록 확인하기

- 요청(Request)

  `https://eduapi.weniv.co.kr/1/user` 로 GET 요청을 보내 사용자 목록을 확인합니다.

  ```python
  GET /1/user
  ```

- 응답(Response)
  ```jsx
  [
    {
      _id: string, // 사용자 id
      index: int, // 사용자 index
      name: string, // 이름
      email: string, // 이메일
      phone: string, // 전화번호
      country: string, // 국적
      address: string, // 주소
      job: string, // 직업
      int: string, // 나이
    },
    ...
  ]
  ```
- 예제
  ```jsx
  fetch("https://eduapi.weniv.co.kr/1/user")
    .then((response) => response.json())
    .then((json) => console.log(json))
    .catch((error) => console.error(error));
  ```

## 2. 사용자 상세 정보 확인하기

- 요청(Request)

  `https://eduapi.weniv.co.kr/1/user/{user_id}` 로 GET 요청을 보내 사용자 상세 정보를 확인합니다. 이때 상세 정보를 확인할 사용자의 id를 URL에 실어 서버로 전송합니다.

  ```python
  GET /1/user/<int:user_id>
  ```

- 응답(Response)

  ```jsx
  // 사용자 상세 정보를 잘 불러왔을 경우
    {
    _id: string, // 사용자 id
    index: int, // 사용자 index
    name: string, // 이름
    email: string, // 이메일
    phone: string, // 전화번호
    country: string, // 국적
    address: string, // 주소
    job: string, // 직업
    int: string, // 나이
    }

  // 존재하지 않는 사용자일 경우(잘못된 사용자 id로 요청)
  {detail: 'User not found'}
  ```

- 예제
  ```jsx
  fetch("https://eduapi.weniv.co.kr/1/user/1")
    .then((response) => response.json())
    .then((json) => console.log(json))
    .catch((error) => console.error(error));
  ```

## 3. 사용자 생성하기

- 요청(Request)

  `https://eduapi.weniv.co.kr/1/user` 로 사용자 정보를 전송하는 POST 요청을 보내 사용자를 생성합니다.

  ```python
  POST /1/user
  ```

- 요청 헤더(Header)

  ```jsx
  {
    'Content-Type': 'application/json'
  }
  ```

- 요청 바디(Body)

  - 필수값: name, email

  ```jsx
  body: JSON.stringify({
    name: string*,
    email: string*,
    phone: string,
    country: string,
    address: string,
    job: string,
    int: string,
  })
  ```

- 응답(Response)

  ```jsx
  // 사용자 생성 요청이 성공했을 경우
  {message: 'User created successfully'}

  // 필수값이 누락되었을 경우(누락된 값만큼 detail value 배열에 추가됨)
  {
    detail:[
      {
        input: {name: value, phone: value, ... 생략 ... }, // 전송한 값
        loc: ['body', 'email'], // 에러가 발생한 필드(누락된 값)
        msg: "Field required", // 에러 메시지
        type: "missing",
        url: "https://errors.pydantic.dev/2.6/v/missing"
      },
      ...
    ]
  }

  // 잘못된 타입의 값을 전송했을 경우
  {
    detail:[
      {
        input: value, // 전송한 값
        loc: ['body', 'name'], // 에러가 발생한 필드
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
  fetch("https://eduapi.weniv.co.kr/1/user", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: "New User",
      email: "newuser@example.com",
      phone: "010-12134-56178",
      country: "Korea",
      address: "Seoul, South Korea",
      job: "Developer",
      int: "30",
    }),
  })
    .then((response) => response.json())
    .then((json) => console.log(json))
    .catch((error) => console.error(error));
  ```

  ## 4. 사용자 정보 수정하기

  - 요청(Request)

    `https://eduapi.weniv.co.kr/1/user/{user_id}` 로 사용자 정보를 전송하는 PUT 요청을 보내 사용자 정보를 수정합니다. 이때 수정할 사용자의 id를 URL에 실어 서버로 전송합니다.

    ```python
    PUT /1/user/<int:user_id>
    ```

  - 요청 헤더(Header)

    ```jsx
    {
      'Content-Type': 'application/json'
    }
    ```

  - 요청 바디(Body)

    - 필수값: name, email

    ```jsx
    body: JSON.stringify({
      name: string*,
      email: string*,
      phone: string,
      country: string,
      address: string,
      job: string,
      int: string,
    })
    ```

  - 응답(Response)

    ```jsx
    // 사용자 정보 수정 요청이 성공했을 경우
    {message: 'User updated successfully'}

    // 존재하지 않는 사용자일 경우(잘못된 사용자 id로 요청)
    {detail: 'User not found'}

    // 필수값이 누락되었을 경우(누락된 값만큼 detail value 배열에 추가됨)
    {
      detail:[
        {
          input: {name: value, phone: value, ... 생략 ... }, // 전송한 값
          loc: ['body', 'email'], // 에러가 발생한 필드(누락된 값)
          msg: "Field required", // 에러 메시지
          type: "missing",
          url: "https://errors.pydantic.dev/2.6/v/missing"
        },
        ...
      ]
    }

    // 잘못된 타입의 값을 전송했을 경우
    {
      detail:[
        {
          input: value, // 전송한 값
          loc: ['body', 'name'], // 에러가 발생한 필드
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
    fetch("https://eduapi.weniv.co.kr/1/user/1", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: "Updated User",
        email: "updateduser@example.com",
        phone: "010-9876-5432",
        country: "USA",
        address: "New York, USA",
        job: "Designer",
        int: "35",
      }),
    })
      .then((response) => response.json())
      .then((json) => console.log(json))
      .catch((error) => console.error(error));
    ```

    ## 5. 사용자 삭제하기

    - 요청(Request)

      `https://eduapi.weniv.co.kr/1/user/{user_id}` 으로 DELETE 요청을 보내 사용자를 삭제합니다. 이때 삭제할 사용자의 id를 URL에 실어 서버로 전송합니다.

      ```python
      DELETE /1/user/<int:user_id>
      ```

    - 응답(Response)

      ```jsx
      // 사용자 삭제 요청이 성공했을 경우
      {
        message: "User deleted successfully";
      }

      // 존재하지 않는 사용자일 경우(잘못된 사용자 id로 요청)
      {
        detail: "User not found";
      }
      ```

    - 예제
      ```jsx
      fetch("https://eduapi.weniv.co.kr/1/user/1", {
        method: "DELETE",
      })
        .then((response) => response.json())
        .then((json) => console.log(json))
        .catch((error) => console.error(error));
      ```
