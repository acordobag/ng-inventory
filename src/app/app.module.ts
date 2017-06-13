import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ListComponentComponent } from './list-component/list-component.component';
import { PickingComponent } from './picking/picking.component';

const routes=[{
  path: 'products', component: ListComponentComponent},
{ path: 'in-move', component: PickingComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    ListComponentComponent,
    PickingComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
