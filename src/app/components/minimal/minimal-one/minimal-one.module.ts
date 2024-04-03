import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '../../../material.module';

import { MinimalOneComponent } from './minimal-one.component';

import { CarouselModule } from 'ngx-owl-carousel-o';
import { HeaderComponent } from './header/header.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { FeatureComponent } from './feature/feature.component';
import { PricingComponent } from './pricing/pricing.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { BlogComponent } from './blog/blog.component';
import { WorkComponent } from './work/work.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';

const routes: Routes = [
    {
        path: '',
        component: MinimalOneComponent
    }
];

@NgModule({
    declarations: [
        MinimalOneComponent,
        HeaderComponent,
        WelcomeComponent,
        FeatureComponent,
        PricingComponent,
        TestimonialComponent,
        BlogComponent,
        WorkComponent,
        AboutUsComponent,
        ContactComponent,
        FooterComponent
    ],
    imports: [
        CommonModule,
        CarouselModule,
        MaterialModule,
        RouterModule.forChild(routes),
    ]
})
export class MinimalLightModule { }
