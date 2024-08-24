// iso8601形式の文字列をh:m:s形式に変換する関数
export const iso8601ToHms = (iso8601: string): string | null => {
  // 正規表現でhours, minutes, secondsを抽出
  const match = iso8601.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/);
  if (!match) {
    console.error("Invalid input format");
    return null;
  }

  const hours = parseInt(match[1] || "0", 10);
  const minutes = parseInt(match[2] || "0", 10);
  const seconds = parseInt(match[3] || "0", 10);

  // 合計秒数を計算
  const totalSeconds = hours * 3600 + minutes * 60 + seconds;

  // h:m:s形式に変換
  const h = Math.floor(totalSeconds / 3600);
  const m = Math.floor((totalSeconds % 3600) / 60);
  const s = totalSeconds % 60;

  // ゼロパディングを適用して文字列を作成
  return `${h.toString().padStart(2, "0")}:${m.toString().padStart(2, "0")}:${s
    .toString()
    .padStart(2, "0")}`;
};

export default iso8601ToHms;
