import {Component, OnInit} from '@angular/core';
import {ClientCategoryAdminService} from 'src/app/shared/service/admin/crm/ClientCategoryAdmin.service';
import {ClientCategoryDto} from 'src/app/shared/model/crm/ClientCategory.model';
import {ClientCategoryCriteria} from 'src/app/shared/criteria/crm/ClientCategoryCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import { environment } from 'src/environments/environment';



@Component({
  selector: 'app-client-category-list-admin',
  templateUrl: './client-category-list-admin.component.html'
})
export class ClientCategoryListAdminComponent extends AbstractListController<ClientCategoryDto, ClientCategoryCriteria, ClientCategoryAdminService>  implements OnInit {

    override fileName = 'ClientCategory';




    constructor( private clientCategoryService: ClientCategoryAdminService  ) {
        super(clientCategoryService);
    }

    ngOnInit(): void {
        this.activateSecurityConstraint('ClientCategory').subscribe(() => {
            if (true || this.listActionIsValid){
                this.findPaginatedByCriteria();
                this.initExport();
                this.initCol();
            }
        });
    }


    public override  initCol() {
        this.cols = [
            {field: 'reference', header: 'Reference'},
            {field: 'code', header: 'Code'},
        ];
    }





   public  override prepareColumnExport(): void {
        this.exportData = this.items.map(e => {
            return {
                 'Reference': e.reference ,
                 'Code': e.code ,
            }
        });

        this.criteriaData = [{
            'Reference': this.criteria.reference ? this.criteria.reference : environment.emptyForExport ,
            'Code': this.criteria.code ? this.criteria.code : environment.emptyForExport ,
        }];
      }
}
