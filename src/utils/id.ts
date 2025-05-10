import { v4 } from "uuid";

export class IdUtils {
  public static generate() {
    return v4();
  }
}
