import React from 'react';
import {Card} from "@twilio-paste/card";
import {Paragraph} from "@twilio-paste/paragraph";
import {Heading} from "@twilio-paste/heading";
import {Box} from "@twilio-paste/box";
import {Button} from "@twilio-paste/button";
import useRoom from "./useRoom";

function App() {

    const connect = useRoom();

    return (
        <Box padding="space60">
            <Card padding="space120">
                <Heading as="h2">This is a card with a primary action</Heading>
                <Paragraph>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dui tellus, tristique in tincidunt
                    cursus, efficitur
                    at felis. Phasellus imperdiet, lorem et commodo egestas, arcu.
                </Paragraph>
                <Button variant="submit"> I am a primary action button </Button>
            </Card>
        </Box>
    );
}

export default App;
