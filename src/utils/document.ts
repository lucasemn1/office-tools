export class DocumentUtils {
  public static validateCpf(cpf: string) {
    const firstSum = [10, 9, 8, 7, 6, 5, 4, 3, 2]
      .map((value, i) => value * Number(cpf[i]))
      .reduce((prevValue = 0, currentValue) => prevValue + currentValue);

    const firstValidation = firstSum % 11 < 2 ? 0 : 11 - (firstSum % 11);

    if (firstValidation !== Number(cpf[9])) {
      return false;
    }

    const secondSum = [11, 10, 9, 8, 7, 6, 5, 4, 3, 2]
      .map((value, i) => value * Number(cpf[i]))
      .reduce((prevValue = 0, currentValue) => prevValue + currentValue);

    const secondVerification = secondSum % 11 < 2 ? 0 : 11 - (secondSum % 11);

    if (secondVerification !== Number(cpf[10])) {
      return false;
    }

    return true;
  }

  public static validateCnpj(cnpj: string) {
    const firstSum = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2]
      .map((value, i) => value * Number(cnpj[i]))
      .reduce((prevValue = 0, currentValue) => prevValue + currentValue);

    const firstValidation = firstSum % 11 < 2 ? 0 : 11 - (firstSum % 11);

    if (firstValidation !== Number(cnpj[12])) {
      return false;
    }

    const secondSum = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2]
      .map((value, i) => value * Number(cnpj[i]))
      .reduce((prevValue = 0, currentValue) => prevValue + currentValue);

    const secondVerification = secondSum % 11 < 2 ? 0 : 11 - (secondSum % 11);

    if (secondVerification !== Number(cnpj[13])) {
      return false;
    }

    return true;
  }

  public static parseToCpf(onlyNumbers: string) {
    return onlyNumbers.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})$/, "$1.$2.$3-$4");
  }

  public static parseToCnpj(onlyNumbers: string) {
    return onlyNumbers.replace(
      /^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/,
      "$1.$2.$3/$4-$5"
    );
  }
}
