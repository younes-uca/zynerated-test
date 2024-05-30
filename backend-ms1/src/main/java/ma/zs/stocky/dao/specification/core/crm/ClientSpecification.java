package  ma.zs.stocky.dao.specification.core.crm;

import ma.zs.stocky.dao.criteria.core.crm.ClientCriteria;
import ma.zs.stocky.bean.core.crm.Client;
import ma.zs.stocky.zynerator.specification.AbstractSpecification;


public class ClientSpecification extends  AbstractSpecification<ClientCriteria, Client>  {

    @Override
    public void constructPredicates() {
        addPredicateId("id", criteria);
        addPredicate("fullName", criteria.getFullName(),criteria.getFullNameLike());
        addPredicate("email", criteria.getEmail(),criteria.getEmailLike());
        addPredicateFk("clientCategory","id", criteria.getClientCategory()==null?null:criteria.getClientCategory().getId());
        addPredicateFk("clientCategory","id", criteria.getClientCategorys());
        addPredicateFk("clientCategory","code", criteria.getClientCategory()==null?null:criteria.getClientCategory().getCode());
    }

    public ClientSpecification(ClientCriteria criteria) {
        super(criteria);
    }

    public ClientSpecification(ClientCriteria criteria, boolean distinct) {
        super(criteria, distinct);
    }

}
