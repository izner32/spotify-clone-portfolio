import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type song = {
  isPlaying: boolean;
  index: number;
  track: {
    album: {
      href: string;
      images: {
        height: number;
        url: string;
        width: number;
      }[];
      name: string;
    };
    artists: {
      external_urls: {
        spotify: string;
      };
      href: string;
      id: string;
      name: string;
      type: string;
      uri: string;
    }[];
    duration_ms: number;
    href: string;
    name: string;
    preview_url: string;
  };
};

interface setSongType {
  setSong: song;
}

const initialState: setSongType = {
  setSong: {
    isPlaying: false,
    index: 0,
    track: {
      album: {
        href: '',
        images: [
          {
            height: 0,
            url: '',
            width: 0,
          },
        ],
        name: '',
      },
      artists: [
        {
          external_urls: {
            spotify: '',
          },
          href: '',
          id: '',
          name: '',
          type: '',
          uri: '',
        },
      ],
      duration_ms: 0,
      href: '',
      name: '',
      preview_url: '',
    },
  },
};

export const songPlayerSlice = createSlice({
  name: 'setSongPlayer',
  initialState,
  reducers: {
    setSongPlayer: (state, action: PayloadAction<song>) => {
      state.setSong = action.payload;
    },
    setIsPlaying: (state) => {
      state.setSong['isPlaying'] = !state.setSong['isPlaying'];
    },
  },
});

export const { setSongPlayer } = songPlayerSlice.actions;
export const { setIsPlaying } = songPlayerSlice.actions;

// export const selectSetSong = (state: RootState) => state.songPlayer.setSong;
// export const selectIsPlaying = (state: RootState) => state.songPlayer.setIsPlaying;

export default songPlayerSlice.reducer;
