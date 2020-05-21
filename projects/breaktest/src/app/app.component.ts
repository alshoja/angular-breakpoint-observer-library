import { BreakPointObserverService } from './../../../break-point-observer/src/lib/break-point-observer.service';
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
    this.observerService.size.subscribe(res => {
      console.log('res from lib', res);
    });
  }
}
