import { Header, HeaderBrand, MainWrapper, PageContainer, ThemeWrapper, Grid, GridCol, Box, Skeleton } from '@flixbus/honeycomb-react'
import '@flixbus/honeycomb-react/dist/css/honeycomb-themes.css';

function SkeletonPage() {


    const brand = {
        alt: " ",
        src: "https://honeycomb.flixbus.com/dist/7.0.0/img/logos/svg/flixbus-white.svg",
        href: "https://global.flixbus.com",
        width: "126",
        height: "24"
      };



    return (
        <ThemeWrapper>
            <MainWrapper>
                <Header fixed={false}>
                <HeaderBrand
                    alt={brand.alt}
                    href={brand.href}
                    src={brand.src}
                    width={brand.width}
                    height={brand.height}
                    />
                </Header>
                <PageContainer>
                    <Grid justify="center">
                        <GridCol key="grid-container" size={12} sm={12} md={8}>
                            <br></br>
                            <Skeleton Elem="div" height="sm" />
                            <br></br>
                            <Skeleton Elem="div" height="lg" />
                            <Skeleton Elem="div" height="lg" />
                            <Skeleton Elem="div" height="lg" />
                            <br></br>

                            <Skeleton Elem="div" height="sm" />
                            <Skeleton Elem="div" height="md" />
                            <Box>
                                <Skeleton Elem="div" height="md" />
                                <Skeleton Elem="div" height="md" />
                                <Skeleton Elem="div" height="md" />
                                <Skeleton Elem="div" height="md" />
                                <Skeleton Elem="div" width="md" height="lg" />

                            </Box>
                            <Skeleton Elem="div" height="sm" />
                            <Skeleton Elem="div" height="sm" />
                            <Skeleton Elem="div" height="sm" width="md" />
                        </GridCol>
                    </Grid>
                </PageContainer>
                <div>
                    <img style={{ width: "100%" }} alt="" src="/images/landscape.png" />
                </div>
            </MainWrapper>
        </ThemeWrapper >
    );
}

export default SkeletonPage;
