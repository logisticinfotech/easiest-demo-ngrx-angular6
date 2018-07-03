import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TabsContainerComponent } from './containers/tabs-container/tabs-container.component';
import { CheckboxContainerComponent } from './containers/checkbox-container/checkbox-container.component';
import { TextfieldContainerComponent } from './containers/textfield-container/textfield-container.component';
import { SelectContainerComponent } from './containers/select-container/select-container.component';
import { RadioContainerComponent } from './containers/radio-container/radio-container.component';


export const routes: Routes = [
    {
        path: '',
        redirectTo: 'tabs',
        pathMatch: 'full'
    },
    {
        path: 'tabs',
        component: TabsContainerComponent
    },
    {
        path: 'textfield',
        component: TextfieldContainerComponent
    },
    {
        path: 'select',
        component: SelectContainerComponent
    },
    {
        path: 'checkbox',
        component: CheckboxContainerComponent
    },
    {
        path: 'radio',
        component: RadioContainerComponent
    },
    {
        path: '**',
        redirectTo: 'tabs',
        pathMatch: 'full'
    },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { useHash: false })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
