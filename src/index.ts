type Direction = "N" | "S" | "L" | "O";

export class Coordinate {
  constructor(private x: number, private y: number) {
    if (isNaN(x) || isNaN(y)) {
      console.log(
        "coordenada invalida utilizando (0, 0) como coordenada inicial"
      );
      this.x = 0;
      this.y = 0;
      return;
    }
  }

  move(vector: [Direction, number]) {
    if (isNaN(vector[1])) {
      console.log("intensidade invalida");
      return;
    }

    switch (vector[0].toUpperCase()) {
      case "N":
        this.y += vector[1];
        break;

      case "S":
        this.y -= vector[1];
        break;

      case "L":
        this.x += vector[1];
        break;

      case "O":
        this.x -= vector[1];
        break;

      default:
        console.log("direção invalida");
        break;
    }
  }

  getXY() {
    console.log(`(${this.x}, ${this.y})`);
  }
}
