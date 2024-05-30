import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';

import {PurchaseTagDto} from './PurchaseTag.model';
import {PurchaseStateDto} from '../commun/PurchaseState.model';
import {PurchaseDto} from './Purchase.model';
import {TagDto} from '../commun/Tag.model';
import {PurchaseItemDto} from './PurchaseItem.model';
import {ClientDto} from '../crm/Client.model';

export class PurchaseDto extends BaseDto{

    public reference: string;

   public purchaseDate: Date;

    public image: string;

    public total: null | number;

    public description: string;

    public client: ClientDto ;
    public purchaseState: PurchaseStateDto ;
     public purchaseItems: Array<PurchaseItemDto>;
     public purchaseTags: Array<PurchaseTagDto>;
    

    constructor() {
        super();

        this.reference = '';
        this.purchaseDate = null;
        this.image = '';
        this.total = null;
        this.description = '';
        this.client = new ClientDto() ;
        this.purchaseState = new PurchaseStateDto() ;
        this.purchaseItems = new Array<PurchaseItemDto>();
        this.purchaseTags = new Array<PurchaseTagDto>();

        }

}
