import {Component, OnInit, Input} from '@angular/core';


import {AbstractEditController} from 'src/app/zynerator/controller/AbstractEditController';

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
  selector: 'app-purchase-edit-admin',
  templateUrl: './purchase-edit-admin.component.html'
})
export class PurchaseEditAdminComponent extends AbstractEditController<PurchaseDto, PurchaseCriteria, PurchaseAdminService>   implements OnInit {

    private _purchaseItemsElement = new PurchaseItemDto();
    private _purchaseTagsElement = new PurchaseTagDto();

    private _validPurchaseReference = true;

    private _validClientFullName = true;
    private _validClientEmail = true;
    private _validPurchaseStateReference = true;
    private _validPurchaseStateCode = true;
    private _validPurchaseItemsProduct = true;
    private _validPurchaseItemsPrice = true;
    private _validPurchaseItemsQuantity = true;


    private _purchaseTags: Array<PurchaseTagDto> = [];

    constructor( private purchaseService: PurchaseAdminService , private purchaseTagService: PurchaseTagAdminService, private purchaseStateService: PurchaseStateAdminService, private productService: ProductAdminService, private tagService: TagAdminService, private purchaseItemService: PurchaseItemAdminService, private clientService: ClientAdminService) {
        super(purchaseService);
    }

    ngOnInit(): void {
        this.purchaseItemsElement.product = new ProductDto();
        this.productService.findAll().subscribe((data) => this.products = data);

        this.tagService.findAll().subscribe(data => this.preparePurchaseTags(data));
        this.purchaseTagsElement.tag = new TagDto();
        this.tagService.findAll().subscribe((data) => this.tags = data);

        this.client = new ClientDto();
        this.clientService.findAll().subscribe((data) => this.clients = data);
        this.purchaseState = new PurchaseStateDto();
        this.purchaseStateService.findAll().subscribe((data) => this.purchaseStates = data);
    }
    public override prepareEdit() {
        this.item.purchaseDate = this.purchaseService.format(this.item.purchaseDate);
    }



    preparePurchaseTags(tags: Array<TagDto>): void{
        if( tags != null){
            tags.forEach(e => {
                const purchaseTag = new PurchaseTagDto();
                purchaseTag.tag = e;
                this.purchaseTags.push(purchaseTag);
            });
        }
    }
    public validatePurchaseItems(){
        this.errorMessages = new Array();
        this.validatePurchaseItemsProduct();
        this.validatePurchaseItemsPrice();
        this.validatePurchaseItemsQuantity();
    }
    public override setValidation(value: boolean){
        this.validPurchaseReference = value;
        this.validPurchaseItemsProduct = value;
        this.validPurchaseItemsPrice = value;
        this.validPurchaseItemsQuantity = value;
        }
   public addPurchaseItems() {
        if( this.item.purchaseItems == null )
            this.item.purchaseItems = new Array<PurchaseItemDto>();
       this.validatePurchaseItems();
       if (this.errorMessages.length === 0) {
            if(this.purchaseItemsElement.id == null){
                this.item.purchaseItems.push(this.purchaseItemsElement);
            }else{
                const index = this.item.purchaseItems.findIndex(e => e.id == this.purchaseItemsElement.id);
                this.item.purchaseItems[index] = this.purchaseItemsElement;
            }
          this.purchaseItemsElement = new PurchaseItemDto();
       }else{
            this.messageService.add({severity: 'error',summary: 'Erreurs', detail: 'Merci de corrigé les erreurs suivant : ' + this.errorMessages});
        }
   }

    public deletePurchaseItems(p: PurchaseItemDto) {
        this.item.purchaseItems.forEach((element, index) => {
            if (element === p) { this.item.purchaseItems.splice(index, 1); }
        });
    }

