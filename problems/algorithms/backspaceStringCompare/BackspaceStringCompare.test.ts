import { backspaceCompare, removeBackspace } from "./BackspaceStringCompare"; // Import the module where functions are defined

describe("backspaceCompare", () => {
  it("should return true for equal strings with no backspaces", () => {
    expect(backspaceCompare("abc", "abc")).toBe(true);
  });

  it("should return true for equal strings with backspaces", () => {
    expect(backspaceCompare("ab#c", "ad#c")).toBe(true);
  });

  it("should return true for equal strings with multiple backspaces", () => {
    expect(backspaceCompare("ab##c", "ad##c")).toBe(true);
  });

  it("should return true for equal strings with backspaces at the beginning", () => {
    expect(backspaceCompare("#abc", "#abc")).toBe(true);
  });

  it("should return false for different strings", () => {
    expect(backspaceCompare("abc", "def")).toBe(false);
  });

  it("should return false for different strings with backspaces", () => {
    expect(backspaceCompare("ab#c", "de#c")).toBe(false);
  });

  it("should return false for different lengths of strings with backspaces", () => {
    expect(backspaceCompare("ab#c", "a#c")).toBe(false);
  });

  it("should handle empty strings", () => {
    expect(backspaceCompare("", "")).toBe(true);
  });

  it("should handle strings with only backspaces", () => {
    expect(backspaceCompare("###", "##")).toBe(true);
  });

  it("should handle large strings", () => {
    expect(backspaceCompare("a".repeat(1000), "a".repeat(1000))).toBe(true);
  });

  it("should handle very large strings", () => {
    expect(backspaceCompare("a".repeat(100000), "a".repeat(100000))).toBe(true);
  });
});

describe("removeBackspace", () => {
  it("should remove backspaces from a string", () => {
    expect(removeBackspace("abc#d#")).toBe("cd");
  });

  it("should handle no backspaces", () => {
    expect(removeBackspace("abcdef")).toBe("abcdef");
  });

  it("should handle backspaces at the beginning", () => {
    expect(removeBackspace("#abc")).toBe("abc");
  });

  it("should handle consecutive backspaces", () => {
    expect(removeBackspace("a##bc#d##")).toBe("d");
  });

  it("should handle large strings", () => {
    expect(
      removeBackspace("a".repeat(1000) + "#".repeat(500) + "b".repeat(1000)),
    ).toBe("b".repeat(1000));
  });

  it("should handle very large strings", () => {
    expect(
      removeBackspace(
        "a".repeat(100000) + "#".repeat(50000) + "b".repeat(100000),
      ),
    ).toBe("b".repeat(100000));
  });
});
