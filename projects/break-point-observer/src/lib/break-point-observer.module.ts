import { BreakPointObserverService } from './break-point-observer.service';
import { NgModule, ModuleWithProviders, InjectionToken } from '@angular/core';
import { BreakPointObserverComponent } from './break-point-observer.component';
import { LibConfig } from './lib.config';
import { LibConfigService } from './lib.config.service';


@NgModule({
  declarations: [BreakPointObserverComponent],
  imports: [
  ],
  providers: [BreakPointObserverService],
  exports: [BreakPointObserverComponent]
})
export class BreakPointObserverModule {
  static forRoot(config: LibConfig): ModuleWithProviders {
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
