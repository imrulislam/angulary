import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from './material.module';
// All Components
import { AppComponent } from './app.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'demo' },
  { path: 'demo', loadChildren: () => import(`./components/demo/demo.module`).then(m => m.DemoModule) },
  { path: 'minimal', loadChildren: () => import(`./components/minimal/minimal.module`).then(m => m.MinimalModule) },
  { path: 'document', loadChildren: () => import(`./components/document/document.module`).then(m => m.DocumentModule) }
];


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
