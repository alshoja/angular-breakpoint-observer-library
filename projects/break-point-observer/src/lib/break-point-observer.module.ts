import { BreakPointObserverService } from './break-point-observer.service';
import { NgModule } from '@angular/core';
import { BreakPointObserverComponent } from './break-point-observer.component';



@NgModule({
  declarations: [BreakPointObserverComponent],
  imports: [
  ],
  providers: [BreakPointObserverService],
  exports: [BreakPointObserverComponent]
})
export class BreakPointObserverModule { }
