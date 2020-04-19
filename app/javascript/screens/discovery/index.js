import React, { Fragment } from 'react';
import SectionWrapper from '../../components/common/section_wrapper';
import Discovery from '../../components/discovery';
import NavBarFooter from '../../components/common/navbar_footer';

const DiscoveryScreen = () => {
    return(
        <Fragment>
            <SectionWrapper>
                <Discovery />
            </SectionWrapper>
            <NavBarFooter />
        </Fragment>
    )
}

export default DiscoveryScreen;