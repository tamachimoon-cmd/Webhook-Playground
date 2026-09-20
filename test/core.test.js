import test from 'node:test';import assert from 'node:assert/strict';import {parseBody,signHmac,safeTarget,toCurl,eventSummary} from '../src/core.js';
test('parses JSON',()=>assert.deepEqual(parseBody(Buffer.from('{"ok":true}'),'application/json').value,{ok:true}));
test('falls back invalid JSON',()=>assert.equal(parseBody(Buffer.from('{'),'application/json').kind,'text'));
test('HMAC is deterministic',()=>assert.equal(signHmac('key','hello'),'9307b3b915efb5171ff14d8cb55fbcc798c6c0ef1456d66ded1a6aa723a58b7b'));
test('blocks localhost replay',()=>assert.throws(()=>safeTarget('http://127.0.0.1/x')));
test('allows public HTTPS',()=>assert.equal(safeTarget('https://example.com/x').hostname,'example.com'));
test('curl contains method',()=>assert.match(toCurl({method:'POST',path:'/hook/x',headers:{},bodyText:'{}'}),/-X POST/));
test('summary reports bytes',()=>assert.equal(eventSummary({id:'1',method:'POST',path:'/x',createdAt:'x',headers:{},bodyText:'abc'}).size,3));
