import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { SidebarComponent } from './components/sidebar/sidebar.component'
import { LazyImageComponent } from './components/lazy-image/lazy-image.component';
import { LoaderComponent } from './components/loader/loader.component'

@NgModule({
  declarations: [
    SidebarComponent,
    LazyImageComponent,
    LoaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SidebarComponent,
    LazyImageComponent
  ]
})
export class SharedModule { }
