import {Component, OnInit} from '@angular/core';


import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import { environment } from 'src/environments/environment';

import {PurchaseAdminService} from 'src/app/shared/service/admin/money/PurchaseAdmin.service';
import {PurchaseDto} from 'src/app/shared/model/money/Purchase.model';
import {PurchaseCriteria} from 'src/app/shared/criteria/money/PurchaseCriteria.model';

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
  selector: 'app-purchase-view-admin',
  templateUrl: './purchase-view-admin.component.html'
})
export class PurchaseViewAdminComponent extends AbstractViewController<PurchaseDto, PurchaseCriteria, PurchaseAdminService> implements OnInit {

    purchaseItems = new PurchaseItemDto();
    purchaseItemss: Array<PurchaseItemDto> = [];
    purchaseTags = new PurchaseTagDto();
    purchaseTagss: Array<PurchaseTagDto> = [];

    constructor(private purchaseService: PurchaseAdminService, private purchaseTagService: PurchaseTagAdminService, private purchaseStateService: PurchaseStateAdminService, private productService: ProductAdminService, private tagService: TagAdminService, private purchaseItemService: PurchaseItemAdminService, private clientService: ClientAdminService){
        super(purchaseService);
    }

    ngOnInit(): void {
    }


    get product(): ProductDto {
       return this.productService.item;
    }
    set product(value: ProductDto) {
        this.productService.item = value;
    }
    get products(): Array<ProductDto> {
       return this.productService.items;
    }
    set products(value: Array<ProductDto>) {
        this.productService.items = value;
    }
    get client(): ClientDto {
       return this.clientService.item;
    }
    set client(value: ClientDto) {
        this.clientService.item = value;
    }
    get clients(): Array<ClientDto> {
       return this.clientService.items;
    }
    set clients(value: Array<ClientDto>) {
        this.clientService.items = value;
    }
    get tag(): TagDto {
       return this.tagService.item;
    }
    set tag(value: TagDto) {
        this.tagService.item = value;
    }
    get tags(): Array<TagDto> {
       return this.tagService.items;
    }
    set tags(value: Array<TagDto>) {
        this.tagService.items = value;
    }
    get purchaseState(): PurchaseStateDto {
       return this.purchaseStateService.item;
    }
    set purchaseState(value: PurchaseStateDto) {
        this.purchaseStateService.item = value;
    }
    get purchaseStates(): Array<PurchaseStateDto> {
       return this.purchaseStateService.items;
    }
    set purchaseStates(value: Array<PurchaseStateDto>) {
        this.purchaseStateService.items = value;
    }


}
