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

it("given a floating number should ignore decimals", () => {
  const logSpy = jest.spyOn(console, "log");

  const coordinate = new Coordinate(1.8, 2.2);
  coordinate.getXY();
  expect(logSpy).toHaveBeenCalledWith("(1, 2)");

  coordinate.move(["S", 9.99]);
  coordinate.getXY();
  expect(logSpy).toHaveBeenCalledWith("(1, -7)");
});
