import * as React from "react";
import {Fragment} from 'react';
import CatList from "../../../../organism/CatList";
import DogList from "../../../../organism/DogList";
import {PetType} from "../../index";
import './styles.css';

interface Props {
    currentSelectedPetType: PetType
}

class PetList extends React.Component<Props> {

    _renderFlexible = (currentPet: PetType) => {
        if(currentPet === PetType.CAT) {
            return <CatList/>
        } else if(currentPet === PetType.DOG) {
            return <DogList/>
        } else {
            return <Fragment/>
        }
    };

    render() {
        const {currentSelectedPetType} = this.props;
        return(
            <div className={'pet-list-wrapper'}>
                {this._renderFlexible(currentSelectedPetType)}
            </div>
        );
    }
}
export default PetList;