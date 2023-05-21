// 獲取當前日期
var currentDate = new Date();

// 節日列表（示例）
var holidays = [
  {
    date: new Date('2023-02-22'), // 貓之日 02-22
    message: '今天是<br>「猫の日」 節日<br>1987 年 2 月 22 號<hr class="hr-style-two">位於 「日本」<br>用於慶祝和紀念<br>貓咪與人類和平共處<br>日語中的發音「2」<br>和貓叫聲 「ニャン」 接近'
  },
  {
    date: new Date('2023-02-28'), // 二二八事件 02-28
    message: '今天是<br>「二二八事件」<br>的悼念日<br>1947 年 2 月 28 號<hr class="hr-style-two">位於 「臺灣」<br>臺灣各地爆發官民衝突<br>民眾要求政治改革<br>最終中國國民執政黨<br>派遣軍隊武力鎮壓'
  },
  {
    date: new Date('2023-06-04'), // 六四天安門事件 06-04
    message: '今天是<br>「六四天安門事件」<br>的悼念日<br>1989 年 6 月 4 號<hr class="hr-style-two">位於 「中華人民共和國」<br>由中國高校學生<br>在北京市天安門廣場發起<br>近兩個月的全境示威運動<br>這場抗議最終被武力清場'
  },
  {
    date: new Date('2023-11-11'), // Pocky Day 11-11
    message: '今天是<br>「Pocky Day」 節日<br>1999 年 11 月 11 號<hr class="hr-style-two">位於 「日本」<br>「ポッキー&プリッツの日」<br>又稱 「百奇與百力滋日」<br>心動動的百奇遊戲<br>就是嘴對嘴吃 Pocky 的由來'
  }
];

// 檢查當天是否為節日
function isHoliday(date) {
  for (var i = 0; i < holidays.length; i++) {
    if (date.toDateString() === holidays[i].date.toDateString()) {
      return holidays[i];
    }
  }
  return null;
}

// 判斷當天是否為節日並彈出訊息
var holiday = isHoliday(currentDate);
if (holiday) {
  Swal.fire({
    title: holiday.message,
    padding: '1.2em',
    position: 'top-start',
    showConfirmButton: false,
    timer: 30000,
    timerProgressBar: true
  });
}
