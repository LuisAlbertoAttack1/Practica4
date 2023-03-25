import { Component } from "@angular/core";

@Component({
    //se coloca el @ antes de component
    // y vamos ingresando , se concatena con 
    selector : 'ts-root',
    templateUrl : 'ts.component.html',
    styleUrls : ['ts.component.css']

})
//Creamos la clase que tu quieras 
 export class tsComponent {

    public titulo : string = 'QUE ES TS';
        
    
}