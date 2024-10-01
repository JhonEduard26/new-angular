import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroesRoutingModule } from './heroes-routing.module';
import { HeroComponent } from './pages/hero/hero.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { ListComponent } from './pages/list/list.component';
import { NewComponent } from './pages/new/new.component';
import { SearchComponent } from './pages/search/search.component';


@NgModule({
  declarations: [
    HeroComponent,
    LayoutComponent,
    ListComponent,
    NewComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    HeroesRoutingModule
  ]
})
export class HeroesModule { }
