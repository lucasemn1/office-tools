export class NumberUtils {
  public static getOnlyNumbers(raw: string, size?: number) {
    const onlyNumbers = raw.replace(/\D/g, "");

    if (size) {
      return raw.replace(/\D/g, "").slice(0, size);
    }

    return onlyNumbers;
  }
}
