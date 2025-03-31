export default async function handleAnalyticsClick(event, text) {
  event.preventDefault();

  const ANCHOR = event.currentTarget;

  const session_id = sessionStorage.getItem("session_id");

  const source_url = window.location.href;
  const target_url = ANCHOR.href;
  const target_tar = ANCHOR.target || "_self";

  try {
    const response = await fetch(
      "https://dev.wenivops.co.kr/api/weniv_analytics/collect/anchor-click",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Session-Id": session_id,
        },
        body: JSON.stringify({ source_url, target_url, type: text }),
      }
    );

    if (!response.ok) {
      throw new Error("Network response was not ok");
    } else {
      // 여기서 주석을 풀어 data가 제대로 들어오는지 확인해보고 잘 들어온다면 else 구문을 제거하고 push 합니다.
      // const data = await response.json();
      // console.log(data);
    }
  } catch (error) {
    console.error("Error:", error);
  } finally {
    window.open(target_url, target_tar);
  }
}
