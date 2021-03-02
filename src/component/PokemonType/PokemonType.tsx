import React, {FC} from 'react';

import styles from './PokemonType.module.scss';

const PokemonType: FC<{name: string}> = (props) => {
    const { name } = props;
    return (
        <React.Fragment>
            <span className={`${styles['type']} ${styles[name]}`}>
                {name}
            </span>
        </React.Fragment>
    );
}

export default PokemonType;