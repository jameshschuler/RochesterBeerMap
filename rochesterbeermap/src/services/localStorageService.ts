/**
 * Helper class to save and load data from local storage.
 */
export default class LocalStorageService {
  private constructor() {}

  /**
   * Loads data from local storage given a key
   * @param key
   */
  public static loadData(key: string): any {
    let data = localStorage.getItem(key);
    if (!data) {
      return;
    }

    return JSON.parse(data);
  }

  /**
   * Saves data to local storage given a key and data
   * @param key
   * @param data
   */
  public static saveData(key: string, data: any): void {
    localStorage.setItem(key, JSON.stringify(data));
  }
}
