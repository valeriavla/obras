import { Component, OnInit } from '@angular/core';
import { TestBed, async } from '@angular/core/testing';
import '../../node_modules/leaflet-routing-machine/dist/leaflet-routing-machine.js'
import { Leaflet } from 'leaflet';
declare let L;
import * as L from 'leaflet';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    constructor() {

    }

    ngOnInit() {
        const map = L.map('map').setView([19.0437, -98.1984], 13);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);
        L.marker([19.0515 ,-98.1927]).addTo(map).bindPopup("Carretera Puebla-Atlixco,Tramo: Periférico Ecológico-Atlixco");
        L.Routing.control({
            waypoints: [
                L.latLng(19.0425, -98.2138),
                L.latLng(19.0725, -98.2138)
            ]
        }).addTo(map);
    }

}
