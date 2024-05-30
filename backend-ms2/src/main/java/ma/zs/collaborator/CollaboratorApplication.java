package ma.zs.collaborator;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.SerializationFeature;
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ConfigurableApplicationContext;
import org.springframework.context.annotation.Bean;
import org.springframework.web.client.RestTemplate;

import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.cloud.openfeign.EnableFeignClients;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import ma.zs.collaborator.zynerator.security.bean.*;
import ma.zs.collaborator.zynerator.security.common.AuthoritiesConstants;
import ma.zs.collaborator.zynerator.security.service.facade.*;

import ma.zs.collaborator.bean.core.crm.Client;
import ma.zs.collaborator.service.facade.admin.crm.ClientAdminService;
import ma.zs.collaborator.bean.core.catalog.Product;
import ma.zs.collaborator.service.facade.admin.catalog.ProductAdminService;
import ma.zs.collaborator.bean.core.crm.ClientCategory;
import ma.zs.collaborator.service.facade.admin.crm.ClientCategoryAdminService;

import ma.zs.collaborator.zynerator.security.bean.User;
import ma.zs.collaborator.zynerator.security.bean.Role;

@SpringBootApplication
//@EnableFeignClients
public class CollaboratorApplication {
    public static ConfigurableApplicationContext ctx;

    public static void main(String[] args) {
        ctx=SpringApplication.run(CollaboratorApplication.class, args);
    }


    @Bean
    RestTemplate restTemplate() {
        return new RestTemplate();
    }
    @Bean
    ObjectMapper objectMapper(){
        ObjectMapper objectMapper = new ObjectMapper();
        objectMapper.disable(SerializationFeature.FAIL_ON_EMPTY_BEANS);
        objectMapper.registerModule(new JavaTimeModule());
        return objectMapper;
    }

    public static ConfigurableApplicationContext getCtx() {
        return ctx;
    }

    @Bean
    public CommandLineRunner demo(UserService userService, RoleService roleService, ModelPermissionService modelPermissionService, ActionPermissionService actionPermissionService, ModelPermissionUserService modelPermissionUserService) {
    return (args) -> {
        if(true){

            createClient();
            createProduct();
            createClientCategory();
        
		// ModelPermissions For admin
		List<ModelPermission> modelPermissions = new ArrayList<>();
		addPermissionForAdmin(modelPermissions);
		modelPermissions.forEach(e -> modelPermissionService.create(e));
		// ActionPermissions For admin
		List<ActionPermission> actionPermissions = new ArrayList<>();
		addActionPermissionForAdmin(actionPermissions);
		actionPermissions.forEach(e -> actionPermissionService.create(e));
				
        
		// User admin
		User userForAdmin = new User("admin");
		userForAdmin.setPassword("123");
		// Role admin
		Role roleForAdmin = new Role();
		roleForAdmin.setAuthority(AuthoritiesConstants.ADMIN);
		roleForAdmin.setCreatedAt(LocalDateTime.now());
		roleService.create(roleForAdmin);
		RoleUser roleUser = new RoleUser();
		roleUser.setRole(roleForAdmin);
		if (userForAdmin.getRoleUsers() == null)
			userForAdmin.setRoleUsers(new ArrayList<>());

		userForAdmin.getRoleUsers().add(roleUser);
		if (userForAdmin.getModelPermissionUsers() == null)
			userForAdmin.setModelPermissionUsers(new ArrayList<>());


        userForAdmin.setModelPermissionUsers(modelPermissionUserService.initModelPermissionUser());

        userService.create(userForAdmin);

            }
        };
    }



    private void createClient(){
        String fullName = "fullName";
        String email = "email";
        for (int i = 1; i < 100; i++) {
            Client item = new Client();
            item.setFullName(fakeString(fullName, i));
            item.setEmail(fakeString(email, i));
            clientService.create(item);
        }
    }
    private void createProduct(){
        String code = "code";
        String reference = "reference";
        for (int i = 1; i < 100; i++) {
            Product item = new Product();
            item.setCode(fakeString(code, i));
            item.setReference(fakeString(reference, i));
            productService.create(item);
        }
    }
    private void createClientCategory(){
        String reference = "reference";
        String code = "code";
        for (int i = 1; i < 100; i++) {
            ClientCategory item = new ClientCategory();
            item.setReference(fakeString(reference, i));
            item.setCode(fakeString(code, i));
            clientCategoryService.create(item);
        }
    }

    private static String fakeString(String attributeName, int i) {
        return attributeName + i;
    }

    private static Long fakeLong(String attributeName, int i) {
        return  10L * i;
    }
    private static Integer fakeInteger(String attributeName, int i) {
        return  10 * i;
    }

    private static Double fakeDouble(String attributeName, int i) {
        return 10D * i;
    }

    private static BigDecimal fakeBigDecimal(String attributeName, int i) {
        return  BigDecimal.valueOf(i*1L*10);
    }

    private static Boolean fakeBoolean(String attributeName, int i) {
        return i % 2 == 0 ? true : false;
    }
    private static LocalDateTime fakeLocalDateTime(String attributeName, int i) {
        return LocalDateTime.now().plusDays(i);
    }


    private static void addPermissionForAdmin(List<ModelPermission> modelPermissions) {
        modelPermissions.add(new ModelPermission("Client"));
        modelPermissions.add(new ModelPermission("Product"));
        modelPermissions.add(new ModelPermission("ClientCategory"));
        modelPermissions.add(new ModelPermission("User"));
        modelPermissions.add(new ModelPermission("ModelPermission"));
        modelPermissions.add(new ModelPermission("ActionPermission"));
    }

    private static void addActionPermissionForAdmin(List<ActionPermission> actionPermissions) {
        actionPermissions.add(new ActionPermission("list"));
        actionPermissions.add(new ActionPermission("create"));
        actionPermissions.add(new ActionPermission("delete"));
        actionPermissions.add(new ActionPermission("edit"));
        actionPermissions.add(new ActionPermission("view"));
        actionPermissions.add(new ActionPermission("duplicate"));
    }


    @Autowired
    ClientAdminService clientService;
    @Autowired
    ProductAdminService productService;
    @Autowired
    ClientCategoryAdminService clientCategoryService;
}


