import {Component, OnInit} from '@angular/core';
import {PurchaseAdminService} from 'src/app/shared/service/admin/money/PurchaseAdmin.service';
import {PurchaseDto} from 'src/app/shared/model/money/Purchase.model';
import {PurchaseCriteria} from 'src/app/shared/criteria/money/PurchaseCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import { environment } from 'src/environments/environment';

import {PurchaseTagDto} from 'src/app/shared/model/money/PurchaseTag.model';
import {PurchaseTagAdminService} from 'src/app/shared/service/admin/money/PurchaseTagAdmin.service';
import {PurchaseStateDto} from 'src/app/shared/model/commun/PurchaseState.model';
import {PurchaseStateAdminService} from 'src/app/shared/service/admin/commun/PurchaseStateAdmin.service';
import {ProductDto} from 'src/app/shared/model/catalog/Product.model';
import {ProductAdminService} from 'src/app/shared/service/admin/catalog/ProductAdmin.service';
import {TagDto} from 'src/app/shared/model/commun/Tag.model';
import {TagAdminService} from 'src/app/shared/service/admin/commun/TagAdmin.service';
import {PurchaseItemDto} from 'src/app/shared/model/money/PurchaseItem.model';
import {PurchaseItemAdminService} from 'src/app/shared/service/admin/money/PurchaseItemAdmin.service';
import {ClientDto} from 'src/app/shared/model/crm/Client.model';
import {ClientAdminService} from 'src/app/shared/service/admin/crm/ClientAdmin.service';


@Component({
  selector: 'app-purchase-list-admin',
  templateUrl: './purchase-list-admin.component.html'
})
export class PurchaseListAdminComponent extends AbstractListController<PurchaseDto, PurchaseCriteria, PurchaseAdminService>  implements OnInit {

    override fileName = 'Purchase';


    clients: Array<ClientDto>;
    purchaseStates: Array<PurchaseStateDto>;


    constructor( private purchaseService: PurchaseAdminService  , private purchaseTagService: PurchaseTagAdminService, private purchaseStateService: PurchaseStateAdminService, private productService: ProductAdminService, private tagService: TagAdminService, private purchaseItemService: PurchaseItemAdminService, private clientService: ClientAdminService) {
        super(purchaseService);
    }

    ngOnInit(): void {
        this.activateSecurityConstraint('Purchase').subscribe(() => {
            if (true || this.listActionIsValid){
                this.findPaginatedByCriteria();
                this.initExport();
                this.initCol();
                this.loadClient();
                this.loadPurchaseState();
            }
        });
    }


    public override  initCol() {
        this.cols = [
            {field: 'reference', header: 'Reference'},
            {field: 'purchaseDate', header: 'Purchase date'},
            {field: 'image', header: 'Image'},
            {field: 'total', header: 'Total'},
            {field: 'client?.fullName', header: 'Client'},
            {field: 'purchaseState?.reference', header: 'Purchase state'},
        ];
    }


    public async loadClient(){
       this.clientService.findAllOptimized().subscribe(clients => this.clients = clients, error => console.log(error))
    }
    public async loadPurchaseState(){
       this.purchaseStateService.findAllOptimized().subscribe(purchaseStates => this.purchaseStates = purchaseStates, error => console.log(error))
    }

	public override initDuplicate(res: PurchaseDto) {
        if (res.purchaseItems != null) {
             res.purchaseItems.forEach(d => { d.purchase = null; d.id = null; });
        }
        if (res.purchaseTags != null) {
             res.purchaseTags.forEach(d => { d.purchase = null; d.id = null; });
        }
	}


   public  override prepareColumnExport(): void {
        this.exportData = this.items.map(e => {
            return {
                 'Reference': e.reference ,
                'Purchase date': this.datePipe.transform(e.purchaseDate , 'dd/MM/yyyy hh:mm'),
                 'Image': e.image ,
                 'Total': e.total ,
                 'Description': e.description ,
                'Client': e.client?.fullName ,
                'Purchase state': e.purchaseState?.reference ,
            }
        });

        this.criteriaData = [{
            'Reference': this.criteria.reference ? this.criteria.reference : environment.emptyForExport ,
            'Purchase date Min': this.criteria.purchaseDateFrom ? this.datePipe.transform(this.criteria.purchaseDateFrom , this.dateFormat) : environment.emptyForExport ,
            'Purchase date Max': this.criteria.purchaseDateTo ? this.datePipe.transform(this.criteria.purchaseDateTo , this.dateFormat) : environment.emptyForExport ,
            'Image': this.criteria.image ? this.criteria.image : environment.emptyForExport ,
            'Total Min': this.criteria.totalMin ? this.criteria.totalMin : environment.emptyForExport ,
            'Total Max': this.criteria.totalMax ? this.criteria.totalMax : environment.emptyForExport ,
            'Description': this.criteria.description ? this.criteria.description : environment.emptyForExport ,
        //'Client': this.criteria.client?.fullName ? this.criteria.client?.fullName : environment.emptyForExport ,
        //'Purchase state': this.criteria.purchaseState?.reference ? this.criteria.purchaseState?.reference : environment.emptyForExport ,
        }];
      }
}
