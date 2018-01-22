const oled = require('oled-js-pi');
const pngtolcd = require('png-to-lcd');

const opts = {
  width: 128,
  height: 64,
  address: 0x3D
};

const oled = new oled(opts);

oled.turnOnDisplay();

oled.drawPixel([
	[128, 1, 1],
	[128, 32, 1],
	[128, 16, 1],
	[64, 16, 1]
]);

setTimeout( () => {

  oled.clearDisplay();

  pngtolcd('image.png', true, (err, bitmap) => {
    oled.buffer = bitmap;
    oled.update();
  });

}, 20*1000)
