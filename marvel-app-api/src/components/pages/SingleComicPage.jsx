import { Helmet } from 'react-helmet';
import { useParams } from 'react-router-dom';
import SingleComic from '../singleComic/SingleComic'

const SingleComicPage = () => {
    const { comicId } = useParams();

    return (
        <>
            <Helmet>
                <meta name="description" content="Marvel Comic" />
                <title>Comic {comicId}</title>
            </Helmet>
            <SingleComic comicId={comicId} />
        </>
    )
}

export default SingleComicPage;
