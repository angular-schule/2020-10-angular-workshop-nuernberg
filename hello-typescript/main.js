"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var test_1 = require("./test");
var x = 2;
var callback = function () { return x == 2 ? 'hallo' : 'ggg'; };
var test = new test_1.Test(43, callback);
test.id = 99;
//# sourceMappingURL=main.js.map