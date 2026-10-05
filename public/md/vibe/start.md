# 1. 바로 시작하기

---

AI와 함께 만든 웹페이지에 **백엔드(데이터 저장소)**를 바로 붙여 볼 수 있는 바이브 코딩 실습용 DB입니다. 가입이나 키 발급 없이, 주소만 정하면 바로 저장하고 불러올 수 있습니다.

:::div{.callout}
실습용 DB입니다. 모든 데이터는 **매일 새벽 4시에 초기화**되고, 공간 이름을 아는 사람은 **누구나 데이터를 보고 고칠 수 있습니다.** 비밀번호·전화번호·주소 같은 개인정보는 저장하지 마세요. `password` 같은 필드는 서버가 저장을 거부합니다.
:::

## 1. 공간 이름 정하기

주소 가운데의 `{space}`가 나만의 실습 공간입니다. 영문·숫자·`-`·`_`로 40자 이내에서 자유롭게 정하면 됩니다. 다른 사람과 겹치지 않도록 **나만 쓸 법한 이름**을 정하세요.

```python
https://dev.wenivops.co.kr/services/fastapi-crud/vibe/{space}
```

```python title="예시"
https://dev.wenivops.co.kr/services/fastapi-crud/vibe/weniv-licat-0815
```

수업 시간에 반 전체가 같은 공간 이름을 쓰면, 모두의 데이터가 한 화면에 모이는 것을 함께 볼 수 있습니다.

## 2. 컬렉션과 데이터

공간 안에는 **컬렉션**(데이터 종류, 예: `guestbook`, `todos`)을 자유롭게 만들 수 있습니다. 미리 만들 필요 없이 처음 POST 요청을 보내는 순간 자동으로 생깁니다. 저장할 필드도 정해져 있지 않습니다.

| Method | 주소 | 설명 |
|---|---|---|
| GET | `/vibe/{space}/{컬렉션}` | 목록 조회 |
| GET | `/vibe/{space}/{컬렉션}/{id}` | 하나 조회 |
| POST | `/vibe/{space}/{컬렉션}` | 생성 |
| PATCH | `/vibe/{space}/{컬렉션}/{id}` | 부분 수정 (보낸 필드만 바뀜) |
| PUT | `/vibe/{space}/{컬렉션}/{id}` | 전체 수정 (보내지 않은 필드는 사라짐) |
| DELETE | `/vibe/{space}/{컬렉션}/{id}` | 삭제 |

- `id`, `createdAt`, `updatedAt`은 서버가 자동으로 채웁니다.
- 목록 조회에는 `?sort=필드`(오름차순), `?sort=-필드`(내림차순), `?limit=`, `?offset=`을 붙일 수 있습니다.
- 에러가 나면 `{ "detail": "메시지" }` 형식으로 이유를 알려 줍니다.

## 3. 예제

```jsx title="방명록 글 저장하기"
fetch("https://dev.wenivops.co.kr/services/fastapi-crud/vibe/weniv-licat-0815/guestbook", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ name: "라이캣", message: "안녕하세요!" }),
})
  .then((response) => response.json())
  .then((json) => console.log(json));
```

```jsx title="응답"
{
  id: 1,
  name: "라이캣",
  message: "안녕하세요!",
  createdAt: "2026-10-05T14:00:00+09:00",
  updatedAt: "2026-10-05T14:00:00+09:00"
}
```

```jsx title="방명록 목록 불러오기 (최신순)"
fetch("https://dev.wenivops.co.kr/services/fastapi-crud/vibe/weniv-licat-0815/guestbook?sort=-id")
  .then((response) => response.json())
  .then((json) => console.log(json));
```

## 4. 제한

| 항목 | 제한 |
|---|---|
| 초기화 | 매일 새벽 4시 (모든 공간) |
| 공간 하나의 컬렉션 수 | 20개 |
| 컬렉션 하나의 데이터 수 | 500개 |
| 데이터 하나의 크기 | 10KB |
