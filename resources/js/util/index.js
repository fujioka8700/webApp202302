export const OK = 200;

/**
 * クッキーの値を取得します。
 * @param {String} searchKey 検索するキーです。
 * @returns {String} キーに対応する値です。
 */
export function getCookieValue(searchKey) {
  if (typeof searchKey === "undefined") {
    return "";
  }

  let val = "";

  document.cookie.split(";").forEach((cookie) => {
    const [key, value] = cookie.split("=");
    if (key === searchKey) {
      return (val = value);
    }
  });

  return val;
}
