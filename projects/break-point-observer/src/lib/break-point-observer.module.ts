import { BreakPointObserverService } from './break-point-observer.service';
import { NgModule } from '@angular/core';
import { BreakPointObserverComponent } from './break-point-observer.component';

import { InjectionToken } from '@angular/core';

export interface LibConfig {
  size: string;
  value: string;
}

export const LibConfigService = new InjectionToken<LibConfig>('LibConfig');
@NgModule({
  declarations: [BreakPointObserverComponent],
  imports: [
  ],
  providers: [BreakPointObserverService],
  exports: [BreakPointObserverComponent]
})
export class BreakPointObserverModule {
  static forRoot(config: LibConfig): BreakPointObserverModule {
    return {
      ngModule: BreakPointObserverModule,
      providers: [
        {
          provide: LibConfigService,
          useValue: config
        }
      ]
    };
  }
}
