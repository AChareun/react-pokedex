import React, { useEffect, useState } from 'react'
// import PropTypes from 'prop-types'

import styles from './ItemList.module.scss';
import Item from '../Item/Item';

const apiUrl = 'https://pokeapi.co/api/v2/pokemon/';

const ItemList: React.FC = () => {
    const [dataList, setDataList] = useState<any[] | null>(null);

    const getResults = async (): Promise<void> => {
        const data = await fetch(apiUrl).then(r => r.json());
        const results: any[] = data.results;

        console.log(results);
        setDataList(results);
    }

    useEffect(() => {
        getResults();
    }, [])

    return (
        <section className={styles['Item-list']}>
            {dataList?.map((dataItem, index) => {
                const { name, url } = dataItem;
                return (
                    <Item key={index} name={name} url={url}/>
                );
            })}
        </section>
    )
}

ItemList.propTypes = {

}

export default ItemList

