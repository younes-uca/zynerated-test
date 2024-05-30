import {Component, OnInit, Input} from '@angular/core';


import {AbstractEditController} from 'src/app/zynerator/controller/AbstractEditController';

import {PurchaseStateAdminService} from 'src/app/shared/service/admin/commun/PurchaseStateAdmin.service';
import {PurchaseStateDto} from 'src/app/shared/model/commun/PurchaseState.model';
import {PurchaseStateCriteria} from 'src/app/shared/criteria/commun/PurchaseStateCriteria.model';



@Component({
  selector: 'app-purchase-state-edit-admin',
  templateUrl: './purchase-state-edit-admin.component.html'
})
export class PurchaseStateEditAdminComponent extends AbstractEditController<PurchaseStateDto, PurchaseStateCriteria, PurchaseStateAdminService>   implements OnInit {


    private _validPurchaseStateReference = true;
    private _validPurchaseStateCode = true;




    constructor( private purchaseStateService: PurchaseStateAdminService ) {
        super(purchaseStateService);
    }

    ngOnInit(): void {
    }


    public override setValidation(value: boolean){
        this.validPurchaseStateReference = value;
        this.validPurchaseStateCode = value;
        }
    public override validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validatePurchaseStateReference();
        this.validatePurchaseStateCode();
    }
    public validatePurchaseStateReference(){
        if (this.stringUtilService.isEmpty(this.item.reference)) {
            this.errorMessages.push('Reference non valide');
            this.validPurchaseStateReference = false;
        } else {
            this.validPurchaseStateReference = true;
        }
    }
    public validatePurchaseStateCode(){
        if (this.stringUtilService.isEmpty(this.item.code)) {
            this.errorMessages.push('Code non valide');
            this.validPurchaseStateCode = false;
        } else {
            this.validPurchaseStateCode = true;
        }
    }






    get validPurchaseStateReference(): boolean {
        return this._validPurchaseStateReference;
    }
    set validPurchaseStateReference(value: boolean) {
        this._validPurchaseStateReference = value;
    }
    get validPurchaseStateCode(): boolean {
        return this._validPurchaseStateCode;
    }
    set validPurchaseStateCode(value: boolean) {
        this._validPurchaseStateCode = value;
    }

}
