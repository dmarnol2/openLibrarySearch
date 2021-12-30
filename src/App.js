import { useState } from 'react';
import { Button }  from 'react-bootstrap';
import BarChart from './BarChart';
import BookCovers from './BookCovers';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

function App() {

  const [books, setDisplayBooks] = useState([]);
  const [chartData, setChartData] = useState();
  const [disableButton, setDisableButton] = useState(false);
  const [offset, setOffset] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [showBooks, setShowBooks] = useState(false);
  const [showChart, setShowChart] = useState(false);

  const FETCH_BUTTON_TEXT = 'fetch more results';
  const END_OF_RESULTS_TEXT = 'end of results';
  const [buttonText, setButtonText] = useState(FETCH_BUTTON_TEXT);

  const numberOfBars = 7

  const nextPageHandler = event => {
    event.preventDefault();
    onSubmitHandler(event);
  }

  const disableFetchButton = () => {
    setButtonText(END_OF_RESULTS_TEXT);
    setDisableButton(true);
  }

  const getButtonText = (numResults, startPosition) => {
   (numResults <= startPosition) && disableFetchButton();
  }

  const buildChart = () => {
    setChartData(Array.from(Array(numberOfBars), () => []));
    chartData[0].barDescription = "before 1920";
    chartData[1].barDescription = "1920 - 1939";
    chartData[2].barDescription = "1940 - 1959";
    chartData[3].barDescription = "1960 - 1979";
    chartData[4].barDescription = "1980 - 1999";
    chartData[5].barDescription = "2000 - 2019";
    chartData[6].barDescription = "2020 ++";
    setChartData(() => setChartData(chartData));
  }

  const onSubmitHandler = event => {
    event.preventDefault();
    fetch(`https://openlibrary.org/search.json?q=${searchTerm}&limit=20&offset=${offset}`)
    // fetch(`https://openlibrary.org/subjects/${searchTerm}.json`)
    .then(response => {
      return response.json(); })
    .then((data) => {
      getButtonText(data.numFound, data.start)
      const transformedBooks = data.docs.map(
        bookData => {
          return {
            first_publish_year: bookData.first_publish_year,
            title: bookData.title,
            cover: bookData.cover_i,
            // link to book on openLibrary
            url: `https://openlibrary.org/${bookData.key}`
          }
        });

      buildChart();
      const res = transformedBooks.map( sortedBook => {
        const year = sortedBook.first_publish_year;

        switch (true) {
          case (year < 1920):
            chartData[0].push(sortedBook);
            break;
          case (year >= 1920 && year < 1940):
            chartData[1].push(sortedBook);
            break;
          case (year >= 1940 && year < 1960):
            chartData[2].push(sortedBook);
            break;
          case (year >= 1960 && year < 1980):
            chartData[3].push(sortedBook);
            break;
          case (year >= 1980 && year < 2000):
            chartData[4].push(sortedBook);
            break;
          case (year >= 2000 && year < 2020):
            chartData[5].push(sortedBook);
            break;
          case (year >= 2020 && year < 2040):
            chartData[6].push(sortedBook);
            break;
          default:
            console.log("search results outside date range");
            break;
        }
        setChartData(() => setChartData(chartData));
        setShowChart(() => setShowChart(true));
        setOffset(() => setOffset(offset + 20));
      }
    );
    });
  }

  const searchTermHandler = event => {
    setSearchTerm(event.target.value);
    setChartData(() => Array.from(Array(numberOfBars), () => []));
    setOffset(() => setOffset(0));
    setShowChart(() => setShowChart (false));
    setShowBooks(() => setShowBooks (false));
    setButtonText(() => setButtonText(FETCH_BUTTON_TEXT));
    setDisableButton(() => setButtonText(true));
  }

  const showBooksHandle = (event) => {
    setDisplayBooks(() => setDisplayBooks([]));
    let tempData = chartData[event.target.dataset.id].map(a => { return {...a}});
    setShowBooks(true);
    setDisplayBooks(() => setDisplayBooks(tempData));
    }


  return (
    <div className='App'>
      <header className="App-header">
        <p>Open Library Search</p>
        <form onSubmit={onSubmitHandler}>
          <input className='input-style' type="text" onChange={searchTermHandler} value={searchTerm}></input>
          <button className='button-style'>search</button>
        </form>
      </header>
      <div>
        {showChart && <BarChart
                        chartData={chartData}
                        showBooksHandle={showBooksHandle}
                      />}
        {showChart && <Button variant="outline-info" onClick={nextPageHandler} disabled={disableButton}>{buttonText}</Button>}
      </div>
        {showBooks && <BookCovers books={books}/>}
    </div>
  );
}

export default App;