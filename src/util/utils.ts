import { Coordinates } from "../coordinates/coordinates.model";


export class Utils {
  /**
   * Generates random integer between 0 and @param max
   * @param max
   */
  public static getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  /**
   * Delays run by @param ms with promise
   * @param ms
   * add await before it in a async function
   */
  public static delay(ms: number) {
    return new Promise(res => setTimeout(res, ms));
  }

  /**
   * Calculates distance between two Coordinate
   * @param Coordinates1
   * @param Coordinates2
   */
  public static calcDistanceBetweenCoordinates(Coordinates1: Coordinates, Coordinates2: Coordinates): number {
    return Math.sqrt(Math.pow(Coordinates1.x - Coordinates2.x, 2) + Math.pow(Coordinates1.y - Coordinates2.y, 2));
  }

  /**
   * generates random coordinate
   * @param FIELD_WIDTH
   */
  public static getRandomCoordinates(FIELD_WIDTH: number) {
    return new Coordinates(Utils.getRandomInt(FIELD_WIDTH), Utils.getRandomInt(FIELD_WIDTH));
  }


}

