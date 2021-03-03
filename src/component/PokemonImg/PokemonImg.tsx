import React, {FC, useState} from 'react';
import { IPokemon } from "../../typings/general";

import styles from './PokemonImg.module.scss';

const PokemonImg: FC<{sprites: IPokemon['sprites']}> = (props) => {
    const { sprites } = props;
    const [currentSprite, setCurrentSprite] = useState('front_male_default');

    function toggleDirection() {
        setCurrentSprite((prev) => {
            const spriteParams = prev.split('_');
            const direction = spriteParams[0];
            spriteParams[0] = direction === 'front' ? 'back' : 'front';

            return spriteParams.join('_');
        })
    }

    function toggleGender() {
        if (!sprites?.front_female_default) {
            return;
        }

        setCurrentSprite((prev) => {
            const spriteParams = prev.split('_');
            const gender = spriteParams[1];
            spriteParams[1] = gender === 'male' ? 'female' : 'male';

            return spriteParams.join('_');
        })
    }

    function toggleShiny() {
        if (!sprites?.front_male_shiny) {
            return
        }

        setCurrentSprite((prev) => {
            const spriteParams = prev.split('_');
            const color = spriteParams[2];
            spriteParams[2] = color === 'default' ? 'shiny' : 'default';

            return spriteParams.join('_');
        })
    }

    return (
        <React.Fragment>
            {sprites && <img className={styles['img']} src={sprites[currentSprite] || ''} alt={''}/>}
            <div>
                <button onClick={toggleDirection}>Rotate</button>
                <button onClick={toggleGender}>Gender</button>
                <button onClick={toggleShiny}>Shiny</button>
            </div>
        </React.Fragment>
    );
}

export default PokemonImg;