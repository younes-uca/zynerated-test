package ma.zs.collaborator.unit.ws.facade.admin.crm;

import ma.zs.collaborator.bean.core.crm.Client;
import ma.zs.collaborator.service.impl.admin.crm.ClientAdminServiceImpl;
import ma.zs.collaborator.ws.converter.crm.ClientConverter;
import ma.zs.collaborator.ws.dto.crm.ClientDto;
import ma.zs.collaborator.ws.facade.admin.crm.ClientRestAdmin;
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
public class ClientRestAdmin {

    private MockMvc mockMvc;

    @Mock
    private ClientAdminServiceImpl service;
    @Mock
    private ClientConverter converter;

    @InjectMocks
    private ClientRestAdmin controller;

    @Before("")
    public void setUp() {
        MockitoAnnotations.initMocks(this);
        this.mockMvc = MockMvcBuilders.standaloneSetup(controller).build();
    }


    @Test
    public void itShouldFindAllClientTest() throws Exception {
        // Mock the service to return an empty list
        when(service.findAll()).thenReturn(Collections.emptyList());
        when(converter.toDto(Collections.emptyList())).thenReturn(Collections.emptyList());

        // Call the controller method
        ResponseEntity<List<ClientDto>> result = controller.findAll();

        // Verify the result
        assertEquals(HttpStatus.NO_CONTENT, result.getStatusCode());

        // Response body should be empty list
        List<ClientDto> responseBody = result.getBody();
        assertNotNull(responseBody);
        assertEquals(0, responseBody.size());
    }

    @Test
    public void itShouldSaveClientTest() throws Exception {
        // Mock data
        ClientDto requestDto = new ClientDto();
        Client entity = new Client();
        Client saved = new Client();
        ClientDto savedDto = new ClientDto();

        // Mock the converter to return the client object when converting from DTO
        when(converter.toItem(requestDto)).thenReturn(entity);

        // Mock the service to return the saved client
        when(service.create(entity)).thenReturn(saved);

        // Mock the converter to return the saved client DTO
        when(converter.toDto(saved)).thenReturn(savedDto);

        // Call the controller method
        ResponseEntity<ClientDto> result = controller.save(requestDto);

        // Verify the result
        assertEquals(HttpStatus.CREATED, result.getStatusCode());

        // Verify the response body
        ClientDto responseBody = result.getBody();
        assertNotNull(responseBody);

        // Add assertions to compare the response body with the saved client DTO
        assertEquals(savedDto.getFullName(), responseBody.getFullName());
        assertEquals(savedDto.getEmail(), responseBody.getEmail());
    }

}
