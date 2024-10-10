export default async function handleAnalyticsPageView() {
  const session_id = sessionStorage.getItem("session_id");
  const this_page_url = window.location.href;

  try {
    const response = await fetch(
      "https://www.analytics.weniv.co.kr/collect/pageview",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url: this_page_url }),
      }
    );

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();

    if (!session_id) {
      sessionStorage.setItem("session_id", data.session_id);
      // 여기서 주석을 풀어 data가 제대로 들어오는지 확인해보고 잘 들어온다면 주석을 제거하고 push 합니다.
      // console.log("data: ", data);
    }
  } catch (error) {
    console.error("페이지뷰 데이터 수집 에러:", error);
  }
}
