# 2. API 안내

---

## 1. API 주소

```python
"https://eduapi.weniv.co.kr"
```

## 2. 요청(Request)

요청(Request)에서는 통신을 위한 HTTP method와 API에 대한 엔드포인트를 안내합니다. method는 GET, POST, PUT 등 어떤 요청을 보내야 하는지에 대한 요청 타입을 나타냅니다.

```python title="기본 구조"
Method 엔드포인트
```

URL에 데이터를 실어서 서버로 전송하기도 합니다. 경로를 변수로 사용하는 Path Variable과 key와 value의 형태로 구성된 쿼리 파라미터(Query Parameter, Query String) 방법이 있습니다. 쿼리 파라미터는 쿼리 스트링(Query String)이라고 부르기도 합니다.

```python title="Path Variable"
Method 엔드포인트/<int:id>
```

```python title="쿼리 파라미터(Query Parameter) / 쿼리 스트링(Query String) / "
Method 엔드포인트?query={value}
```

## 3.응답(Response)

API 요청에 대한 응답이 안내됩니다. 어떤 요청을 보냈는지, 또는 요청 성공 및 실패에 따라 응답 코드와 데이터에 대한 정보를 알 수 있습니다.

## 4. 예제

API 주소, 요청, body, 응답에 대한 안내를 바탕으로 어떻게 API를 요청할 수 있는지 예시 코드를 제공합니다.
