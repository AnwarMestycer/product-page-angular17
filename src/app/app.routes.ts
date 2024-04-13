import { Routes } from '@angular/router';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { CartComponent } from './components/cart/cart.component';

export const routes: Routes = [
    {
        path:'',
        component:ProductCardComponent
    },
    {
        path:'cart',
        component: CartComponent
    }
];
