package ma.zs.collaborator.service.impl.admin.crm;


import ma.zs.collaborator.bean.core.crm.ClientCategory;
import ma.zs.collaborator.dao.criteria.core.crm.ClientCategoryCriteria;
import ma.zs.collaborator.dao.facade.core.crm.ClientCategoryDao;
import ma.zs.collaborator.dao.specification.core.crm.ClientCategorySpecification;
import ma.zs.collaborator.service.facade.admin.crm.ClientCategoryAdminService;
import ma.zs.collaborator.zynerator.service.AbstractServiceImpl;
import ma.zs.collaborator.zynerator.util.ListUtil;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.ArrayList;





import org.springframework.beans.factory.annotation.Autowired;


import java.util.List;
@Service
public class ClientCategoryAdminServiceImpl extends AbstractServiceImpl<ClientCategory, ClientCategoryCriteria, ClientCategoryDao> implements ClientCategoryAdminService {






    public ClientCategory findByReferenceEntity(ClientCategory t){
        return  dao.findByCode(t.getCode());
    }


    public List<ClientCategory> findAllOptimized() {
        return dao.findAllOptimized();
    }





    public void configure() {
        super.configure(ClientCategory.class, ClientCategorySpecification.class);
    }



    public ClientCategoryAdminServiceImpl(ClientCategoryDao dao) {
        super(dao);
    }

}
