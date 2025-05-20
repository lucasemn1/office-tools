export class PhoneUtils {
  public static parse(onlyNumbers: string) {
    const startsWithZero = onlyNumbers.startsWith("0");
    const localOnlyNumbers = onlyNumbers.padEnd(startsWithZero ? 12 : 11, " ");
    const dddEndIndex = startsWithZero ? 2 : 1;

    return `(${onlyNumbers.slice(0, dddEndIndex + 1)}) ${
      localOnlyNumbers[dddEndIndex + 1]
    } ${localOnlyNumbers.slice(
      dddEndIndex + 2,
      dddEndIndex + 6
    )}-${localOnlyNumbers.slice(dddEndIndex + 6, dddEndIndex + 10)}`;
  }
}
