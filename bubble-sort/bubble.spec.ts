import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import bubbleSort from './bubble.ts';

Deno.test('sorts array', () => {
    const input = [4,3,2,5,8];
    const expected = [2,3,4,5,8];
    const actual = bubbleSort(input);
    assertEquals(actual, expected);
});

Deno.test('sorts array 2', () => {
    const input = [100,10,15,23,2,9,28,1,36,1];
    const expected = [1,1,2,9,10,15,23,28,36,100];
    const actual = bubbleSort(input);
    assertEquals(actual, expected);
});