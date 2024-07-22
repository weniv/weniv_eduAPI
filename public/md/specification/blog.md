# 블로그 정보

---

## 1. 블로그 목록 확인하기

- 요청(Request)

  `https://eduapi.weniv.co.kr/1/blog` 로 GET 요청을 보내 블로그 목록을 확인합니다.

  ```python
  GET / 1 / blog
  ```

- 응답(Response)
  ```jsx
  [
    {
      _id: string, // 게시글 id
      index: string, // 게시글 index
      thumbnail: string, // 썸네일 이미지 경로
      title: string, //제목
      content: string, // 내용
      date: string, // 작성일
      time: string, // 작성시간
      author: string, // 작성자
      email: string, // 작성자의 이메일
      views_count: string, // 조회수
    },
  ...
  ]
  ```
- 예제
  ```jsx
  fetch("https://eduapi.weniv.co.kr/1/blog")
    .then((response) => response.json())
    .then((json) => console.log(json))
    .catch((error) => console.error(error));
  ```

## 2. 게시글 상세 정보 확인하기

- 요청(Request)

  `https://eduapi.weniv.co.kr/1/blog/{blog_id}` 로 GET 요청을 보내 블로그 상세 정보를 확인합니다. 이때 상세 정보를 확인할 게시글의 id를 URL에 실어 함께 서버로 전송합니다.

  ```python
  GET /1/blog/<int:blog_id>
  ```

- 응답(Response)

  ```jsx
  // 게시글 상세 정보를 잘 불러왔을 경우
  {
    _id: string, // 게시글 id
    index: string, // 게시글 index
    thumbnail: string, // 썸네일 이미지 경로
    title: string, //제목
    content: string, // 내용
    date: string, // 작성일
    time: string, // 작성시간
    author: string, // 작성자
    email: string, // 작성자의 이메일
    views_count: string, // 조회수
  }

  // 존재하지 않는 게시글일 경우(잘못된 게시글 id로 요청)
  {detail: 'Blog data not found'}
  ```

- 예제
  ```jsx
  fetch("https://eduapi.weniv.co.kr/1/blog/1")
    .then((response) => response.json())
    .then((json) => console.log(json))
    .catch((error) => console.error(error));
  ```

## 3. 게시글 작성하기

- 요청(Request)

  `https://eduapi.weniv.co.kr/1/blog` 로 게시글 정보를 전송하는 POST 요청을 보내 게시글을 생성합니다.

  ```jsx
  POST / 1 / blog;
  ```

- 요청 헤더(Header)

  ```jsx
  {
    "Content-Type": "application/json"
  }
  ```

- 요청 바디(Body)

  - 필수값: title, content

  ```jsx
  body: JSON.stringify({
    title: string*, // 게시글 제목
    content: string* // 게시글 내용
  })
  ```

- 응답(Response)

  ```jsx
  // 게시글 작성 요청이 성공했을 경우
  {
    message: "Blog created successfully";
  }

  // 필수값이 누락되었을 경우(누락된 값만큼 detail value 배열에 추가됨)
  {
    detail: [
      {
        input: { title: value }, // 전송한 값
        loc: ["body", "content"], // 에러가 발생한 필드(누락된 값)
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
        loc: ["body", "title"], // 에러가 발생한 필드
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
  fetch("https://eduapi.weniv.co.kr/1/blog", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: "test",
      content: "test",
    }),
  })
    .then((response) => response.json())
    .then((json) => console.log(json))
    .catch((error) => console.error(error));
  ```

## 4. 게시글 수정하기

- 요청(Request)

  `https://eduapi.weniv.co.kr/1/blog/{blog_id}` 로 게시글 정보를 전송하는 PUT 요청을 보내 게시글을 수정합니다. 이때 수정할 게시글의 id를 URL에 실어 함께 서버로 전송합니다.

  ```python
  PUT /1/blog/<int:blog_id>
  ```

- 요청 헤더(Header)

  ```jsx
  {
    "Content-Type": "application/json"
  }
  ```

- 요청 바디(Body)

  - 필수값: title, content

  ```jsx
  body: JSON.stringify({
    title: string*, // 게시글 제목
    content: string* // 게시글 내용
  })
  ```

- 응답(Response)

  ```jsx
  // 게시글 수정 요청이 성공했을 경우
  {
    message: "Blog updated successfully";
  }

  // 존재하지 않는 게시글일 경우(잘못된 게시글 id로 요청)
  {
    detail: "Blog data not found";
  }

  // 필수값이 누락되었을 경우(누락된 값만큼 detail value 배열에 추가됨)
  {
    detail: [
      {
        input: { title: value }, // 전송한 값
        loc: ["body", "content"], // 에러가 발생한 필드(누락된 값)
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
        loc: ["body", "title"], // 에러가 발생한 필드
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
  fetch("https://eduapi.weniv.co.kr/1/blog/1", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: "test put",
      content: "test put",
    }),
  })
    .then((response) => response.json())
    .then((json) => console.log(json))
    .catch((error) => console.error(error));
  ```

## 5. 게시글 삭제하기

- 요청(Request)

  `https://eduapi.weniv.co.kr/1/blog/{blog_id}` 로 DELETE 요청을 보내 게시글을 삭제합니다. 이때 삭제할 id를 URL에 실어 함께 서버로 전송합니다.

  ```python
  DELETE /1/blog/<int:blog_id>
  ```

- 응답(Response)

  ```jsx
  // 게시글 삭제 요청이 성공했을 경우
  {
    message: "Blog deleted successfully";
  }

  // 존재하지 않는 게시글일 경우(잘못된 게시글 id로 요청)
  {
    detail: "Blog data not found";
  }
  ```

- 예제
  ```jsx
  fetch("https://eduapi.weniv.co.kr/1/blog/1", {
    method: "DELETE",
  })
    .then((response) => response.json())
    .then((json) => console.log(json))
    .catch((error) => console.error(error));
  ```
