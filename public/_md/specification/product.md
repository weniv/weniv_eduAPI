# 상품 정보

---

## 1. 상품 목록 확인하기

- 요청(Request)

  `https://eduapi.weniv.co.kr/1/product` 로 GET 요청을 보내 상품 목록을 확인합니다.

  ```python
  GET /1/product
  ```

- 응답(Response)

  ```jsx
  [
    {
      id: int, // 상품 id
      productName: string, // 상품명
      price: int, // 가격
      stockCount: int, // 재고
      thumbnailImg: string, // 썸네일 이미지 경로
      option: [ // 상품 옵션(array)
        {
          id: int, // 옵션 id
          optionName: string, // 옵션명
          additionalFee: int // 옵션 추가금
        },
        ...
      ],
      discountRate: int, // 할인율
      shippingFee: int, // 배송비
      detailInfoImage: [string, string, ...], // 상품 상세 이미지 경로(array)
      viewCount: int, // 조회수
      pubDate: str, // 작성일자
      modDate: str, // 수정일자
    },
  ...
  ]
  ```

- 예제
  ```jsx
  fetch("https://eduapi.weniv.co.kr/1/product")
    .then((response) => response.json())
    .then((json) => console.log(json))
    .catch((error) => console.error(error));
  ```

## 2. 상품 상세 정보 확인하기

- 요청(Request)

  `https://eduapi.weniv.co.kr/1/product/{product_id}` 로 GET 요청을 보내 상품 상세 정보를 확인합니다. 이때 상세 정보를 확인할 상품의 id를 URL에 실어 서버로 전송합니다.

  ```python
  GET /1/product/<int:product_id>
  ```

- 응답(Response)

  ```jsx
  // 상품 상세 정보를 잘 불러왔을 경우
  {
    id: int, // 상품 id
    productName: string, // 상품명
    price: int, // 가격
    stockCount: int, // 재고
    thumbnailImg: string, // 썸네일 이미지 경로
    option:
    [ // 상품 옵션(array)
      {
        id: int, // 옵션 id
        optionName: string, // 옵션명
        additionalFee: int // 옵션 추가금
      },
      ...
    ],
    discountRate: int, // 할인율
    shippingFee: int, // 배송비
    detailInfoImage: [string, string, ...], // 상품 상세 이미지 경로(array)
    viewCount: int, // 조회수
    pubDate: str, // 작성일자
    modDate: str, // 수정일자
  }

  // 존재하지 않는 상품일 경우(잘못된 상품 id로 요청)
  {detail: 'Product not found'}
  ```

- 예제
  ```jsx
  fetch("https://eduapi.weniv.co.kr/1/product/1")
    .then((response) => response.json())
    .then((json) => console.log(json))
    .catch((error) => console.error(error));
  ```

## 3. 상품 생성하기

- 요청(Request)

  `https://eduapi.weniv.co.kr/1/product` 로 상품 정보를 전송하는 POST 요청을 보내 상품을 생성합니다.

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

  - 필수값: id, productName, price, stockCount, thumbnailImg, option, discountRate, shippingFee, detailInfoImage, viewCount, pubDate, modDate

  ```jsx
  body: JSON.stringify({
    id: int*,
    productName: string*,
    price: int*,
    stockCount: int*,
    thumbnailImg: string*,
    option: array*,
    discountRate: int*,
    shippingFee: int*,
    detailInfoImage: array*,
    viewCount: int*,
    pubDate: string*,
    modDate: string*
  })
  ```

- 응답(Response)

  ```jsx
  // 상품 생성 요청이 성공했을 경우
  { message: 'Product created successfully' }

  // 필수값이 누락되었을 경우(누락된 값만큼 detail value 배열에 추가됨)
  {
    detail:[
      {
        input: {id: value, productName: value, ... 생략 ... }, // 전송한 값
        loc: ['body', 'pubDate'], // 에러가 발생한 필드(누락된 값)
        msg: "Field required", // 에러 메시지
        type: "missing", // 에러 타입
        url: "https://errors.pydantic.dev/2.6/v/missing" // 에러 설명
      }, ...
    ]
  }

  // 잘못된 타입의 값을 전송했을 경우
  {
    detail:[
      {
        input: value, // 전송한 값
        loc: ['body', 'detailInfoImage'], // 에러가 발생한 필드
        msg: "Input should be a valid list", // 에러 메시지
        type: "list_type", // 에러 타입
        url: "https://errors.pydantic.dev/2.4/v/list_type" // 에러 설명
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
  fetch("https://eduapi.weniv.co.kr/1/product", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id: 1,
      productName: "New Product",
      price: 10000,
      stockCount: 100,
      thumbnailImg: "asset/products/img/new/1.jpg",
      option: [],
      discountRate: 0,
      shippingFee: 2500,
      detailInfoImage: ["asset/products/img/new/1.jpg"],
      viewCount: 0,
      pubDate: "2023-06-01",
      modDate: "2023-06-01",
    }),
  })
    .then((response) => response.json())
    .then((json) => console.log(json))
    .catch((error) => console.error(error));
  ```

## 4. 상품 정보 수정하기

- 요청(Request)

  `https://eduapi.weniv.co.kr/1/product/{product_id}` 로 상품 정보를 전송하는 PUT 요청을 보내 상품 정보를 수정합니다. 이때 수정할 상품의 id를 URL에 실어 서버로 전송합니다.

  ```python
  PUT /1/product/<int:product_id>
  ```

