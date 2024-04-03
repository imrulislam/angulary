
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from 'src/app/material.module';
// All Components

import { DocumentComponent } from './document.component';


const routes: Routes = [
    { path: '', component: DocumentComponent },
];


@NgModule({
    declarations: [
        DocumentComponent
    ],
    imports: [
        MaterialModule,
        RouterModule.forChild(routes)
    ],
    providers: [],
    bootstrap: []
})
export class DocumentModule { }
