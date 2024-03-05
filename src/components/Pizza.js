import React, { useRef, useEffect } from 'react';

const Pizza = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    let toRadians = (deg) => deg * Math.PI / 180;
    let map = (val, a1, a2, b1, b2) => b1 + (val - a1) * (b2 - b1) / (a2 - a1);
    
    let sliceCount = 6;
    let sliceSize = 50;
    let width = canvas.width = sliceSize * 2 + 50;
    let height = canvas.height = sliceSize * 2 + 50;
    let center = height / 2 | 0;
    let sliceDegree = 360 / sliceCount;
    let sliceRadians = toRadians(sliceDegree);
    let progress = 0;
    let cooldown = 10;

    const update = () => {
      ctx.clearRect(0, 0, width, height);

      if (--cooldown < 0) progress += sliceRadians*0.01 + progress * 0.07;

      ctx.save();
      ctx.translate(center, center);

      for (let i = sliceCount - 1; i > 0; i--) {
        let rad;
        if (i === sliceCount - 1) {
          let ii = sliceCount - 1;
          rad = sliceRadians * i + progress;
          ctx.strokeStyle = '#FBC02D';
          cheese(ctx, rad, .9, ii, sliceSize, sliceDegree);
          cheese(ctx, rad, .6, ii, sliceSize, sliceDegree);
          cheese(ctx, rad, .5, ii, sliceSize, sliceDegree);
          cheese(ctx, rad, .3, ii, sliceSize, sliceDegree);
        } else rad = sliceRadians * i;
        
        // border
        ctx.beginPath();
        ctx.lineCap = 'butt';
        ctx.lineWidth = 11;
        ctx.arc(0, 0, sliceSize, rad, rad + sliceRadians);
        ctx.strokeStyle = '#F57F17';
        ctx.stroke();

        // slice
        let startX = sliceSize * Math.cos(rad);
        let startY = sliceSize * Math.sin(rad);
        let endX = sliceSize * Math.cos(rad + sliceRadians);
        let endY = sliceSize * Math.sin(rad + sliceRadians);
        let varriation = [0.9,0.7,1.1,1.2];
        ctx.fillStyle = '#FBC02D';
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(startX, startY);
        ctx.arc(0, 0, sliceSize, rad, rad + sliceRadians);
        ctx.lineTo(0, 0);
        ctx.closePath();
        ctx.fill();
        ctx.lineWidth = .3;
        ctx.stroke();

        // meat
        let x = sliceSize * .65 * Math.cos(rad + sliceRadians / 2);
        let y = sliceSize * .65 * Math.sin(rad + sliceRadians / 2);
        ctx.beginPath();
        ctx.arc(x, y, sliceDegree / 6, 0, 2 * Math.PI);
        ctx.fillStyle = '#D84315';
        ctx.fill();
      }

      ctx.restore();

      if (progress > sliceRadians) {
        ctx.translate(center, center);
        ctx.rotate(-sliceDegree * Math.PI / 180);
        ctx.translate(-center, -center);
        progress = 0;
        cooldown = 20;
      }
    };

    const cheese = (ctx, rad, multi, ii, sliceSize, sliceDegree) => {
      let x1 = sliceSize * multi * Math.cos(toRadians(ii * sliceDegree) - .2);
      let y1 = sliceSize * multi * Math.sin(toRadians(ii * sliceDegree) - .2);
      let x2 = sliceSize * multi * Math.cos(rad + .2);
      let y2 = sliceSize * multi * Math.sin(rad + .2);

      let csx = sliceSize * Math.cos(rad);
      let csy = sliceSize * Math.sin(rad);

      var d = Math.sqrt((x1 - csx) * (x1 - csx) + (y1 - csy) * (y1 - csy));
      ctx.beginPath();
      ctx.lineCap = 'round';

      let percentage = map(d, 15, 70, 1.2, 0.2);

      let tx = x1 + (x2 - x1) * percentage;
      let ty = y1 + (y2 - y1) * percentage;
      ctx.moveTo(x1, y1);
      ctx.lineTo(tx, ty);

      tx = x2 + (x1 - x2) * percentage;
      ty = y2 + (y1 - y2) * percentage;
      ctx.moveTo(x2, y2);
      ctx.lineTo(tx, ty);

      ctx.lineWidth = map(d, 0, 100, 20, 2);
      ctx.stroke();
    };

    const animation = () => {
      requestAnimationFrame(animation);
      update();
    };

    animation();

    return () => cancelAnimationFrame(animation);
  }, []);

  return <canvas ref={canvasRef} />;
};

export default Pizza;
