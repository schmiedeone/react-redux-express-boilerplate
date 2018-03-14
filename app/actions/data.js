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

  // action for sending data to server
  // data object would look like this:
  //  {
  //   "top": "Top",
  //   "bottom": "Bottom",
  //   "head": "HEAD",
  //   "feet": "Feet"
  // }
  export function sendDataRequest(data) {
    return(dispatch) => {
        let myHeaders = new Headers();
        myHeaders.set('Content-Type', 'application/json');
        const request = new Request('/api/items', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: myHeaders,
        });
        return fetch(request)
        .then(res => res.json())
        .then((res) => console.log(res));
    }
  };

