import Enzyme from "enzyme";
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter()});

//Jest (React testing library) looks for this and automatically executes it
//Enzyme is external testing package for testing components