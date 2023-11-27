// Source : https://leetcode.com/problems/add-binary/
// Author : Francisco Tomas
// Date   : 2023-11-27

/*****************************************************************************************************
 *
 * Given two binary strings a and b, return their sum as a binary string.
 *
 * Example 1:
 * Input: a = "11", b = "1"
 * Output: "100"
 * Example 2:
 * Input: a = "1010", b = "1011"
 * Output: "10101"
 *
 * Constraints:
 *
 * 	1 <= a.length, b.length <= 10^4
 * 	a and b consist only of '0' or '1' characters.
 * 	Each string does not contain leading zeros except for the zero itself.
 ******************************************************************************************************/

export function addBinaryV1(a: string, b: string): string {
  let pointer: number = -1;
  let ans: string = "";
  let carry: number = 0;

  function sum(charA: number, charB: number, car: number): void {
    const sum: number = charA + charB + car;
    if (sum < 2) {
      ans = sum.toString() + ans;
      carry = 0;
    } else if (sum === 2) {
      ans = "0" + ans;
      carry = 1;
    } else {
      ans = "1" + ans;
      carry = 1;
    }
  }

  while (true) {
    const charA: number | undefined =
      a.length + pointer >= 0
        ? Number(a.charAt(a.length + pointer))
        : undefined;
    const charB: number | undefined =
      b.length + pointer >= 0
        ? Number(b.charAt(b.length + pointer))
        : undefined;

    if (charA !== undefined && charB !== undefined) {
      sum(charA, charB, carry);
    } else if (charA === undefined && charB !== undefined) {
      sum(0, charB, carry);
    } else if (charA !== undefined && charB === undefined) {
      sum(charA, 0, carry);
    } else {
      if (carry === 1) {
        ans = "1" + ans;
      }
      break;
    }

    pointer--;
  }

  return ans;
}

export function addBinaryV2(a: string, b: string): string {
  const maxLength: number = Math.max(a.length, b.length);
  const ans: number[] = [];
  let carry: number = 0;

  for (let i: number = 0; i < maxLength || carry > 0; i++) {
    const charA: number = i < a.length ? Number(a[a.length - 1 - i]) : 0;
    const charB: number = i < b.length ? Number(b[b.length - 1 - i]) : 0;
    const sum: number = charA + charB + carry;

    ans.unshift(sum & 1);
    carry = sum >> 1;
  }

  return ans.join("");
}

export function addBinary(a: string, b: string): string {
  let result: string = "";
  let carry: number = 0;
  let i: number = a.length - 1;
  let j: number = b.length - 1;

  while (i >= 0 || j >= 0 || carry !== 0) {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const bitA: number = i >= 0 ? +a[i--]! : 0;
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const bitB: number = j >= 0 ? +b[j--]! : 0;
    const sum: number = bitA ^ bitB ^ carry;
    carry = (bitA & bitB) | (bitB & carry) | (bitA & carry);
    result = sum + result;
  }

  return result;
}
