import Spinner from '../components/spinner/Spinner';
import ErrorMessage from '../components/errorMessage/ErrorMessage';
import Skeleton from '../components/skeleton/Skeleton';

const setContent = (process, Component, data) => {
    switch (process) {
        case 'waiting':
            return <Skeleton />;
        case 'loading':
            return <Spinner />;
        case 'confirmed':
            return <Component data={data} />;
        case 'error':
            return <ErrorMessage />;
        default:
            throw new Error('Unexpected process state');
    }
}

export default setContent;

/* 

*=====Finite-state machine=====
* It is an abstract machine that can be in exactly one of a finite number of states at any given time. 
* The FSM can change from one state to another in response to some inputs; 
* the change from one state to another is called a transition.
* An FSM is defined by a list of its states, its initial state, 
* and the inputs that trigger each transition.
*/