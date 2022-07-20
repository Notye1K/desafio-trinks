import { Coordinate } from "../src";
import { jest } from "@jest/globals";

it("case 1", () => {
  const logSpy = jest.spyOn(console, "log");

  const coordinate = new Coordinate(8, 12);
  coordinate.getXY();
  expect(logSpy).toHaveBeenCalledWith("(8, 12)");

  coordinate.move(["N", 23]);
  coordinate.getXY();
  expect(logSpy).toHaveBeenCalledWith("(8, 35)");

  coordinate.move(["O", 7]);
  coordinate.getXY();
  expect(logSpy).toHaveBeenCalledWith("(1, 35)");

  coordinate.move(["S", 40]);
  coordinate.getXY();
  expect(logSpy).toHaveBeenCalledWith("(1, -5)");

  coordinate.move(["L", 33]);
  coordinate.getXY();
  expect(logSpy).toHaveBeenCalledWith("(34, -5)");

  coordinate.move(["N", 15]);
  coordinate.getXY();
  expect(logSpy).toHaveBeenCalledWith("(34, 10)");
});

it("case 2", () => {
  const logSpy = jest.spyOn(console, "log");

  const coordinate = new Coordinate(-10, 0);
  coordinate.getXY();
  expect(logSpy).toHaveBeenCalledWith("(-10, 0)");

  coordinate.move(["L", 14]);
  coordinate.getXY();
  expect(logSpy).toHaveBeenCalledWith("(4, 0)");

  coordinate.move(["N", 27]);
  coordinate.getXY();
  expect(logSpy).toHaveBeenCalledWith("(4, 27)");

  coordinate.move(["O", 33]);
  coordinate.getXY();
  expect(logSpy).toHaveBeenCalledWith("(-29, 27)");

  coordinate.move(["S", 20]);
  coordinate.getXY();
  expect(logSpy).toHaveBeenCalledWith("(-29, 7)");

  coordinate.move(["L", 15]);
  coordinate.getXY();
  expect(logSpy).toHaveBeenCalledWith("(-14, 7)");
});

describe("testing exceptions", () => {
  it("initial coordinate errors", () => {
    const initialCoordinateError =
      "coordenada invalida utilizando (0, 0) como coordenada inicial";
    const logSpy = jest.spyOn(console, "log");

    // @ts-ignore
    let coordinate = new Coordinate("a", 3);
    expect(logSpy).toHaveBeenCalledWith(initialCoordinateError);
    coordinate.getXY();
    expect(logSpy).toHaveBeenCalledWith("(0, 0)");

    // @ts-ignore
    coordinate = new Coordinate(5, "r");
    expect(logSpy).toHaveBeenCalledWith(initialCoordinateError);
    coordinate.getXY();
    expect(logSpy).toHaveBeenCalledWith("(0, 0)");

    // @ts-ignore
    coordinate = new Coordinate("j", "r");
    expect(logSpy).toHaveBeenCalledWith(initialCoordinateError);
    coordinate.getXY();
    expect(logSpy).toHaveBeenCalledWith("(0, 0)");
  });

  it("move errors", () => {
    const logSpy = jest.spyOn(console, "log");
    const invalidDirectionError = "direção invalida";
    const invalidIntensityError = "intensidade invalida";
    const coordinate = new Coordinate(5, 9);

    // @ts-ignore
    coordinate.move(["p", 8]);
    expect(logSpy).toHaveBeenCalledWith(invalidDirectionError);
    coordinate.getXY();
    expect(logSpy).toHaveBeenCalledWith("(5, 9)");

    // @ts-ignore
    coordinate.move(["S", "o"]);
    expect(logSpy).toHaveBeenCalledWith(invalidIntensityError);
    coordinate.getXY();
    expect(logSpy).toHaveBeenCalledWith("(5, 9)");
  });

  it("wrong type exception", () => {
    const logSpy = jest.spyOn(console, "log");
    // @ts-ignore
    const coordinate = new Coordinate("5", "-9");

    coordinate.getXY();
    expect(logSpy).toHaveBeenCalledWith("(5, -9)");

    // @ts-ignore
    coordinate.move(["s", "9"]);
    coordinate.getXY();
    expect(logSpy).toHaveBeenCalledWith("(5, -18)");
  });
});
