import { PageContainer, Grid } from "@flixbus/honeycomb-react";

export default function Footer() {
    const content = {
        title: 'General infos',
        first: true,
        children: [{
            text: 'Subitem 1',
            href: 'https://www.example.org',
        },
        {
            text: 'Subitem ReactLink',
            href: '/',
        },
        {
            text: 'Subitem 2',
            href: 'https://www.example.org',
        },
        {
            text: 'Subitem 3',
            href: 'https://www.example.org',
        }]
    };
    return (
        <PageContainer>
            <Grid justify="center">
                {/* <GridCol size={12} sm={3}>
                    <FooterNav aria-label="Brief label for the menu" content={content} />
                </GridCol>
                <GridCol size={12} sm={3}>
                    <FooterNav aria-label="Brief label for the menu" content={content} />
                </GridCol>
                <GridCol size={12} sm={3}>
                    <FooterNav aria-label="Brief label for the menu" content={content} />
                </GridCol>
                <GridCol size={12} sm={3}>
                    <FooterNav aria-label="Brief label for the menu" content={content} />
                </GridCol> */}
            </Grid>
        </PageContainer>)
}
