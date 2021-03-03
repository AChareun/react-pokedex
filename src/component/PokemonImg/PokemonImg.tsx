import React, {FC, useState} from 'react';
import { IPokemon } from "../../typings/general";

import styles from './PokemonImg.module.scss';

const PokemonImg: FC<{sprites: IPokemon['sprites']}> = (props) => {
    const { sprites } = props;
    const [currentSprite, setCurrentSprite] = useState('front_default');

    function toggleDirection() {
        setCurrentSprite((prev) => {
            const spriteParams = prev.split('_');
            const direction = spriteParams[0];
            spriteParams[0] = direction === 'front' ? 'back' : 'front';

            return spriteParams.join('_');
        })
    }

    function toggleGender() {
        if (!sprites?.front_female) {
            return;
        }

        setCurrentSprite((prev) => {
            const spriteParams = prev.split('_');
            const gender = spriteParams[1];
            spriteParams[1] = gender === 'default' ? 'female' : 'default';

            return spriteParams.join('_');
        })
    }

    function toggleShiny() {
        if (!sprites?.front_shiny) {
            return
        }

        setCurrentSprite((prev) => {
            const spriteParams = prev.split('_');
            const color = spriteParams[1];

            if (spriteParams.length === 3) {
                spriteParams[1] = spriteParams.pop() || '';
                return spriteParams.join('_');
            }

            if (spriteParams[1] === 'female') {
                spriteParams[1] = 'shiny';
                spriteParams.push('female')
                return spriteParams.join('_');
            }

            spriteParams[1] = color === 'default' ? 'shiny' : 'default';

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