    public editPurchaseItems(p: PurchaseItemDto) {
        this.purchaseItemsElement = {... p};
        this.activeTab = 0;
    }
    public override validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validatePurchaseReference();
    }
    public validatePurchaseReference(){
        if (this.stringUtilService.isEmpty(this.item.reference)) {
            this.errorMessages.push('Reference non valide');
            this.validPurchaseReference = false;
        } else {
            this.validPurchaseReference = true;
        }
    }


    private validatePurchaseItemsProduct(){
        if (this.purchaseItemsElement.product == null) {
        this.errorMessages.push('Product de la purchaseItem est  invalide');
            this.validPurchaseItemsProduct = false;
        } else {
            this.validPurchaseItemsProduct = true;
        }
    }
    private validatePurchaseItemsPrice(){
        if (this.purchaseItemsElement.price == null) {
        this.errorMessages.push('Price de la purchaseItem est  invalide');
            this.validPurchaseItemsPrice = false;
        } else {
            this.validPurchaseItemsPrice = true;
        }
    }
    private validatePurchaseItemsQuantity(){
        if (this.purchaseItemsElement.quantity == null) {
        this.errorMessages.push('Quantity de la purchaseItem est  invalide');
            this.validPurchaseItemsQuantity = false;
        } else {
            this.validPurchaseItemsQuantity = true;
        }
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
   get createProductDialog(): boolean {
       return this.productService.createDialog;
   }
  set createProductDialog(value: boolean) {
       this.productService.createDialog= value;
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
   get createClientDialog(): boolean {
       return this.clientService.createDialog;
   }
  set createClientDialog(value: boolean) {
       this.clientService.createDialog= value;
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
   get createTagDialog(): boolean {
       return this.tagService.createDialog;
   }
  set createTagDialog(value: boolean) {
       this.tagService.createDialog= value;
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
   get createPurchaseStateDialog(): boolean {
       return this.purchaseStateService.createDialog;
   }
  set createPurchaseStateDialog(value: boolean) {
       this.purchaseStateService.createDialog= value;
   }

    get purchaseTags(): Array<PurchaseTagDto> {
        if( this._purchaseTags == null )
            this._purchaseTags = new Array();
         return this._purchaseTags;
    }

    set purchaseTags(value: Array<PurchaseTagDto>) {
        this._purchaseTags = value;
    }
    get purchaseItemsElement(): PurchaseItemDto {
        if( this._purchaseItemsElement == null )
            this._purchaseItemsElement = new PurchaseItemDto();
         return this._purchaseItemsElement;
    }

    set purchaseItemsElement(value: PurchaseItemDto) {
        this._purchaseItemsElement = value;
    }
    get purchaseTagsElement(): PurchaseTagDto {
        if( this._purchaseTagsElement == null )
            this._purchaseTagsElement = new PurchaseTagDto();
         return this._purchaseTagsElement;
    }

    set purchaseTagsElement(value: PurchaseTagDto) {
        this._purchaseTagsElement = value;
    }

    get validPurchaseReference(): boolean {
        return this._validPurchaseReference;
    }
    set validPurchaseReference(value: boolean) {
        this._validPurchaseReference = value;
    }

    get validClientFullName(): boolean {
        return this._validClientFullName;
    }
    set validClientFullName(value: boolean) {
        this._validClientFullName = value;
    }
    get validClientEmail(): boolean {
        return this._validClientEmail;
    }
    set validClientEmail(value: boolean) {
        this._validClientEmail = value;
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
    get validPurchaseItemsProduct(): boolean {
        return this._validPurchaseItemsProduct;
    }
    set validPurchaseItemsProduct(value: boolean) {
        this._validPurchaseItemsProduct = value;
    }
    get validPurchaseItemsPrice(): boolean {
        return this._validPurchaseItemsPrice;
    }
    set validPurchaseItemsPrice(value: boolean) {
        this._validPurchaseItemsPrice = value;
    }
    get validPurchaseItemsQuantity(): boolean {
        return this._validPurchaseItemsQuantity;
    }
    set validPurchaseItemsQuantity(value: boolean) {
        this._validPurchaseItemsQuantity = value;
    }
}
