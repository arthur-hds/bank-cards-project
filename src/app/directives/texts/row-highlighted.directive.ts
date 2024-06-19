import { Directive, HostBinding, HostListener } from "@angular/core";


@Directive({

    selector: "[RowHighlighted]"

})
export class RowHighlightedDirective {
    
    @HostBinding("style.background-color")
    bgColor = "rgb(210, 217, 222)"

    @HostBinding("style.cursor")
    mouseCursor = "auto"


    @HostListener("mouseover") onMouseOver (){
        this.bgColor = "rgb(176, 182, 187)";
        this.mouseCursor = "pointer"
    }

    @HostListener("mouseout") onMouseOut (){
        this.bgColor = "rgb(210, 217, 222)"
        this.mouseCursor = "auto"
    }


}