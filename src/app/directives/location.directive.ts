import { Directive } from '@angular/core';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';

@Directive({
    selector: '[appLocation]',
    providers: [Location, {
        provide: LocationStrategy,
        useClass: PathLocationStrategy
    }]
})
export class LocationDirective {
    isRoot: boolean;

    constructor(private location: Location) {}

    // Get
    getPath() {
        console.log(this.location.path());
    }
    // go: Changes the given URL and adds it to the browser’s history.
    // replaceState: Changes to the given URL, and replace the topmost URL in the history. This makes it so that if the user goes back it won’t go back to the url that the user was on, but the one before.
    // isCurrentPathEqualTo: Compares two given path values to see if they are equal.
    // normalize: Takes a path and returns a normalized path.

    ngOnInit() {
        // Obtener url
        this.getPath();

        // Con router
        // this.router.events.subscribe(event => {
        //     if (this.location.path() !== '') {
        //         this.isRoot = false;
        //     } else {
        //         this.isRoot = true;
        //     }
        // })

    }

}
