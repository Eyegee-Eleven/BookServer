import BookDetails from '../components/BookDetails';
import { shallow } from 'enzyme'

describe('Book Details', () =>{

  it('renders', ()=>{
    let appWrapper=shallow(<BookDetails />)
    expect(appWrapper).toEqual(true)

  })

})