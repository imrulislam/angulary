
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from 'src/app/material.module';
// All Components

import { DemoComponent } from './demo.component';


const routes: Routes = [
    { path: '', component: DemoComponent },
];


@NgModule({
    declarations: [
        DemoComponent
    ],
    imports: [
        MaterialModule,
        RouterModule.forChild(routes)
    ],
    providers: [],
    bootstrap: []
})
export class DemoModule { }
