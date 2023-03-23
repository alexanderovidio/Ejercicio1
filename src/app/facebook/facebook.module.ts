import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { StoriesComponent } from './stories/stories.component';
import { TimelineComponent } from './timeline/timeline.component';



@NgModule({
  declarations: [
    HeaderComponent,
    StoriesComponent,
    TimelineComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    StoriesComponent,
    TimelineComponent
  ]
})
export class FacebookModule { }
