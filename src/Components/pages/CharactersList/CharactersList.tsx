import { Link } from 'react-router-dom';
import { useCharacter } from '../../../hooks/useCharacter';
import CharacterCard from '../../CharacterCard/CharacterCard';
import { Box, Button, TextField, Typography } from '@mui/material';
import MainLoader from '../../UI/MainLoader/MainLoader';
import { Suspense } from 'react';

const CharactersList: React.FC = ({}) => {
  const {
    charactersSearchText,
    charactersSetSearchText,
    charactersSearchByName,
  } = useCharacter();

  const { data, loading, error, fetchMore, called } = charactersSearchByName();
  console.log(data);
  if (error) throw error;

  const loadMoreCharacters = () => {
    const nextPage = data?.info.next;
    fetchMore({
      variables: { page: nextPage, name: charactersSearchText },
      updateQuery: (prevResult: any, moreResults: any) => {
        moreResults['fetchMoreResult']['characters']['results'] = [
          ...moreResults['fetchMoreResult']['characters']['results'],
          ...prevResult['characters']['results'],
        ];

        return moreResults['fetchMoreResult'];
      },
    });
  };

  const isNextPage = data?.info.next;

  return (
    <>
      <Box
        sx={(theme) => ({
          backgroundColor: theme.palette.background.paper,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          py: 5,
          [theme.breakpoints.down('md')]: {
            flexDirection: 'column',
          },
        })}
      >
        <Box
          sx={{
            width: '70%',
          }}
        >
          <TextField
            id="search-characters"
            label="Search"
            role="search"
            variant="outlined"
            placeholder="Search Characters by Name"
            fullWidth
            sx={{ my: 'auto' }}
            value={charactersSearchText}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              charactersSetSearchText(e.target.value);
            }}
          />
        </Box>
        <Box
          sx={(theme) => ({
            border: '1px solid',
            borderColor: '#2271B1',
            p: 2,
            ml: 1,
            borderRadius: '5px',
            [theme.breakpoints.down('md')]: {
              mt: 1,
              ml: 0,
              width: '70%',
            },
          })}
        >
          <Typography variant="body2" color="primary" component="p">
            Total:{' '}
            <i>
              {' '}
              <b>{data?.info.count ? data?.info.count : 0}</b> Characters
            </i>
          </Typography>
        </Box>
      </Box>

      {loading && <MainLoader />}
      {data && (
        <Box>
          <Box
            sx={(theme) => ({
              backgroundColor: theme.palette.background.paper,
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              rowGap: '25px',
              columnGap: '25px',
              pb: 5,
            })}
          >
            {data?.results.map((character) => (
              <Suspense key={character.id} fallback={<MainLoader />}>
                <Link
                  role="link"
                  to={`/${character.id}`}
                  style={{ textDecoration: 'none' }}
                >
                  <CharacterCard character={character} />
                </Link>
              </Suspense>
            ))}

            {called && data.results.length === 0 && (
              <Typography color="red">
                There's no character with "{charactersSearchText}" exits, try
                search for "
                <span
                  style={{
                    textDecoration: 'underline',
                    cursor: 'pointer',
                    color: '#2271B1',
                  }}
                  onClick={() => charactersSetSearchText('Morty')}
                >
                  Morty
                </span>
                "
              </Typography>
            )}
          </Box>
          {isNextPage && (
            <Box
              sx={(theme) => ({
                display: 'flex',
                justifyContent: 'center',
                pb: 10,
                backgroundColor: theme.palette.background.paper,
              })}
            >
              <Button
                variant="contained"
                size="large"
                onClick={() => loadMoreCharacters()}
                style={{ textTransform: 'capitalize' }}
              >
                Load More
              </Button>
            </Box>
          )}
        </Box>
      )}
    </>
  );
};

export default CharactersList;

