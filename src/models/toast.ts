import { IdUtils } from "../utils/id";

export class ToastModel {
  public readonly id = IdUtils.generate();

  public constructor(
    public content: string,
    public type: "success" | "secondary" | "danger"
  ) {}
}
