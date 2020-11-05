import React from 'react';

import Aux from '../../hoc/Aux';

const layout = ( props ) => (
    <Aux>
        <div>React - The Complete Guide</div>
        <main>
            {props.children}
        </main>
    </Aux>
);

export default layout;