import {Component, OnInit} from '@angular/core';


import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import { environment } from 'src/environments/environment';

import {PurchaseStateAdminService} from 'src/app/shared/service/admin/commun/PurchaseStateAdmin.service';
import {PurchaseStateDto} from 'src/app/shared/model/commun/PurchaseState.model';
import {PurchaseStateCriteria} from 'src/app/shared/criteria/commun/PurchaseStateCriteria.model';

@Component({
  selector: 'app-purchase-state-view-admin',
  templateUrl: './purchase-state-view-admin.component.html'
})
export class PurchaseStateViewAdminComponent extends AbstractViewController<PurchaseStateDto, PurchaseStateCriteria, PurchaseStateAdminService> implements OnInit {


    constructor(private purchaseStateService: PurchaseStateAdminService){
        super(purchaseStateService);
    }

    ngOnInit(): void {
    }




}
