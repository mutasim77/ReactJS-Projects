import { useParams } from 'react-router-dom';
import SingleComic from '../singleComic/SingleComic'

const SingleComicPage = () => {
    const { comicId } = useParams();

    return (
        <SingleComic comicId={comicId} />
    )
}

export default SingleComicPage;
