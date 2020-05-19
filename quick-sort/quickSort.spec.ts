import { assertEquals } from 'https://deno.land/std/testing/asserts.ts';
import quickSort from './quickSort.ts';

Deno.test('It sorts array', () => {
    const input = [3,3,5,9,1,0,3,5,8,6,9];
    const expected = [0,1,3,3,3,5,5,6,8,9,9];
    const actual = quickSort(input);
    assertEquals(actual, expected);
});