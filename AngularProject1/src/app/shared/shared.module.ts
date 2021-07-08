import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WatchComponent } from './watch/watch.component';
import { ShortCutPipe} from './pipes/shortcutpipe';
import { ChangeColorDirective } from './directives/change-color-directive'

@NgModule({
  declarations: [
    WatchComponent,
    ShortCutPipe,
    ChangeColorDirective
  ],
  imports: [
    CommonModule
  ],
  exports:[
    WatchComponent,
    ShortCutPipe,
    ChangeColorDirective
  ]
})
export class SharedModule { }
