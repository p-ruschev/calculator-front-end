import { DOCUMENT } from '@angular/common';
import { Component, HostBinding, Inject, Renderer2 } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    isDark: boolean = false;

    @HostBinding('class')
    get themeMode(): string {
        return this.isDark ? 'theme-dark' : 'theme-light';
    }

    constructor(@Inject(DOCUMENT) private document: Document, private renderer: Renderer2) { }

    themeSwitch(mode: boolean): void {
        this.isDark = mode;
        const hostClass = mode ? 'theme-dark' : 'theme-light'
        this.renderer.setAttribute(this.document.body, 'class', hostClass);
    }
}
