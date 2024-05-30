import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';

import {PurchaseDto} from './Purchase.model';
import {TagDto} from '../commun/Tag.model';

export class PurchaseTagDto extends BaseDto{

    public purchase: PurchaseDto ;
    public tag: TagDto ;
    

    constructor() {
        super();

        this.tag = new TagDto() ;

        }

}
