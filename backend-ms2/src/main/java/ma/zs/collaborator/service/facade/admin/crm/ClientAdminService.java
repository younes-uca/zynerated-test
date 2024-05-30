package ma.zs.collaborator.service.facade.admin.crm;

import java.util.List;
import ma.zs.collaborator.bean.core.crm.Client;
import ma.zs.collaborator.dao.criteria.core.crm.ClientCriteria;
import ma.zs.collaborator.zynerator.service.IService;



public interface ClientAdminService extends  IService<Client,ClientCriteria>  {

    List<Client> findByClientCategoryId(Long id);
    int deleteByClientCategoryId(Long id);
    long countByClientCategoryCode(String code);




}
