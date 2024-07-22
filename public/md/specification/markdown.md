# 마크다운 블로그

---

## 1. 게시글 목록 가져오기

- 요청(Request)

  `https://eduapi.weniv.co.kr/1/markdownblog` 로 GET 요청을 보내 마크다운 형식으로 내용이 작성된 게시글 목록을 확인합니다.

  ```python
  GET /1/markdownblog
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
  fetch("https://eduapi.weniv.co.kr/markdownblog")
    .then((response) => response.json())
    .then((json) => console.log(json))
    .catch((error) => console.error(error));
  ```
