import { Theme } from "../constants/enums";
import type { ThemeRepository } from "../repositories/theme";

export class ThemeService {
  public constructor(public themeRepository: ThemeRepository) {}

  public getSelected() {
    const selected = this.themeRepository.getSelected();

    if (selected === Theme.LIGHT || selected === Theme.DARK) {
      return selected;
    }

    return Theme.DEFAULT;
  }

  public setSelected(theme: Theme) {
    this.themeRepository.save(theme);
  }
}
