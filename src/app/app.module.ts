import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AddCicekComponent } from './add-cicek/add-cicek.component';
import { ListCicekComponent } from './list-cicek/list-cicek.component';
import { CicekDetailComponent } from './cicek-detail/cicek-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    AddCicekComponent,
    ListCicekComponent,
    CicekDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: 'cicekler', component: ListCicekComponent },
      { path: 'cicekler/add', component: AddCicekComponent },
      { path: 'cicekler/:name', component: CicekDetailComponent },
      { path: '', component: ListCicekComponent },
      // { path: '**', component: NotFoundComponent }

    ]),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
