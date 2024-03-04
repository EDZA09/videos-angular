import { Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ErrorComponent } from './components/error/error.component';
import { VideoNewComponent } from './components/video-new/video-new.component';

export const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'inicio', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'logout/:sure', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'guardar-favorito', component: VideoNewComponent },
  { path: 'error', component: ErrorComponent },
  { path: '**', redirectTo: '/error', pathMatch: 'full' },
];
