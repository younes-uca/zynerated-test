import {Component, OnInit} from '@angular/core';
import {PurchaseStateAdminService} from 'src/app/shared/service/admin/commun/PurchaseStateAdmin.service';
import {PurchaseStateDto} from 'src/app/shared/model/commun/PurchaseState.model';
import {PurchaseStateCriteria} from 'src/app/shared/criteria/commun/PurchaseStateCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import { environment } from 'src/environments/environment';



@Component({
  selector: 'app-purchase-state-list-admin',
  templateUrl: './purchase-state-list-admin.component.html'
})
export class PurchaseStateListAdminComponent extends AbstractListController<PurchaseStateDto, PurchaseStateCriteria, PurchaseStateAdminService>  implements OnInit {

    override fileName = 'PurchaseState';




    constructor( private purchaseStateService: PurchaseStateAdminService  ) {
        super(purchaseStateService);
    }

    ngOnInit(): void {
        this.activateSecurityConstraint('PurchaseState').subscribe(() => {
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
