import { Routes } from '@angular/router';
import { Home } from '../features/home/home';
import { NotarialServices } from '../features/notarial-services/notarial-services';
import { MainLayout } from '../shared/main-layout/main-layout';

export const routes: Routes = [
        {
        path: '', 
        component: MainLayout,
        children: [
            { path: '', component: Home },
            { path: 'home', component: Home },
            { path: 'dodatkowe-czynnosci-notarialne', component: NotarialServices }
        ]
    }
];