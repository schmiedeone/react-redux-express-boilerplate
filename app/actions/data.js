export const FETCH_HELLO = 'FETCH_HELLO';

export function fetchHello(payload) {
  return {
    type: FETCH_HELLO,
    payload
  };
}

export function fetchHelloRequest() {
    return(dispatch) => {
        return fetch('/api/hello')
        .then(res => res.json())
        .then((res) => {
          dispatch(fetchHello(res.express));
        });
    }
  };

