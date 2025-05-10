export class PhoneUtils {
  public static getOnlyNumbers(raw: string) {
    return raw.replace(/\D/g, "").slice(0, 11);
  }

  public static parse(onlyNumbers: string) {
    const result = [
      "(",
      " ",
      " ",
      ")",
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
      "-",
      " ",
      " ",
      " ",
      " ",
    ];

    result.forEach((_, i) => {
      if (i === 0 || i === 3 || i === 4 || i === 6 || i === 11) {
        return;
      } else if (i > 11 && onlyNumbers[i - 5]) {
        result[i] = onlyNumbers[i - 5];
      } else if (i > 6 && onlyNumbers[i - 4]) {
        result[i] = onlyNumbers[i - 4];
      } else if (i > 4 && onlyNumbers[i - 3]) {
        result[i] = onlyNumbers[i - 3];
      } else if (i > 3 && onlyNumbers[i - 2]) {
        result[i] = onlyNumbers[i - 2];
      } else if (i > 0 && onlyNumbers[i - 1]) {
        result[i] = onlyNumbers[i - 1];
      }
    });

    return result.join("");
  }
}
