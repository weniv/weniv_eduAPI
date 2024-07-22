# 강의 정보

---

## 1. 강의 목록 확인하기

- 요청(Request)

  `https://eduapi.weniv.co.kr/1/course` 로 GET 요청을 보내 강의 목록을 확인합니다.

  ```python
  GET /1/course
  ```

- 응답(Response)

  ```jsx
  [
    {
      title: string, // 강의명
      url: string, // 강의 url
      price: int, // 가격
      discount: int, // 할인
      students: int, // 수강생 수
      thumbnail: string, // 썸네일 이미지 경로
      rating: float, // 별점
      reviews: int, // 후기 수
      level: string, // 난이도
      category: string, // 카테고리
      published: string // 강의 개시일
    },
  	...
  ]
  ```

- 예제
  ```jsx
  fetch("https://eduapi.weniv.co.kr/1/course")
    .then((response) => response.json())
    .then((json) => console.log(json))
    .catch((error) => console.error(error));
  ```

## 2. 강의 상세 정보 확인하기

- 요청(Request)

  `https://eduapi.weniv.co.kr/1/course/{course_id}` 로 GET 요청을 보내 강의 상세 정보를 확인합니다. 이때 상세 정보를 확인할 강의의 id를 URL에 실어 서버로 전송합니다.

  ```python
  GET /1/course/<int:course_id>
  ```

- 응답(Response)

  ```jsx
  // 강의 상세 정보를 잘 불러왔을 경우
  {
    title: string, // 강의명
    url: string, // 강의 url
    price: int, // 가격
    discount: int, // 할인
    students: int, // 수강생 수
    thumbnail: string, // 썸네일 이미지 경로
    rating: float, // 별점
    reviews: int, // 후기 수
    level: string, // 난이도
    category: string, // 카테고리
    published: string // 강의 개시일
  }

  // 존재하지 않는 상품일 경우(잘못된 강의 id로 요청)
  {detail: 'Course not found'}
  ```

- 예제
  ```jsx
  fetch("https://eduapi.weniv.co.kr/1/course/1")
    .then((response) => response.json())
    .then((json) => console.log(json))
    .catch((error) => console.error(error));
  ```

## 3. 강의 생성하기

- 요청(Request)

  `https://eduapi.weniv.co.kr/1/product` 으로 상품 정보를 전송하는 POST 요청을 보내 상품을 생성합니다.

  ```python
  POST /1/product
  ```

- 요청 헤더(Header)

  ```jsx
  {
    'Content-Type': 'application/json'
  }
  ```

- 요청 바디(Body)

  - 필수값: title, url, price, discount, students, thumbnail, rating, reviews, level, category, published

  ```jsx
  body: JSON.stringify({
    title: string*,
    url: string*,
    price: int*,
    discount: int*,
    students: int*
    thumbnail: string*,
    rating: float*,
    reviews: int*,
    level: string*,
    category: string*,
    published: string*
  })
  ```

- 응답(Response)

  ```jsx
  // 강의 생성 요청이 성공했을 경우
  {message: 'Course created successfully'}

  // 필수값이 누락되었을 경우(누락된 값만큼 detail value 배열에 추가됨)
  {
    detail:[
    {
      input: {title: value, url: value, ... 생략 ... }, // 전송한 값
      loc: ['body', 'category'], // 에러가 발생한 필드(누락된 값)
      msg: "Field required", // 에러 메시지
      type: "missing", // 에러 타입
      url: "https://errors.pydantic.dev/2.6/v/missing" // 에러 설명
    },
    ...
    ]
  }

  // 잘못된 타입의 값을 전송했을 경우
  {
    detail:[
      {
        input: value, // 전송한 값
        loc: ['body', 'title'], // 에러가 발생한 필드
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
  fetch("https://eduapi.weniv.co.kr/1/course", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: "New Course",
      url: "New Instructor",
      price: 10000,
      discount: 0,
      students: 0,
      thumbnail: "asset/courses/img/new/1.jpg",
      rating: 0,
      reviews: 0,
      level: "Beginner",
      category: "Web Development",
      published: "2023-06-01",
    }),
  })
    .then((response) => response.json())
    .then((json) => console.log(json))
    .catch((error) => console.error(error));
  ```

## 4. 강의 정보 수정하기

- 요청(Request)

  `https://eduapi.weniv.co.kr/1/course/{course_id}` 으로 강의 정보를 전송하는 PUT 요청을 보내 강의 정보를 수정합니다. 이때 수정할 강의의 id를 URL에 실어 서버로 전송합니다.

  ```python
  PUT /1/course/<int:course_id>
  ```

- 요청 헤더(Header)

  ```jsx
  {
    'Content-Type': 'application/json'
  }
  ```

- 요청 바디(Body)

  - 필수값: title, url, price, discount, students, thumbnail, rating, reviews, level, category, published

  ```jsx
  body: JSON.stringify({
    title: string*,
    url: string*,
    price: int*,
    discount: int*,
    students: int*
    thumbnail: string*,
    rating: float*,
    reviews: int*,
    level: string*,
    category: string*,
    published: string*
  })
  ```

- 응답(Response)

  ```jsx
  // 강의 수정 요청이 성공했을 경우
  {message: 'Course updated successfully'}

  // 존재하지 않는 강의일 경우(잘못된 강의 id로 요청)
  {detail: 'Course not found'}

  // 필수값이 누락되었을 경우(누락된 값만큼 detail value 배열에 추가됨)
  {
    detail:[
      {
        input: {title: value, url: value, ... 생략 ... }, // 전송한 값
        loc: ['body', 'category'], // 에러가 발생한 필드(누락된 값)
        msg: "Field required", // 에러 메시지
        type: "missing", // 에러 타입
        url: "https://errors.pydantic.dev/2.6/v/missing" // 에러 설명
      },
      ...
    ]
  }

  // 잘못된 타입의 값을 전송했을 경우
  {
    detail:[
      {
        input: value, // 전송한 값
        loc: ['body', 'title'], // 에러가 발생한 필드
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
  fetch("https://eduapi.weniv.co.kr/1/course/1", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: "Updated Course",
      url: "Updated Instructor",
      price: 10000,
      discount: 0,
      students: 0,
      thumbnail: "asset/courses/img/new/1.jpg",
      rating: 0,
      reviews: 0,
      level: "Beginner",
      category: "Web Development",
      published: "2023-06-01",
    }),
  })
    .then((response) => response.json())
    .then((json) => console.log(json))
    .catch((error) => console.error(error));
  ```

## 5. 강의 삭제하기

- 요청(Request)

  `https://eduapi.weniv.co.kr/1/course/{course_id}` 로 DELETE 요청을 보내 강의를 삭제합니다. 이때 삭제할 강의의 id를 URL에 실어 서버로 전송합니다.

  ```python
  DELETE /1/course/<int:course_id>
  ```

- 응답(Response)

  ```jsx
  // 강의 삭제 요청이 성공했을 경우
  {
    message: "Course deleted successfully";
  }

  // 존재하지 않는 강의일 경우(잘못된 강의 id로 요청)
  {
    detail: "Course not found";
  }
  ```

- 예제
  ```jsx
  fetch("https://eduapi.weniv.co.kr/1/course/1", {
    method: "DELETE",
  })
    .then((response) => response.json())
    .then((json) => console.log(json))
    .catch((error) => console.error(error));
  ```
