package ma.zs.stocky.unit.ws.facade.admin.commun;

import ma.zs.stocky.bean.core.commun.PurchaseState;
import ma.zs.stocky.service.impl.admin.commun.PurchaseStateAdminServiceImpl;
import ma.zs.stocky.ws.converter.commun.PurchaseStateConverter;
import ma.zs.stocky.ws.dto.commun.PurchaseStateDto;
import ma.zs.stocky.ws.facade.admin.commun.PurchaseStateRestAdmin;
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
public class PurchaseStateRestAdmin {

    private MockMvc mockMvc;

    @Mock
    private PurchaseStateAdminServiceImpl service;
    @Mock
    private PurchaseStateConverter converter;

    @InjectMocks
    private PurchaseStateRestAdmin controller;

    @Before("")
    public void setUp() {
        MockitoAnnotations.initMocks(this);
        this.mockMvc = MockMvcBuilders.standaloneSetup(controller).build();
    }


    @Test
    public void itShouldFindAllPurchaseStateTest() throws Exception {
        // Mock the service to return an empty list
        when(service.findAll()).thenReturn(Collections.emptyList());
        when(converter.toDto(Collections.emptyList())).thenReturn(Collections.emptyList());

        // Call the controller method
        ResponseEntity<List<PurchaseStateDto>> result = controller.findAll();

        // Verify the result
        assertEquals(HttpStatus.NO_CONTENT, result.getStatusCode());

        // Response body should be empty list
        List<PurchaseStateDto> responseBody = result.getBody();
        assertNotNull(responseBody);
        assertEquals(0, responseBody.size());
    }

    @Test
    public void itShouldSavePurchaseStateTest() throws Exception {
        // Mock data
        PurchaseStateDto requestDto = new PurchaseStateDto();
        PurchaseState entity = new PurchaseState();
        PurchaseState saved = new PurchaseState();
        PurchaseStateDto savedDto = new PurchaseStateDto();

        // Mock the converter to return the purchaseState object when converting from DTO
        when(converter.toItem(requestDto)).thenReturn(entity);

        // Mock the service to return the saved client
        when(service.create(entity)).thenReturn(saved);

        // Mock the converter to return the saved purchaseState DTO
        when(converter.toDto(saved)).thenReturn(savedDto);

        // Call the controller method
        ResponseEntity<PurchaseStateDto> result = controller.save(requestDto);

        // Verify the result
        assertEquals(HttpStatus.CREATED, result.getStatusCode());

        // Verify the response body
        PurchaseStateDto responseBody = result.getBody();
        assertNotNull(responseBody);

        // Add assertions to compare the response body with the saved purchaseState DTO
        assertEquals(savedDto.getReference(), responseBody.getReference());
        assertEquals(savedDto.getCode(), responseBody.getCode());
    }

}
