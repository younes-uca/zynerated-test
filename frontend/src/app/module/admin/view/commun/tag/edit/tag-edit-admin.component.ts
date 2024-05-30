import {Component, OnInit, Input} from '@angular/core';


import {AbstractEditController} from 'src/app/zynerator/controller/AbstractEditController';

import {TagAdminService} from 'src/app/shared/service/admin/commun/TagAdmin.service';
import {TagDto} from 'src/app/shared/model/commun/Tag.model';
import {TagCriteria} from 'src/app/shared/criteria/commun/TagCriteria.model';



@Component({
  selector: 'app-tag-edit-admin',
  templateUrl: './tag-edit-admin.component.html'
})
export class TagEditAdminComponent extends AbstractEditController<TagDto, TagCriteria, TagAdminService>   implements OnInit {


    private _validTagCode = true;
    private _validTagReference = true;




    constructor( private tagService: TagAdminService ) {
        super(tagService);
    }

    ngOnInit(): void {
    }


    public override setValidation(value: boolean){
        this.validTagCode = value;
        this.validTagReference = value;
        }
    public override validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validateTagCode();
        this.validateTagReference();
    }
    public validateTagCode(){
        if (this.stringUtilService.isEmpty(this.item.code)) {
            this.errorMessages.push('Code non valide');
            this.validTagCode = false;
        } else {
            this.validTagCode = true;
        }
    }
    public validateTagReference(){
        if (this.stringUtilService.isEmpty(this.item.reference)) {
            this.errorMessages.push('Reference non valide');
            this.validTagReference = false;
        } else {
            this.validTagReference = true;
        }
    }






    get validTagCode(): boolean {
        return this._validTagCode;
    }
    set validTagCode(value: boolean) {
        this._validTagCode = value;
    }
    get validTagReference(): boolean {
        return this._validTagReference;
    }
    set validTagReference(value: boolean) {
        this._validTagReference = value;
    }

}
