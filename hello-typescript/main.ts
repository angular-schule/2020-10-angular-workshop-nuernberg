import { Test } from "./test";


const x = 2;
const callback = () => x == 2 ? 'hallo' : 'ggg';
const test = new Test(43, callback);

test.id = 99;

