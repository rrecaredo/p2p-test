import React from 'react';
import {Card} from "@twilio-paste/card";
import {Paragraph} from "@twilio-paste/paragraph";
import {Heading} from "@twilio-paste/heading";
import {Box} from "@twilio-paste/box";
import {Button} from "@twilio-paste/button";
import useRoom from "./useRoom";
import {FormHelpText, FormInput, FormLabel} from "@twilio-paste/form";

function App() {

    const connect = useRoom();

    return (
        <Box padding="space60">
            <Card padding="space120">

                <Heading as="h2">Step 1: Twilio's Credentials</Heading>

                <>
                    <FormLabel htmlFor="accound_sid" required>Account SID</FormLabel>
                    <FormInput aria-describedby="accound_sid_help" id="email_address" name="account_sid" required/>
                </>

                <>
                    <FormLabel htmlFor="access_token" required>Access Token</FormLabel>
                    <FormInput aria-describedby="access_token_help" id="access_token" name="access_token" required/>
                </>

                <Box marginTop="space60">
                    <Button variant="submit" > Next: Room Settings </Button>
                </Box>
            </Card>
        </Box>
    );
}

export default App;
