export class ThemeRepository {
  private storageKey = "@theme";

  public save(theme: string) {
    localStorage.setItem(this.storageKey, theme);
  }

  public getSelected() {
    return localStorage.getItem(this.storageKey) ?? undefined;
  }
}
