import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '../../../material.module';

import { MinimalTwoComponent } from './minimal-two.component';

import { CarouselModule } from 'ngx-owl-carousel-o';
import { HeaderComponent } from './header/header.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { FeatureComponent } from './feature/feature.component';
import { PricingComponent } from './pricing/pricing.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { BlogComponent } from './blog/blog.component';
import { WorkComponent } from './work/work.component';
import { OurWorkComponent } from './our-work/our-work.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';

const routes: Routes = [
    {
        path: '',
        component: MinimalTwoComponent
    }
];

@NgModule({
    declarations: [
        MinimalTwoComponent,
        HeaderComponent,
        WelcomeComponent,
        FeatureComponent,
        PricingComponent,
        TestimonialComponent,
        BlogComponent,
        WorkComponent,
        OurWorkComponent,
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
export class MinimalTwoModule { }
