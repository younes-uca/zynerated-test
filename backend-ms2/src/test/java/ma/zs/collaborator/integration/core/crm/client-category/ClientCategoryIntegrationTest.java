package ma.zs.collaborator.integration.core.crm.client-category;

import com.intuit.karate.junit5.Karate;

public class ClientCategoryIntegrationTest {

 @Karate.Test
    Karate saveHappyTest() {
        return Karate.run("ClientCategoryHappyTest")
                .tags("save")
                .relativeTo(getClass());
    }


}
