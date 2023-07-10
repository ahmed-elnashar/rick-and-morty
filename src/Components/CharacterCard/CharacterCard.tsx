import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Badge, Box, CardActionArea } from '@mui/material';
import { Character } from '../../model/api';

interface CharacterCardProps {
  character: Character;
}

const CharacterCard: React.FC<CharacterCardProps> = ({ character }) => {
  return (
    <Card
      sx={{
        maxWidth: 300,
        border: 'none',
        marginX: '10px',
        boxShadow: 3,
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="300"
          image={character.image}
          alt={character.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="h6">
            <Badge
              color={
                character.status === 'Alive'
                  ? 'success'
                  : character.status === 'unknown'
                  ? 'warning'
                  : 'error'
              }
              badgeContent=" "
              variant="dot"
              sx={{ mr: 1.5 }}
            ></Badge>
            {character.name}
          </Typography>
          <Box sx={{ display: 'flex' }}>
            <Typography variant="body2" color="text.secondary">
              {character.status} - {character.species}
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', mt: 1 }}>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ fontWeight: 'bold', mb: 1 }}
            >
              Last Known Location:
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {character.location.name}
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', mt: 1 }}>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ fontWeight: 'bold', mb: 1 }}
            >
              First seen in:
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {character.episode[0].name}
            </Typography>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CharacterCard;

