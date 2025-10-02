window.onload = function () {
  const canvas = document.getElementById("myCanvas");
  const ctx = canvas.getContext("2d");

  // ===== ฟ้า =====
  function drawSky() {
    ctx.fillStyle = "#87CEEB";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }

  // ===== ภูเขา =====
  function drawMountains() {
    ctx.fillStyle = "#32CD32";
    ctx.beginPath();
    ctx.moveTo(0, 300);
    ctx.quadraticCurveTo(200, 150, 400, 300);
    ctx.quadraticCurveTo(600, 150, 800, 300);
    ctx.lineTo(800, 600);
    ctx.lineTo(0, 600);
    ctx.closePath();
    ctx.fill();
  }

  // ===== ดวงอาทิตย์ =====
  function drawSun() {
    ctx.beginPath();
    ctx.arc(600, 120, 50, 0, Math.PI * 2);
    ctx.fillStyle = "yellow";
    ctx.fill();
    ctx.strokeStyle = "red";
    ctx.lineWidth = 10;
    ctx.stroke();
  }

  // ===== พื้นและทุ่งนา =====
  function drawField() {
    // พื้นสีเขียว
    ctx.fillStyle = "#228B22";
    ctx.fillRect(0, 300, 800, 300);

    // ทุ่งนา
    ctx.fillStyle = "#FFD700";
    ctx.fillRect(650, 470, 120, 80);

    // เส้นตาราง 3x3
    ctx.strokeStyle = "#006400";
    ctx.lineWidth = 2;
    let rows = 3;
    let cols = 3;
    let cellWidth = 120 / cols;
    let cellHeight = 80 / rows;

    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        ctx.strokeRect(650 + c * cellWidth, 470 + r * cellHeight, cellWidth, cellHeight);

        // ===== ต้นข้าว =====
        let centerX = 650 + c * cellWidth + cellWidth / 2;
        let bottomY = 470 + r * cellHeight + cellHeight - 5;
        drawRice(centerX, bottomY);
      }
    }
  }

  // ===== วาดต้นข้าว =====
  function drawRice(x, y) {
    ctx.strokeStyle = "#228B22";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x, y - 20); // ก้านหลัก
    ctx.stroke();

    // ===== ใบข้าว =====
    ctx.beginPath();
    ctx.moveTo(x, y - 5);
    ctx.lineTo(x - 5, y - 15);
    ctx.moveTo(x, y - 5);
    ctx.lineTo(x + 5, y - 15);
    ctx.stroke();
  }

  // ===== ต้นไม้ =====
  function drawTrees() {
    // ลำต้น
    ctx.fillStyle = "#8B4513";
    ctx.fillRect(100, 380, 30, 80);
    ctx.fillRect(195, 380, 20, 50);

    // ===== ใบไม้ =====
    ctx.beginPath();
    ctx.arc(115, 360, 40, 0, Math.PI * 2);
    ctx.fillStyle = "#006400"; 
    ctx.arc(207, 355, 30, 0, Math.PI * 2);
    ctx.fill();
  }

  // ===== บ้าน =====
  function drawHouse() {
    ctx.fillStyle = "#b32a3eff"; // ตัวบ้าน
    ctx.fillRect(550, 370, 120, 80);

    ctx.beginPath();
    ctx.moveTo(540, 370);
    ctx.lineTo(610, 310);
    ctx.lineTo(680, 370);
    ctx.closePath();
    ctx.fillStyle = "#b90ed3ff"; // หลังคาบ้าน
    ctx.fill();

    ctx.fillStyle = "#000000"; // ประตูบ้าน
    ctx.fillRect(590, 400, 40, 50);
  }

  // ===== แม่น้ำ =====
  function drawRiver() {
    ctx.beginPath();
    ctx.moveTo(250, 600);
    ctx.bezierCurveTo(300, 500, 400, 450, 380, 350);
    ctx.bezierCurveTo(360, 320, 420, 310, 450, 300);
    ctx.lineTo(500, 600);
    ctx.closePath();
    ctx.fillStyle = "#1E90FF";
    ctx.fill();
  }

  // ===== เมฆ =====
  let cloudX = -100;
  function drawCloud(x, y) {
    ctx.fillStyle = "white";
    ctx.beginPath();
    ctx.arc(x, y, 20, 0, Math.PI * 2);
    ctx.arc(x + 25, y - 10, 25, 0, Math.PI * 2);
    ctx.arc(x + 55, y, 20, 0, Math.PI * 2);
    ctx.fill();
  }

  function animate() {
    drawSky();
    drawMountains();
    drawSun();
    drawField();
    drawTrees();
    drawHouse();
    drawRiver();

    drawCloud(cloudX, 100);
    drawCloud(cloudX + 200, 150);

    cloudX += 1; // ความเร็วเมฆ
    if (cloudX > canvas.width + 100) cloudX = -150;

    requestAnimationFrame(animate);
  }

  animate();
};
