class Game {
   constructor(canvas, editMode = false) {
      this.currentLevel = 0;
      this.levels = levels;
      this.corridorColor = "#313338";
      this.targetColor = "#F00"; // Cambia el color objetivo a azul
      this.ctx = canvas.getContext("2d");
      this.ctx.strokeStyle = this.corridorColor;

      this.started = false;
      this.gameOver = false;
      this.img = new Image();
      this.img.src = "../img/screamer.jpg";  // Asegúrate de que el archivo tiene la extensión correcta

      // Solo se puede usar la imagen una vez que ha cargado
      this.img.onload = () => {
         console.log("Imagen cargada correctamente.");
      };
      this.img.onerror = () => {
         console.error("Error al cargar la imagen.");
      };

      if (editMode) {
         this.editor = new Editor(canvas, this.drawPaths.bind(this), this.corridorColor, this.targetColor);
      } else {
         this.drawPaths(this.levels[this.currentLevel]);
      }
      
      this.addEventListeners(canvas);
   }

   addEventListeners(canvas) {
      canvas.addEventListener("contextmenu", (e) => {
         e.preventDefault();
      });

      canvas.addEventListener("mousedown", (e) => {
         if (this.started) {
            return;
         }
         const imgData = this.ctx.getImageData(e.offsetX, e.offsetY, 1, 1);
         const g = imgData.data[1];
         const a = imgData.data[3];
         if (a == 0) {
         } else {
            if (g == 0) {
               this.started = true;
               this.increaseLevel();
            }
         }
      });
      canvas.addEventListener("mousemove", (e) => {
         if (!this.started || this.gameOver) {
            return;
         }
         const imgData = this.ctx.getImageData(e.offsetX, e.offsetY, 1, 1);
         const g = imgData.data[1];
         const a = imgData.data[3];
         if (a == 0) {
            this.doGameOver();
         } else {
            if (g == 0) {
               this.increaseLevel();
            } else {
            }
         }
      });
   }

   doGameOver() {
      this.gameOver = true;
      if (this.img.complete) {  // Verificar si la imagen ya está completamente cargada
         this.ctx.drawImage(this.img, 0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
      } else {
         console.error("La imagen aún no está cargada.");
      }
      this.started = false;
   }

   increaseLevel() {
      if (this.currentLevel == this.levels.length - 1) {
         this.gameOver = true;
         this.ctx.font = "30px Arial";
         this.ctx.fillStyle = "white";
         this.ctx.strokeStyle = "black";
         this.ctx.textAlign = "center";
         this.ctx.textBaseline = "middle";
         this.ctx.lineWidth = 1;
         this.ctx.fillText("You won!", this.ctx.canvas.width / 2, this.ctx.canvas.height / 2);
         this.ctx.strokeText("You won!", this.ctx.canvas.width / 2, this.ctx.canvas.height / 2);
         this.started = false;
         return;
      }
      this.currentLevel++;
      this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
      this.drawPaths(this.levels[this.currentLevel]);
   }

   drawPaths(paths) {
      for (const path of paths) {
         this.ctx.beginPath();
         this.ctx.lineWidth = path.width;
         this.ctx.moveTo(path.start.x, path.start.y);
         this.ctx.lineTo(path.end.x, path.end.y);
         if (path.type == "target") {
            this.ctx.strokeStyle = this.targetColor; // Usa el color definido
         } else {
            this.ctx.strokeStyle = this.corridorColor;
         }
         this.ctx.stroke();
         if (path.text) {
            this.ctx.font = "30px Arial";
            this.ctx.fillStyle = "black";
            this.ctx.textAlign = "center";
            this.ctx.textBaseline = "middle";
            const avg = {
               x: (path.start.x + path.end.x) / 2,
               y: (path.start.y + path.end.y) / 2
            };
            this.ctx.fillText(path.text, avg.x, avg.y);
         }
      }
   }
}
