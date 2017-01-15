import p5 from 'p5';

export default function sketch (p) {
//   let rotation = 0;
//
//   p.setup = function () {
//     p.createCanvas(600, 400, p.WEBGL);
//   };
//
//   p.myCustomRedrawAccordingToNewPropsHandler = function (props) {
//     if (props.rotation){
//       rotation = props.rotation * Math.PI / 180;
//     }
//   };
//
//   p.draw = function () {
//     p.background(100);
//     p.noStroke();
//     p.push();
//     p.rotateY(rotation);
//     p.box(100);
//     p.pop();
//   };
    p.mic;
    p.setup = () => {
      p.mic = new p5.AudioIn()
      p.mic.start();
    }
    p.draw = () => {
      p.background(0);
      p.micLevel = p.mic.getLevel();
      p.ellipse(p.width/2, p.constrain(p.height - p.micLevel*p.height*5, 0, p.height), 10, 10);
    }
};
