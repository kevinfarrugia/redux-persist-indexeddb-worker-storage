import { del, get, set } from "idb-keyval";

/**
 * Persist Redux state using IndexedDB
 */
class Storage {
  getItem(key) {
    return get(key);
  }

  setItem(key, value) {
    return set(key, value);
  }

  removeItem(key) {
    return del(key);
  }
}

export default Storage;
