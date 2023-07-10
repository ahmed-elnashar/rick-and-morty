import { useParams } from 'react-router';
import { useCharacter } from '../../../hooks/useCharacter';
import MainLoader from '../../UI/MainLoader/MainLoader';
import { Box, Typography } from '@mui/material';

interface CharacterProps {}

const Character: React.FC<CharacterProps> = ({}) => {
  const { id } = useParams();

  const { charactersGetById } = useCharacter();
  const { data, error, loading } = charactersGetById(id ? id : '');

  if (loading) return <MainLoader />;

  if (error) throw error;

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        pb: 5,
      }}
    >
      <Box
        sx={(theme) => ({
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          boxShadow: 5,
          background: theme.palette.background.paper,
          borderRadius: '5px',
          pb: 3,
        })}
      >
        <img
          src={data?.image}
          alt={data?.name}
          style={{
            width: '35rem',
            borderTopRightRadius: 5,
            borderTopLeftRadius: 5,
          }}
        />
        <Box
          sx={{
            width: '35rem',
            pl: 3,
          }}
        >
          <h1>{data?.name}</h1>
          <div>
            <h2>Episodes:</h2>
            {data?.episode.map(({ id, name, episode, air_date }) => (
              <Typography
                variant="subtitle2"
                component="p"
                sx={{ pb: 1 }}
                key={id}
              >
                {name} - <b>{episode}</b> (<i>{air_date}</i>)
              </Typography>
            ))}
          </div>
        </Box>
      </Box>
    </Box>
  );
};

export default Character;

