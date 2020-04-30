import React, { Component } from 'react';

export default class PokemonList extends Component {
    render() {
        return (

            // pikachuData = [
            //     {
            //       pokemon:"pikachu",
            //       egg_group:"ground"
            //     },
            //       {
            //       pokemon:"yello",
            //       egg_group:"sky"
            //     }
            //   ]

            <div>
                {
                    this.props.data.map(dataItem => {
                        return <h1>{dataItem.pokemon} : {dataItem.egg_group}</h1>
                    })
                }
            </div>
        )
    }
}
