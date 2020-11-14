//カレンダーのロジックを生成するjsファイル
import dayjs from "dayjs";

export const getNextMonth = month => {
  const day = getMonth(month).add(1,"month");
  return formatMonth(day);
};

export const getPreviousMonth = month => {
  const day = getMonth(month).add(-1,"month");
  return formatMonth(day);
};

export const formatMonth = day => ({
  month :day.month() + 1,
  year:day.year(),
});



//カレンダー(7×5行の表)を生成するロジックをここに分離して作成
export const createCalendar = month => {
  //今月の最初の日を追加
  // const firstDay = dayjs().startOf("month");
  const firstDay = getMonth(month);
  const firstDayIndex = firstDay.day();

  return Array(35)
  .fill(0)
  .map((_, i) => {
    const diffFormFirstDay = i - firstDayIndex;
    const day = firstDay.add(diffFormFirstDay,"day");
    return day;
  });
};

//その月のdayjsインスタンスを返す関数を定義してそれを使う様にする
export const getMonth = ({ year,month }) => {
  return dayjs(`${year}-${month}`);
};

//CalendarElement内の日付ロジックを分離して生成（リファクタリング）
export const isSameDay = (d1,d2) => {
  const format = "YYYYMMDD";
  return d1.format(format) === d2.format(format)
};
export const isSameMonth = (m1,m2) => {
  const format = "YYYYMM";
  return m1.format(format) === m2.format(format)
};
export const isFirstDay = day => day.date() === 1;//trueかfalseを返す


