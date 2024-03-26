export interface Mappable {
  location: {
    lat: number;
    lng: number;
  };
  markerContent(): string;
}

export class CustomMap {
  private googleMap: google.maps.Map;

  constructor(divId: string) {
    this.googleMap = new google.maps.Map(
      document.getElementById(divId) as HTMLElement,
      {
        zoom: 0,
        center: {
          lat: 0,
          lng: 0,
        },
      }
    );
  }

  addMarker(user: Mappable): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: user.location,
      title: "",
    });

    marker.addListener("click", () => {
      const infowindow = new google.maps.InfoWindow({
        content: user.markerContent(),
      });
      infowindow.open(this.googleMap, marker);
    });
  }
}
