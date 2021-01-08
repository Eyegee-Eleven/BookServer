import App from '../App';
import { shallow } from 'enzyme'
const axios = require('axios');


describe('App', () =>{

  it('renders the homepage', ()=>{
    appWrapper = shallow(<App />)
    expect(appWrapper).toEqual(true);
  })
  
  jest.mock("axios")
  it('returns the list of books', async () => {
    axios.get.mockResolvedValue({
      "index": 0,
      "Book_Title": "Virxo",
      "Author": "Christy Estrada",
      "ISBN_Number": "1,353",
      "isCheckedOut": true,
      "Date_Due": 20210514
    })
    const aBook = await App()
    expect(aBook.index).toEqual(0);
    expect(aBook.Book_Title).toEqual("Virxo");
    expect(aBook.Author).toEqual("Christy Estrada");
    expect(aBook.ISBN_Number).toEqual("1353");
    expect(aBook.isCheckedOut).toEqual(true);
    expect(aBook.Date_Due).toEqual(20210514);
  })
  
})