- 요청 헤더(Header)

  ```jsx
  {
    'Content-Type': 'application/json'
  }
  ```

- 요청 바디(Body)

  - 필수값: id, productName, price, stockCount, thumbnailImg, option, discountRate, shippingFee, detailInfoImage, viewCount, pubDate, modDate

  ```jsx
  body: JSON.stringify({
    id: int*,
    productName: string*,
    price: int*,
    stockCount: int*,
    thumbnailImg: string*,
    option: array*,
    discountRate: int*,
    shippingFee: int*,
    detailInfoImage: array*,
    viewCount: int*,
    pubDate: string*,
    modDate: string*
  })
  ```

- 응답(Response)

  ```jsx
  // 상품 수정 요청이 성공했을 경우
  {message: 'Product updated successfully'}

  // 존재하지 않는 상품일 경우(잘못된 상품 id로 요청)
  {detail: 'Product not found'}

  // 필수값이 누락되었을 경우(누락된 값만큼 detail value 배열에 추가됨)
  {
    detail:[
      {
        input: {id: value, productName: value, ... 생략 ... }, // 전송한 값
        loc: ['body', 'pubDate'], // 에러가 발생한 필드(누락된 값)
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
        loc: ['body', 'detailInfoImage'], // 에러가 발생한 필드
        msg: "Input should be a valid list", // 에러 메시지
        type: "list_type", // 에러 타입
        url: "https://errors.pydantic.dev/2.4/v/list_type" // 에러 설명
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
  fetch("https://eduapi.weniv.co.kr/1/product/1", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id: 1,
      productName: "Updated Product",
      price: 15000,
      stockCount: 50,
      thumbnailImg: "asset/products/img/new/1.jpg",
      option: [],
      discountRate: 10,
      shippingFee: 3000,
      detailInfoImage: ["asset/products/img/new/1.jpg"],
      viewCount: 0,
      pubDate: "2023-06-01",
      modDate: "2023-06-02",
    }),
  })
    .then((response) => response.json())
    .then((json) => console.log(json))
    .catch((error) => console.error(error));
  ```

## 5. 상품 삭제하기

- 요청(Request)

  `https://eduapi.weniv.co.kr/1/product/{product_id}` 으로 DELETE 요청을 보내 상품을 삭제합니다. 이때 삭제할 상품의 id를 URL에 실어 서버로 전송합니다.

  ```python
  DELETE /1/product/<int:product_id>
  ```

- 응답(Response)

  ```jsx
  // 상품 삭제 요청이 성공했을 경우
  {
    message: "Product deleted successfully";
  }

  // 존재하지 않는 상품일 경우(잘못된 상품 id로 요청)
  {
    detail: "Product not found";
  }
  ```

- 예제
  ```jsx
  fetch("https://eduapi.weniv.co.kr/1/product/1", {
    method: "DELETE",
  })
    .then((response) => response.json())
    .then((json) => console.log(json))
    .catch((error) => console.error(error));
  ```

## 6. 상품 검색하기

- 요청(Request)

  `https://eduapi.weniv.co.kr/1/product/search?keyword={keyword}` 로 GET 요청을 보내 원하는 keyword에 알맞는 상품 정보를 확인할 수 있습니다. 이때 검색어에 해당하는 keyword를 쿼리 스트링으로 추가합니다.

  ```python
  GET /1/product/search?keyword={keyword}
  ```

- 응답(Response)

  - 쿼리 스트링에 추가한 keyword와 일치하는 문자열이 포함된 상품들의 배열을 응답 받습니다.
  - keyword와 일치하는 문자열이 포함된 상품이 없을 경우 빈 배열을 응답 받습니다.
  - 또한, 빈 문자열로 요청할 경우 전체 상품 목록을 확인할 수 있습니다.

  ```jsx
  // 상품 검색이 잘 되었을 경우
  // 1) keyword와 일치하는 문자열이 포함된 상품이 있을 경우
  [
    {
      id: int, // 상품 id
      productName: string, // 상품명
      price: int, // 가격
      stockCount: int, // 재고
      thumbnailImg: string, // 썸네일 이미지 경로
      option:
      [ // 상품 옵션(array)
        {
          id: int, // 옵션 id
          optionName: string, // 옵션명
          additionalFee: int // 옵션 추가금
        },
        ...
      ],
      discountRate: int, // 할인율
      shippingFee: int, // 배송비
      detailInfoImage: [string, string, ...], // 상품 상세 이미지 경로(array)
      viewCount: int, // 조회수
      pubDate: str, // 작성일자
      modDate: str, // 수정일자
    },
    ...
  ]

  // 2) keyword와 일치하는 문자열이 포함된 상품이 없을 경우(빈 배열)
  []

  // 3) 빈 문자열로 요청할 경우(/product/search?keyword=)
  [{id: int, productName: string, ...}, ...]

  // 쿼리스트링을 추가하지 않을 경우(/product/search)
  {
    detail:[
      {
        input: null, // 전송된 값
        loc: ['query', 'keyword'], // 에러가 발생한 필드(누락된 값)
        msg: "Field required", // 에러 메시지
        type: "missing", // 에러 타입
        url: "https://errors.pydantic.dev/2.6/v/missing" // 에러 설명
      },
      ...
    ]
  }
  ```

- 예제
  ```jsx
  fetch("https://eduapi.weniv.co.kr/1/product/1", {
    method: "DELETE",
  })
    .then((response) => response.json())
    .then((json) => console.log(json))
    .catch((error) => console.error(error));
  ```
