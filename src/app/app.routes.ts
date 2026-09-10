import { Routes } from '@angular/router';
import { Home } from '../pages/home/home';
import { Documents } from '../pages/documents/documents';
import { Fees } from '../pages/fees/fees';
import { Contact } from '../pages/contact/contact';
import { Links } from '../pages/links/links';
import { NotarialServices } from '../pages/notarial-services/notarial-services';
import { MainLayout } from '../shared/main-layout/main-layout';

export const routes: Routes = [
        {
        path: '', 
        component: MainLayout,
        children: [
            { path: '', component: Home },
            { path: 'home', component: Home },
            { path: 'dokumenty', component: Documents },
            { path: 'oplaty', component: Fees },
            { path: 'kontakt', component: Contact },
            { path: 'linki', component: Links },
            { path: 'czynnosci-notarialne', component: NotarialServices }
        ]
    }
];