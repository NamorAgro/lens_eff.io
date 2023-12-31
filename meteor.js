
let height = window.innerHeight
let width = window.innerWidth

var ctx
var meteorArr = [
  { x: width / 1, y: -height / 2, length: height / 10, r: 1, vx: 5, vy: 35, color: '#80FF00' },
]

window.onload = () => {
  

  let canvas = document.querySelector('#canvas')
  let context = canvas.getContext('2d')
  ctx = context
  canvas.height = height
  canvas.width = width

  draw()
}

function draw() {
  ctx.clearRect(0, 0, width, height) // 清空上一幕

  ctx.save(); // 保存状态

  ctx.rotate(-80 * Math.PI / 280) // 旋转画布

  meteorArr.map((item, index) => {

    // 绘画
    ctx.beginPath(); //开始路径
    ctx.arc(item.x, item.y, item.r, 0, Math.PI, false);
    ctx.lineTo(item.x, item.y - item.length);
    ctx.closePath()
    ctx.fillStyle = item.color;
    ctx.fill();

    // 渲染完一颗星星，然后处理数据，计算下一帧的位置
    // 如果超出边界，删除这课星星
    if (meteorArr[index].x > width + 100 || meteorArr[index].y > height + meteorArr[index].length * 2) {
      meteorArr.splice(index, 1)
    } else {
      meteorArr[index].x += item.vx
      meteorArr[index].y += item.vy
    }

  })

  // 控制流星数量
  if (meteorArr.length > 10) {

  } else {
    let random = Math.random()
    if (random > 0.1) {
      meteorArr.push(createStart())
    } else {

    }
  }

  ctx.restore(); // 恢复状态

  window.requestAnimationFrame(draw)
} 

const randomColor = Math.floor(Math.random()*16777215).toString(16);
  document.body.style.backgroundColor = "#" + randomColor;
  color.innerHTML = "#" + randomColor;


  function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgba(${r}, ${g}, ${b}, 0.47)`;
  }
// 创建星星
function createStart() {
  let random = Math.random()
  let random2 = Math.random()
  let vx = random * 1 + 1
  let obj = {
    x: random * width - height / 4,
    y: random * -300,
    length: random2 * 10 + 200,
    r: random2 * 1,
    vx: vx,
    vy: vx * 5,
    color: getRandomColor()
  }
  return obj
}