package ma.zs.collaborator.zynerator.security.service.facade;

import ma.zs.collaborator.zynerator.security.bean.Role;
import ma.zs.collaborator.zynerator.security.dao.criteria.core.RoleCriteria;
import ma.zs.collaborator.zynerator.service.IService;



public interface RoleService extends  IService<Role,RoleCriteria>  {
    Role findByAuthority(String authority);
    int deleteByAuthority(String authority);


    



}
