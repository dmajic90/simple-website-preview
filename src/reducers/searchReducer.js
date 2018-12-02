import {
  SAVE_RESULTS,
  ADD_TO_LIST,
  REMOVE_FROM_LIST,
  UPDATE_SEARCH_RESULTS,
  SAVE_NEW_LIST,
  RESET_SEARCH_PREVIEW,
  REMOVE_FROM_SAVED_LIST,
  DELETE_LIST,
  ADD_TO_SAVED_LIST
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
          premiered: '1987'
        },
        {
          name: 'Mr.Bean',
          id: 1719,
          premiered: '1990'
        },
        {
          name: 'South Park',
          id: 112,
          premiered: '1997'
        },
        {
          name: 'The Big Bang Theory',
          id: 66,
          premiered: '2007'
        },
        {
          name: 'The Office',
          id: 526,
          premiered: '2005'
        },
        {
          name: 'The Simpsons',
          id: 83,
          premiered: '1989'
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
          premiered: '2017'
        },
        {
          name: 'Game of Thrones',
          id: 82,
          premiered: '2011'
        },
        {
          name: 'Lost',
          id: 123,
          premiered: '2004'
        },
        {
          name: 'Sleepy Hollow',
          id: 42,
          premiered: '2013'
        },
        {
          name: 'The Flash',
          id: 13,
          premiered: '2014'
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

    case REMOVE_FROM_SAVED_LIST:
      return {
        ...state,
        lists: [
          ...state.lists.map(l => {
            if (l.listID === Number(action.payload.list)) {
              return {
                ...l,
                listShows: [
                  ...l.listShows.filter(
                    el => el.id !== Number(action.payload.show)
                  )
                ]
              };
            }
            return l;
          })
        ]
      };

    case DELETE_LIST:
      return {
        ...state,
        lists: state.lists.filter(function(list) {
          return list.listID !== Number(action.payload);
        })
      };

    case ADD_TO_SAVED_LIST:
      return {
        ...state,
        lists: [
          ...state.lists.map(l => {
            if (l.listID === Number(action.payload.list)) {
              return {
                ...l,
                listShows: [
                  ...l.listShows,
                  ...state.items
                    .filter(
                      item => item.show.id === Number(action.payload.show)
                    )
                    .map(function(obj) {
                      return obj.show;
                    })
                ]
              };
            }
            return l;
          })
        ]
      };

    default:
      return state;
  }
}
