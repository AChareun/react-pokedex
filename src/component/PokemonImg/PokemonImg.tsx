import React, {FC} from 'react';
import { IPokemon } from "../../typings/general";

import styles from './PokemonImg.module.scss';

const PokemonImg: FC<{sprites: IPokemon['sprites']}> = (props) => {
    const { sprites } = props;
    return (
        <React.Fragment>
            {sprites?.front_default && <img className={styles['img']} src={sprites.front_default}/>}
        </React.Fragment>
    );
}

export default PokemonImg;