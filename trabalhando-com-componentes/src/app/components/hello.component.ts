import { Component, Input } from '@angular/core';

@Component({
    selector: 'hello',
    templateUrl: './hello.component.html',
    styles: ['./hello.component.css']
})

export class Hellocomponent {
    @Input() name = 'Angular';
}