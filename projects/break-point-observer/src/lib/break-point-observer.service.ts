import { Injectable, Inject } from '@angular/core';
import { fromEvent, Observable } from 'rxjs';
import { startWith, map, distinctUntilChanged, shareReplay } from 'rxjs/operators';
import { LibConfig } from './lib.config';
import { LibConfigService } from './lib.config.service';

// const MEDIA_QUERY: Map<string, string> = new Map([
//   ['xl', '(min-width: 1200px)'],
//   ['lg', '(min-width: 992px)'],
//   ['md', '(min-width: 768px)'],
//   ['sm', '(min-width: 576px)'],
//   ['xs', '(min-width: 0px)'],
// ]);

@Injectable({
  providedIn: 'root'
})
export class BreakPointObserverService {
  private screensize: Observable<string>;
  private libConfig: LibConfig;

  public MEDIA_QUERY: Map<string, string>;

  constructor(@Inject(LibConfigService) private config) {
    this.libConfig = config;
    const ArrObj: any = this.getConfig();
    this.MEDIA_QUERY = new Map(ArrObj.map(Object.values));
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

  public getConfig(): LibConfig {
    return this.libConfig;
  }

  public get size(): Observable<string> {
    return this.screensize;
  }

  private getScreenSize(): string {
    const [[newSize = 'never']] = Array.from(this.MEDIA_QUERY.entries())
      .filter(([size, mediaQuery]) => window.matchMedia(mediaQuery).matches);
    return newSize;
  }
}
