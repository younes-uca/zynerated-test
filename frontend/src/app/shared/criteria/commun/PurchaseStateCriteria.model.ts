import {BaseCriteria} from 'src/app/zynerator/criteria/BaseCriteria.model';

export class PurchaseStateCriteria  extends BaseCriteria  {

    public id: number;
    public reference: string;
    public referenceLike: string;
    public code: string;
    public codeLike: string;

}
