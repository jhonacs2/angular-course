/* eslint-disable class-methods-use-this */
/**
 * Export this module as default
 */
export default class Storage {
    /**
     * Get data from localstorage
     * @param key
     */
    getItem(key: string): string {
        return localStorage.getItem(key);
    }

    /**
     * Set data to localstorage
     * @param key
     * @param value
     */
    setItem(key: string, value: string): void {
        localStorage.setItem(key, value);
    }
}
