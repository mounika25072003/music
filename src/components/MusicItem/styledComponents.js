import styled from 'styled-components'

export const MusicListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style-type: none;
`

export const TrackInfoContainer = styled.div`
  display: flex;
  align-items: center;
  width: 500px;
`
export const MusicTrackImage = styled.img`
  height: 90px;
  width: 140px;
  margin-right: 20px;
`
export const NameGenreContainer = styled.div``

export const Name = styled.p`
  font-family: 'Roboto';
  color: #ffffff;
  font-size: 18px;
  font-weight: 500;
`

export const Genre = styled.p`
  font-family: 'Roboto';
  color: #ffffff;
  font-size: 18px;
  font-weight: 500;
`
export const DurationDeleteContainer = styled.div`
  display: flex;
  align-items: center;
`
export const Duration = styled.p`
  font-family: 'Roboto';
  color: #ffffff;
  font-size: 18px;
  font-weight: 500;
  margin-right: 50px;
`

export const DeleteButton = styled.button`
  background-color: transparent;
  outline: none;
  border: none;
  color: #ffffff;
`
