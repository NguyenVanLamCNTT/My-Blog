import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LayoutComponent} from './layout.component';
import {HomeComponent} from './home/home.component';
import {SkillsComponent} from './skills/skills.component';
import {AboutMeComponent} from './about-me/about-me.component';
import {ContactComponent} from './contact/contact.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
      },
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'skills',
        component: SkillsComponent
      },
      {
        path: 'about-me',
        component: AboutMeComponent
      },
      {
        path: 'contact',
        component: ContactComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
