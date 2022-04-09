import { Grid } from '@mui/material'
import { useState } from 'react'
import { Book } from '../../entities/Book'
import rootStore from '../../stores/RootStore'
import { observer } from 'mobx-react'
import BookDescriptionGrid from './sections/BookDescriptionGrid'
import BookReviewGrid from './sections/BookReviewGrid'


const AboutBook: React.FC = () => {
    const [book, setBook] = useState<Book | undefined>(rootStore.library.chosenBook)

    return (
        <Grid
            container
            sx={{
                p: 5,
            }}
            spacing={10}

        >
            {book && <BookDescriptionGrid book={book}/>}
            <BookReviewGrid />
        </Grid>

    )

}

export default observer(AboutBook)