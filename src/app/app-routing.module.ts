import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { CaliforniaComponent } from './pages/california/california.component';
import { ErrorComponent } from './pages/error/error.component';
import { FloridaComponent } from './pages/florida/florida.component';
import { HomeComponent } from './pages/home/home.component';
import { HongkongComponent } from './pages/hongkong/hongkong.component';
import { ParisComponent } from './pages/paris/paris.component';
import { ShanghaiComponent } from './pages/shanghai/shanghai.component';
import { SliderComponent } from './pages/slider/slider.component';
import { TokyoComponent } from './pages/tokyo/tokyo.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'error', component: ErrorComponent},
  {path: '',
    component: SliderComponent,
    children: [
      {path: 'florida', component: FloridaComponent},
      {path: 'california', component: CaliforniaComponent},
      {path: 'hong-kong', component: HongkongComponent},
      {path: 'shanghai', component: ShanghaiComponent},
      {path: 'tokyo', component: TokyoComponent},
      {path: 'paris', component: ParisComponent},
    ]
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
