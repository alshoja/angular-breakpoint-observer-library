import { Injectable } from '@angular/core';
import { fromEvent, Observable } from 'rxjs';
import { startWith, map, distinctUntilChanged, shareReplay } from 'rxjs/operators';

const MEDIA_QUERY: Map<string, string> = new Map([
  ['xl', '(min-width: 1200px)'],
  ['lg', '(min-width: 992px)'],
  ['md', '(min-width: 768px)'],
  ['sm', '(min-width: 576px)'],
  ['xs', '(min-width: 0px)'],
]);

@Injectable({
  providedIn: 'root'
})
export class BreakPointObserverService {
  private screensize: Observable<string>;

  constructor() {
    this.screensize = fromEvent(window, 'resize')
      .pipe(
        startWith(this.getScreenSize()),
        map((event: Event) => {
          return this.getScreenSize();
        }),
        distinctUntilChanged(),
        shareReplay(1)
      );
  }

  public get size(): Observable<string> {
    return this.screensize;
  }

  private getScreenSize(): string {
    const [[newSize = 'never']] = Array.from(MEDIA_QUERY.entries())
      .filter(([size, mediaQuery]) => window.matchMedia(mediaQuery).matches);
    return newSize;
  }
}
