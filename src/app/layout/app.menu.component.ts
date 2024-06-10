import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from './service/app.layout.service';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

    model: any[] = [];

    constructor(public layoutService: LayoutService) { }

    ngOnInit() {
        this.model = [
            {
                label: 'Seguridad',
                items: [
                    { label: 'Usuarios', icon: 'pi pi-fw pi-id-card', routerLink: ['/auth/login'] }
                ]
            },
            {
                label: 'Datos',
                items: [
                    { label: 'Insumos Médicos', icon: 'pi pi-fw pi-id-card', routerLink: ['/uikit/formlayout'] },
                    { label: 'Kits Médicos', icon: 'pi pi-fw pi-check-square', routerLink: ['/uikit/input'] },
                    { label: 'Recursos Humanos', icon: 'pi pi-fw pi-bookmark', routerLink: ['/uikit/floatlabel'] },
                    { label: 'Equipamiento & Muebles', icon: 'pi pi-fw pi-exclamation-circle', routerLink: ['/uikit/invalidstate'] },
                    { label: 'Equipamiento Adicional', icon: 'pi pi-fw pi-box', routerLink: ['/uikit/button'] },
                    { label: 'Infraestructura', icon: 'pi pi-fw pi-table', routerLink: ['/uikit/table'] },
                    { label: 'Servicios Básicos', icon: 'pi pi-fw pi-list', routerLink: ['/uikit/list'] },
                    { label: 'Servicios Generales', icon: 'pi pi-fw pi-share-alt', routerLink: ['/uikit/tree'] },
                    { label: 'Procediminetos Médicos', icon: 'pi pi-fw pi-tablet', routerLink: ['/uikit/panel'] }
                ]
            },
            {
                label: 'Relación',
                items: [
                    { label: 'CPMS - UPS', icon: 'pi pi-fw pi-id-card', routerLink: ['/uikit/formlayout'] },
                    { label: 'CPMS - Kit Médicos', icon: 'pi pi-fw pi-check-square', routerLink: ['/uikit/input'] },
                    { label: 'CPMS - Equipamiento', icon: 'pi pi-fw pi-bookmark', routerLink: ['/uikit/floatlabel'] },
                    { label: 'CPMS - Recurso Humanos', icon: 'pi pi-fw pi-exclamation-circle', routerLink: ['/uikit/invalidstate'] }
                    //{ label: 'PrimeFlex', icon: 'pi pi-fw pi-desktop', url: ['https://www.primefaces.org/primeflex/'], target: '_blank' }
                ]
            },
            {
                label: 'Reporte',
                items: [
                    { label: 'Costeo', icon: 'pi pi-fw pi-id-card', routerLink: ['/uikit/formlayout'] }
                ]
            }
        ];
    }
}
