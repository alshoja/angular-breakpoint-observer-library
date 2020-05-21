# Angular-breakpoint-observer
Let you observe your current screen size dynamicaly as observable in any of the components using the service

* Can be used instead of media query in angular 6,7,8,9

* Demo in [Stack Blitz](https://owaingnqw.github.stackblitz.io)

## Getting started

### Install via npm 
```sh
npm install --save alshoja/break-point-observer
```

### Import the module
```javascript
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BreakPointObserverModule.forRoot(
      [
        { gridName: 'xl', width: '(min-width: 1200px)' },
        { gridName: 'lg', width: '(min-width: 992px)' },
        { gridName: 'md', width: '(min-width: 768px)' },
        { gridName: 'sm', width: '(min-width: 576px)' },
        { gridName: 'xs', width: '(min-width: 0px)' },
      ]
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
```

### Subscribe to the screen size

```javascript
import { BreakPointObserverService } from '@alshoja/break-point-observer.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'breaktest';
  constructor(private observerService: BreakPointObserverService) {

  }
  ngOnInit() {
    this.observerService.size.subscribe(screensize => {
      console.log('screensize', screensize);
    });
  }
}

```

## Running the demo app

```sh
ng serve
```
