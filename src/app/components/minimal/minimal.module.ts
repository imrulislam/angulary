import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { CarouselModule } from 'ngx-owl-carousel-o';

const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'minimal-light' },
    { path: 'minimal-one', loadChildren: () => import(`./minimal-one/minimal-one.module`).then(m => m.MinimalLightModule) },
    { path: 'minimal-two', loadChildren: () => import(`./minimal-two/minimal-two.module`).then(m => m.MinimalTwoModule) },
    { path: 'minimal-three', loadChildren: () => import(`./minimal-three/minimal-three.module`).then(m => m.MinimalThreeModule) }
];

@NgModule({
    declarations: [
    ],
    imports: [
        CommonModule,
        CarouselModule,
        RouterModule.forChild(routes),
    ]
})
export class MinimalModule { }
