<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
  <title>사브사리 · 오늘의 행운 결과</title>
  <link rel="stylesheet" href="styles/style.css">
  <style>
    :root{ --ink:#333; --radius:16px; }
    .grid{ display:grid; grid-template-columns:1fr; gap:10px; }
    @media (min-width:480px){ .grid{ grid-template-columns:1fr 1fr; } }
    .fortune-card{
      padding:14px; border-radius:var(--radius); line-height:1.5; font-weight:700;
      background: conic-gradient(from 180deg at 50% 50%, #fff 0 30%, #fff7fb 30% 60%, #eef8ff 60% 100%);
      border:1px dashed #ffd1e6; color:var(--ink);
    }
    .num{ display:inline-block; min-width:28px; padding:4px 8px; border-radius:999px; font-size:12px; font-weight:800; background:#fff0f6; border:1px solid #ffd6e9; margin-right:8px; color:#c43c7a; text-align:center }
    .title{ font-weight:800; font-size:20px; margin:6px 0 12px; text-align:center }
  </style>
  <script src="assets/fortunes52.js"></script>
</head>
<body>
  <div class="wrap">
    <div class="card">
      <div class="chip">오늘의 행운</div>
      <h2 class="title">사브사리가 전하는 52개의 행운메시지 ✨</h2>
      <div id="list" class="grid"></div>
      <div style="margin-top:12px; text-align:center">
        <a class="tip" href="./index.html">처음으로</a>
      </div>
    </div>
    <div class="footer">© Namusoo Design · Sabsari</div>
  </div>

  <script>
    // 52개 메시지를 완전 랜덤 셔플 후 전부 렌더링
    const root = document.getElementById('list');
    const data = shuffleFortunes52([...FORTUNE_52]);

    function el(html){ const t = document.createElement('template'); t.innerHTML = html.trim(); return t.content.firstChild; }

    data.forEach((txt, idx) => {
      root.appendChild(el(`<div class="fortune-card"><span class="num">${String(idx+1).padStart(2,'0')}</span>${txt}</div>`));
    });
  </script>
</body>
</html>
