import p5 from 'p5'

const sketch = (p: p5) => {
  p.setup = () => {
    console.log("🚀 - Setup initialized - P5 is running");
    p.createCanvas(window.innerWidth, window.innerHeight);
  }

  p.draw = () => {
    p.background(32)

    p.fill(255, 0, 0)
    p.noStroke()
    p.ellipse(80, 20, 15, 15)
  }
}

export const app = new p5(sketch)

app.mousePressed = () => { }
app.mouseDragged = () => { }
app.mouseReleased = () => { }