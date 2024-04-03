import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '../../../material.module';

import { MinimalThreeComponent } from './minimal-three.component';

import { CarouselModule } from 'ngx-owl-carousel-o';
import { HeaderComponent } from './header/header.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { FaqComponent } from './faq/faq.component';
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
        component: MinimalThreeComponent
    }
];

@NgModule({
    declarations: [
        MinimalThreeComponent,
        HeaderComponent,
        WelcomeComponent,
        FaqComponent,
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
export class MinimalThreeModule { }
