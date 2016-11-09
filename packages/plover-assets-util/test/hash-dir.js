'use strict';


const fs = require('fs');
const pathUtil = require('path');
const hashDir = require('..').hashDir;


describe('plover-assets-util/lib/hashDir', function() {
  const dir = pathUtil.join(__dirname, 'fixtures/app');

  it('test', function() {
    const hashA = hashDir(dir);
    const hashB = hashDir(dir);
    hashA.should.equal(hashB);

    const other = pathUtil.join(dir, 'other.txt');
    fs.writeFileSync(other, 'some test');
    const hashC = hashDir(dir);
    hashC.should.not.equal(hashA);

    fs.unlinkSync(other);
    const hashD = hashDir(dir);
    hashA.should.equal(hashD);
  });


  it('with salt', function() {
    const hashA = hashDir(dir);
    const hashB = hashDir(dir, { salt: 'abc' });
    const hashC = hashDir(dir, { salt: 'def' });
    const hashD = hashDir(dir, { salt: 'abc' });

    hashA.should.not.equal(hashB);
    hashB.should.not.equal(hashC);
    hashB.should.equal(hashD);
  });
});
