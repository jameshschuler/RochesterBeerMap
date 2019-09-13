/**
 * CustomMarker class that extends google.maps.Marker class
 */
export default class CustomMarker extends google.maps.Marker {
  public breweryId: string;
  public breweryName: string;
  public locality: string;

  constructor(
    map: google.maps.Map,
    position: any,
    animation: google.maps.Animation,
    title: string,
    breweryId: string,
    breweryName: string,
    locality: string
  ) {
    super({ map, position, animation, title });
    this.breweryId = breweryId;
    this.breweryName = breweryName;
    this.locality = locality;
  }

  /**
   * Calls parent to set map for marker
   * @param map
   */
  public setMap(map: google.maps.Map | null) {
    super.setMap(map);
  }
}
