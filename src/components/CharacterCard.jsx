import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import { Button, CardActions, Typography } from '@mui/material';

const CharacterCard = ({ character }) => {
    return (
        <Card key={character.id} sx={{ maxWidth: 345 }}>
            <CardMedia
                sx={{ height: 250 }}
                image={`${character?.thumbnail.path}.${character?.thumbnail.extension}`}
                title={character?.name}
            />
            <CardContent>
                <h2 variant="h2" component="div">
                {character?.name}
                </h2>
            </CardContent>
        </Card>
    )
}

export default CharacterCard