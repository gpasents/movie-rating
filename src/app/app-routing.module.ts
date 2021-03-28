import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchBarComponent } from './search-bar/search-bar.component';
import {SearchResultsComponent} from './search-results/search-results.component';

const routes: Routes = [
  {
    path: '',
    component: SearchBarComponent,
  },
  {
    path: 'results/:value',
    component: SearchResultsComponent,
  }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ],
    declarations: []
})
export class AppRoutingModule { }