import styled from 'styled-components'

export const BgContainer = styled.div`
  background-color: #152850;
  min-height: 100vh;
`
export const ArtistBg = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/music-playlist/music-playlist-Edsheeran-bg.png');
  height: 450px;
  background-size: cover;
  flex-direction: column;
  justify-content: flex-end;
  display: flex;
  padding-left: 100px;
`

export const ArtistName = styled.h1`
  font-family: 'Roboto';
  color: #ffffff;
  font-size: 42px;
  font-weight: 500;
`
export const PlayListContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: 50px;
  margin-right: 50px;
`
export const ArtistInfo = styled.p`
  font-family: 'Roboto';
  color: #ffffff;
  font-size: 32px;
  font-weight: 500;
`
export const PlayListHeading = styled.h1`
  font-family: 'Roboto';
  color: #ffffff;
  font-size: 32px;
  font-weight: 500;
`

export const SearchInput = styled.input`
  height: 30px;
  width: 18%;
  padding-left: 15px;
  color: #cdb5e1;
  border-radius: 4px;
  background-color: transparent;
  outline: none;
`
export const MusicList = styled.ul`
  padding: 0;
  margin-left: 50px;
  margin-right: 50px;
`

export const EmptyContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
export const NoSongsText = styled.p`
  font-family: 'Roboto';
  color: #ffffff;
  font-size: 32px;
  font-weight: 500;
`
