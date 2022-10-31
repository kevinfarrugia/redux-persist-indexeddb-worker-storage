import "fake-indexeddb/auto";
import { IDBFactory } from "fake-indexeddb";
import Storage from "../index";

describe("Storage", () => {
  beforeEach(() => {
    indexedDB = new IDBFactory();
  });

  it("should be instantiable", () => {
    const storage = new Storage();
    expect(storage).toBeInstanceOf(Storage);
  });

  it("should have getItem method", () => {
    const storage = new Storage();
    expect(storage.getItem).toBeInstanceOf(Function);
  });

  it("should have setItem method", () => {
    const storage = new Storage();
    expect(storage.setItem).toBeInstanceOf(Function);
  });

  it("should have removeItem method", () => {
    const storage = new Storage();
    expect(storage.removeItem).toBeInstanceOf(Function);
  });

  it("should get item", async () => {
    const storage = new Storage();
    const key = "test";
    const value = "test";
    await storage.setItem(key, value);
    const result = await storage.getItem(key);
    expect(result).toEqual(value);
  });

  it("should set item", async () => {
    const storage = new Storage();
    const key = "test";
    const value = "test";
    const result = await storage.setItem(key, value);
    expect(result).toEqual(value);
  });

  it("should remove item", async () => {
    const storage = new Storage();
    const key = "test";
    const value = "test";
    await storage.setItem(key, value);
    const result = await storage.removeItem(key);
    expect(result).toEqual(undefined);
  });
});
