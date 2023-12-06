import { Heading, Button, PageContainer, Text, Grid, GridCol } from '@flixbus/honeycomb-react'
import {
    Icon,
    IconMask,
    IconLeaf,
    IconStar,
  } from "@flixbus/honeycomb-icons-react";
export default function InfoSection() {


    return (
        <div style={{ backgroundColor: "#e5f9c0", borderTop: "1px solid #c8c8c8", borderBottom: "1px solid #c8c8c8", padding: "20px 0px" }}>
            <PageContainer>
                <Grid justify="center">
                    <GridCol key="grid-container" size={12} sm={12} md={8}>
                        <img style={{ maxWidth: "100%" }} alt="" src='/images/bus_and_train.png' />
                    </GridCol>
                    <GridCol key="grid-container" size={12} sm={12} md={4}>
                        <div style={{ height: "600px" }}>
                            <Grid justify="center">
                                <Grid justify="center">
                                    <Heading size={1}>Why FlixBus?</Heading>
                                </Grid>
                                <Grid justify="center">
                                    <Icon InlineIcon={IconMask} style={{ fill: 'green' }}/>
                                </Grid>
                                <Grid justify="center">
                                    <Text style={{ textAlign: "center" }} Elem="div">
                                        <b>Our Safety Measures</b>
                                        <br />
                                        <p>To make traveling safe and comfortable, we ensure high hygiene standards.</p>
                                    </Text>
                                </Grid>
                                <Grid justify="center">
                                    <Icon InlineIcon={IconStar} style={{ fill: 'green' }}/>
                                </Grid>
                                <Grid justify="center">
                                    <Text style={{ textAlign: "center" }} Elem="div">
                                        <b>Satisfied Customers</b>
                                        <br />
                                        <p>We've transported 100+ million happy customers worldwide. US customers give us an amazing 4.5 stars.</p>
                                    </Text>
                                </Grid>
                                <Grid justify="center">
                                    <Icon InlineIcon={IconLeaf} style={{ fill: 'green' }}/>
                                </Grid>
                                <Grid justify="center">
                                    <Text style={{ textAlign: "center" }} Elem="div">
                                        <b>The Green Choice</b>
                                        <br />
                                        <p>FlixBus is one of the most eco-friendly ways to travel. Learn more about our sustainability initiatives and carbon offset programs.
                                        </p>
                                    </Text>
                                </Grid>
                                <Grid justify="center">
                                    <Button appearance="primary" > Discount </Button>
                                </Grid>
                            </Grid>
                        </div>
                    </GridCol>
                </Grid>
            </PageContainer>
        </div>
    );
}
