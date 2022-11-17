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
    center: [-74.5, 40], 
    zoom: 18, 
    });
    

    this.crearMarker(-74.5, 40)
  }


  crearMarker(lng: number ,lat: number){
    const  marker = new  mapboxgl.marker({
      draggable:true
    })
    .setLngLat([lng,lat])
    .addTo(this.mapa);

  }


}
