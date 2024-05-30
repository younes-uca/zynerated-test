package ma.zs.collaborator.unit.ws.facade.admin.crm;

import ma.zs.collaborator.bean.core.crm.ClientCategory;
import ma.zs.collaborator.service.impl.admin.crm.ClientCategoryAdminServiceImpl;
import ma.zs.collaborator.ws.converter.crm.ClientCategoryConverter;
import ma.zs.collaborator.ws.dto.crm.ClientCategoryDto;
import ma.zs.collaborator.ws.facade.admin.crm.ClientCategoryRestAdmin;
import org.aspectj.lang.annotation.Before;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import java.util.Collections;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
public class ClientCategoryRestAdmin {

    private MockMvc mockMvc;

    @Mock
    private ClientCategoryAdminServiceImpl service;
    @Mock
    private ClientCategoryConverter converter;

    @InjectMocks
    private ClientCategoryRestAdmin controller;

    @Before("")
    public void setUp() {
        MockitoAnnotations.initMocks(this);
        this.mockMvc = MockMvcBuilders.standaloneSetup(controller).build();
    }


    @Test
    public void itShouldFindAllClientCategoryTest() throws Exception {
        // Mock the service to return an empty list
        when(service.findAll()).thenReturn(Collections.emptyList());
        when(converter.toDto(Collections.emptyList())).thenReturn(Collections.emptyList());

        // Call the controller method
        ResponseEntity<List<ClientCategoryDto>> result = controller.findAll();

        // Verify the result
        assertEquals(HttpStatus.NO_CONTENT, result.getStatusCode());

        // Response body should be empty list
        List<ClientCategoryDto> responseBody = result.getBody();
        assertNotNull(responseBody);
        assertEquals(0, responseBody.size());
    }

    @Test
    public void itShouldSaveClientCategoryTest() throws Exception {
        // Mock data
        ClientCategoryDto requestDto = new ClientCategoryDto();
        ClientCategory entity = new ClientCategory();
        ClientCategory saved = new ClientCategory();
        ClientCategoryDto savedDto = new ClientCategoryDto();

        // Mock the converter to return the clientCategory object when converting from DTO
        when(converter.toItem(requestDto)).thenReturn(entity);

        // Mock the service to return the saved client
        when(service.create(entity)).thenReturn(saved);

        // Mock the converter to return the saved clientCategory DTO
        when(converter.toDto(saved)).thenReturn(savedDto);

        // Call the controller method
        ResponseEntity<ClientCategoryDto> result = controller.save(requestDto);

        // Verify the result
        assertEquals(HttpStatus.CREATED, result.getStatusCode());

        // Verify the response body
        ClientCategoryDto responseBody = result.getBody();
        assertNotNull(responseBody);

        // Add assertions to compare the response body with the saved clientCategory DTO
        assertEquals(savedDto.getReference(), responseBody.getReference());
        assertEquals(savedDto.getCode(), responseBody.getCode());
    }

}
