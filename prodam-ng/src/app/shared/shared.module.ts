import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation/navigation.component';
import { RouterLinkWithHref } from "@angular/router";


@NgModule({
  declarations: [

    NavigationComponent
  ],
  exports: [
    NavigationComponent
  ],
  imports: [
    CommonModule,
    RouterLinkWithHref
  ]
})
export class SharedModule {
}
