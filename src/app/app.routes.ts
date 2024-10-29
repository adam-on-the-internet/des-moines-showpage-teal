import {Routes} from '@angular/router';
import {UpcomingShowsComponent} from './components/upcoming-shows/upcoming-shows.component';

export const routes: Routes = [
  {path: 'upcoming-shows', component: UpcomingShowsComponent},
  {path: '', redirectTo: '/upcoming-shows', pathMatch: 'full'},
];
