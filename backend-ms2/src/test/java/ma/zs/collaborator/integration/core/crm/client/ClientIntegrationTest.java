package ma.zs.collaborator.integration.core.crm.client;

import com.intuit.karate.junit5.Karate;

public class ClientIntegrationTest {

 @Karate.Test
    Karate saveHappyTest() {
        return Karate.run("ClientHappyTest")
                .tags("save")
                .relativeTo(getClass());
    }


}
