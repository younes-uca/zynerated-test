import {Component, OnInit} from '@angular/core';
import {ClientAdminService} from 'src/app/shared/service/admin/crm/ClientAdmin.service';
import {ClientDto} from 'src/app/shared/model/crm/Client.model';
import {ClientCriteria} from 'src/app/shared/criteria/crm/ClientCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import { environment } from 'src/environments/environment';

import {ClientCategoryDto} from 'src/app/shared/model/crm/ClientCategory.model';
import {ClientCategoryAdminService} from 'src/app/shared/service/admin/crm/ClientCategoryAdmin.service';


@Component({
  selector: 'app-client-list-admin',
  templateUrl: './client-list-admin.component.html'
})
export class ClientListAdminComponent extends AbstractListController<ClientDto, ClientCriteria, ClientAdminService>  implements OnInit {

    override fileName = 'Client';


    clientCategorys: Array<ClientCategoryDto>;


    constructor( private clientService: ClientAdminService  , private clientCategoryService: ClientCategoryAdminService) {
        super(clientService);
    }

    ngOnInit(): void {
        this.activateSecurityConstraint('Client').subscribe(() => {
            if (true || this.listActionIsValid){
                this.findPaginatedByCriteria();
                this.initExport();
                this.initCol();
                this.loadClientCategory();
            }
        });
    }


    public override  initCol() {
        this.cols = [
            {field: 'fullName', header: 'Full name'},
            {field: 'email', header: 'Email'},
            {field: 'clientCategory?.reference', header: 'Client category'},
        ];
    }


    public async loadClientCategory(){
       this.clientCategoryService.findAllOptimized().subscribe(clientCategorys => this.clientCategorys = clientCategorys, error => console.log(error))
    }



   public  override prepareColumnExport(): void {
        this.exportData = this.items.map(e => {
            return {
                 'Full name': e.fullName ,
                 'Email': e.email ,
                'Client category': e.clientCategory?.reference ,
            }
        });

        this.criteriaData = [{
            'Full name': this.criteria.fullName ? this.criteria.fullName : environment.emptyForExport ,
            'Email': this.criteria.email ? this.criteria.email : environment.emptyForExport ,
        //'Client category': this.criteria.clientCategory?.reference ? this.criteria.clientCategory?.reference : environment.emptyForExport ,
        }];
      }
}
