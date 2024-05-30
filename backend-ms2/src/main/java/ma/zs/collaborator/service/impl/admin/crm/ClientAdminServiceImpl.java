package ma.zs.collaborator.service.impl.admin.crm;


import ma.zs.collaborator.bean.core.crm.Client;
import ma.zs.collaborator.dao.criteria.core.crm.ClientCriteria;
import ma.zs.collaborator.dao.facade.core.crm.ClientDao;
import ma.zs.collaborator.dao.specification.core.crm.ClientSpecification;
import ma.zs.collaborator.service.facade.admin.crm.ClientAdminService;
import ma.zs.collaborator.zynerator.service.AbstractServiceImpl;
import ma.zs.collaborator.zynerator.util.ListUtil;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.ArrayList;




import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.CachePut;
import org.springframework.cache.annotation.Cacheable;

import org.springframework.beans.factory.annotation.Autowired;

import ma.zs.collaborator.service.facade.admin.crm.ClientCategoryAdminService ;
import ma.zs.collaborator.bean.core.crm.ClientCategory ;

import java.util.List;
@Service
public class ClientAdminServiceImpl extends AbstractServiceImpl<Client, ClientCriteria, ClientDao> implements ClientAdminService {






    @Cacheable(cacheNames = "clients")
    public List<Client> findAll() {
        return super.findAll();
    }

    @CachePut(cacheNames = "clients", key = "#t.id")
    public Client update(Client t) {
        return super.update(t);
    }

    @Cacheable(cacheNames = "clients", key = "#id")
    public Client findById(Long id) {
        return super.findById(id);
    }

    @CacheEvict(cacheNames = "clients", key = "#id")
    public boolean deleteById(Long id) {
        boolean result = false;
        if(findById(id) != null){
            super.deleteById(id);
            result = true;
        }
        return result;
    }

    @CachePut(cacheNames = "clients", key = "#result.id")
    public Client create(Client t) {
        return super.create(t);
    }

    public Client findByReferenceEntity(Client t){
        return  dao.findByEmail(t.getEmail());
    }
    public void findOrSaveAssociatedObject(Client t){
        if( t != null) {
            t.setClientCategory(clientCategoryService.findOrSave(t.getClientCategory()));
        }
    }

    public List<Client> findByClientCategoryId(Long id){
        return dao.findByClientCategoryId(id);
    }
    public int deleteByClientCategoryId(Long id){
        return dao.deleteByClientCategoryId(id);
    }
    public long countByClientCategoryCode(String code){
        return dao.countByClientCategoryCode(code);
    }

    public List<Client> findAllOptimized() {
        return dao.findAllOptimized();
    }





    public void configure() {
        super.configure(Client.class, ClientSpecification.class);
    }


    @Autowired
    private ClientCategoryAdminService clientCategoryService ;

    public ClientAdminServiceImpl(ClientDao dao) {
        super(dao);
    }

}
