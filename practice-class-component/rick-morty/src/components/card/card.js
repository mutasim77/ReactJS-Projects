import './card.scss';
import RickMortyService from '../../services/RickMortyService';
import { Component } from 'react';
import { Button } from 'react-bootstrap';


class Card extends Component {
    state = {
        data: [],
        page: 1,
        loading: true,
        error: false
    }

    rickMortyService = new RickMortyService();
    componentDidMount() {
        this.onLoading();
    }

    onLoading = (page) => {
        this.rickMortyService.getAllCharacters(page)
            .then(this.onCharListLoaded)
    }

    onCharListLoaded = (newCharList) => {
        this.setState(({ page, data }) => ({
            data: [...data, ...newCharList],
            page: page + 1
        }))
    }

    render() {
        let { data, page } = this.state;
        const element = data.map((item, inx) => {
            const { name, status, image } = item;

            const chechStatus = status === 'Alive' ? 'green' : status === 'Dead' ? 'red' : 'black';
            return (
                <div className='card' key={inx}>
                    <h1>{name}</h1>
                    <p><i className={`fa-solid fa-circle ${chechStatus}`}></i> Status: {status}</p>
                    <img src={image} alt={name} />
                </div>
            );
        });

        return (
            <>
                <div className='cards'>
                    {element}
                </div>
                <Button
                    className='mt-5 d-flex m-auto btn mb-5'
                    onClick={() => this.onLoading(page)}>
                    Click</Button>
            </>
        );
    }
}

export default Card;