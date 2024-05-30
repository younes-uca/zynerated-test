import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';

import {ClientCategoryDto} from './ClientCategory.model';

export class ClientDto extends BaseDto{

    public fullName: string;

    public email: string;

    public clientCategory: ClientCategoryDto ;
    

    constructor() {
        super();

        this.fullName = '';
        this.email = '';

        }

}
