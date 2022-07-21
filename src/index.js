import ReactDOM from 'react-dom'; //Veremos mais pra frente
import App from './components/App';

function Lista() {
    return (
       <>
          <App/>
       </>
    );
}

const lista = Lista();
ReactDOM.render(lista, document.querySelector(".root"));
//ReactDOM.render(Lista(), document.querySelector(".root"));