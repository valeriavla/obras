import { Component, OnInit } from '@angular/core';
import { Leaflet } from 'leaflet';
declare let L;
import '../../node_modules/leaflet-routing-machine/dist/leaflet-routing-machine.js'

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    leafletMap: any;
    leafletMap2: any;
    flagtransmas: boolean;
    ngAfterViewInit() {
       this.leafletMap = L.map('map').setView([19.0437, -98.1984], 13);
       L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(this.leafletMap);
        L.marker([19.0515 ,-98.1927]).on('click',(data) => {alert("MONTO TOTAL DE INVERSIÓN:\n$2,790,456,040")} ).addTo(this.leafletMap).bindPopup("Carretera Puebla-Atlixco,Tramo: Periférico Ecológico-Atlixco");
        L.marker([19.029585, -98.246777]).on('click',(data) => {alert("MONTO TOTAL DE INVERSIÓN:\n$2,996,915,976")} ).addTo(this.leafletMap).bindPopup("Sustitución del Hospital General Regional con Unidad Médica de Atención Ambulatoria No. 36");
        L.marker([19.074057,-98.202641]).on('click',(data) => {alert("MONTO TOTAL DE INVERSIÓN:\n$2,790,456,040")} ).addTo(this.leafletMap).bindPopup("Transporte Masivo de la Cuenca Norte-Sur de la Zona Metropolitana de Puebla");
        L.marker([19.0515,-98.1927]).on('click',(data) => {alert("MONTO TOTAL DE INVERSIÓN:\n1,297,480,157")} ).addTo(this.leafletMap).bindPopup("Ampliación del Hospital de Especialidades de la UMAE en Puebla.");
        L.marker([18.941889 ,-98.472236]).on('click',(data) => {alert("MONTO TOTAL DE INVERSIÓN:\n$2,790,456,040")} ).addTo(this.leafletMap).bindPopup("Rehabilitación y reparación de la Planta de Lavado Metepec, Atlixco, Puebla.");
        L.marker([18.496,-98.61]).on('click',(data) => {alert("MONTO TOTAL DE INVERSIÓN:\n$2,790,456,040")} ).addTo(this.leafletMap).bindPopup("Entubamiento del Canal Principal San Miguel");
        L.marker([ 19.009144, -98.183294]).on('click',(data) => {alert("MONTO TOTAL DE INVERSIÓN:\n$391,034,419")} ).addTo(this.leafletMap).bindPopup("Ampliación del área de hospitalización con gineco obstetricia");
        L.marker([ 19.1342 ,-98.271]).on('click',(data) => {alert("MONTO TOTAL DE INVERSIÓN:\n$2,273,120,037")} ).addTo(this.leafletMap).bindPopup("Regeneración, Conservación y Mantenimiento del Periférico Ecológico de la Ciudad de Puebla.");
        
    }
   
    constructor() {

    }

     ngOnInit() {
    /*    const map = L.map('map').setView([19.0437, -98.1984], 13);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);*/
    }

}