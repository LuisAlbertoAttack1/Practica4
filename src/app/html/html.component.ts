import { Component } from "@angular/core";

@Component({
    //se coloca el @ antes de component
    // y vamos ingresando , se concatena con 
    selector : 'html-root',
    templateUrl : 'html.component.html',
    styleUrls : ['html.component.css']

})
//Creamos la clase que tu quieras 
 export class htmlComponent {

    public titulo : string = 'QUE ES HTML';
        
    
}