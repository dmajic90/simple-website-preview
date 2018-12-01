import {
  SAVE_RESULTS,
  ADD_TO_LIST,
  REMOVE_FROM_LIST,
  UPDATE_SEARCH_RESULTS,
  SAVE_NEW_LIST,
  RESET_SEARCH_PREVIEW
} from '../actions/types';

const initialState = {
  items: [],
  listItems: [],
  lists: [
    {
      listID: 1,
      listName: 'Comedy',
      listShows: [
        {
          name: 'Married... with Children',
          id: 499,
          year: 1987
        },
        {
          name: 'Mr.Bean',
          id: 1719,
          year: 1990
        },
        {
          name: 'South Park',
          id: 112,
          year: 1997
        },
        {
          name: 'The Big Bang Theory',
          id: 66,
          year: 2007
        },
        {
          name: 'The Office',
          id: 526,
          year: 2005
        },
        {
          name: 'The Simpsons',
          id: 83,
          year: 1989
        }
      ]
    },
    {
      listID: 2,
      listName: 'Fantasy',
      listShows: [
        {
          name: 'Castlevania',
          id: 25242,
          year: 2017
        },
        {
          name: 'Game of Thrones',
          id: 82,
          year: 2011
        },
        {
          name: 'Lost',
          id: 123,
          year: 2004
        },
        {
          name: 'Sleepy Hollow',
          id: 42,
          year: 2013
        },
        {
          name: 'The Flash',
          id: 13,
          year: 2014
        }
      ]
    }
  ]
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SAVE_RESULTS:
      const addVisible = [...action.payload];
      return {
        ...state,
        items: addVisible.map(el => ({ ...el, visible: true }))
      };

    case ADD_TO_LIST:
      return {
        ...state,
        listItems: [
          ...state.listItems,
          ...state.items.filter(function(item) {
            return item.show.id === Number(action.payload);
          })
        ]
      };

    case REMOVE_FROM_LIST:
      return {
        ...state,
        listItems: state.listItems.filter(function(item) {
          return item.show.id !== Number(action.payload);
        })
      };

    case UPDATE_SEARCH_RESULTS:
      return {
        ...state,
        items: state.items.map(item =>
          item.show.id === Number(action.payload)
            ? { ...item, visible: true }
            : item
        )
      };

    case SAVE_NEW_LIST:
      return {
        ...state,
        lists: [...state.lists, action.payload]
      };

    case RESET_SEARCH_PREVIEW:
      return { ...state, items: [], listItems: [] };

    default:
      return state;
  }
}
