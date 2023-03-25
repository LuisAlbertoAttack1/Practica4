import { Component } from "@angular/core";

@Component({
    //se coloca el @ antes de component
    // y vamos ingresando , se concatena con 
    selector : 'css-root',
    templateUrl : 'css.component.html',
    styleUrls : ['css.component.css']

})
//Creamos la clase que tu quieras 
 export class cssComponent {

    public titulo : string = 'QUE ES CSS';
        
    
}