import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { environment } from '@environments/environment';
import * as mapboxgl from  'mapbox-gl';
@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss']
})
export class MapsComponent implements OnInit {

  mapa: mapboxgl.Map;
  ngOnInit() {
    mapboxgl.accessToken = environment.mapboxKey;
    this.mapa = new mapboxgl.Map({
    container: 'mapa',
    style: 'mapbox://styles/mapbox/streets-v11', 
    center: [-99.12493054986257,19.372990988877753,], 
    zoom:16, 
    });
    

    this.crearMarker(-99.12493054986257,19.372990988877753,)
  }


  crearMarker(lng: number  ,lat: number){
    const title='Karvaes Servicios SC'
    const description='Ven y comprueba lo mejor de nuestros servicios'
    
    const el = document.createElement('div');
    el.className = 'marker';
    el.style.backgroundImage = `url(assets/images/karvaesLogo.png)`;
    const width = 160;
    const height = 160;
    el.style.width = `${width}px`;
    el.style.height = `${height}px`;
    el.style.backgroundSize = '100%';
    const  marker = new  mapboxgl.Marker(el)
    .setLngLat([lng,lat])
    .setPopup(
      new mapboxgl.Popup({ offset: 25 }) // add popups
        .setHTML(
          `<h3>${title}</h3><p>${description}</p>`
        )
    )
    .addTo(this.mapa);

  }


}
