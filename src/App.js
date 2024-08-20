
import './App.css';
import Modal from 'react-modal';

import React, { useState, useEffect } from "react";
import WatchCaliber from './components/WatchCaliber';
import WatchCase from './components/WatchCase';
import WatchPricing from './components/WatchPricing.js';
import CardLayout from './components/CardLayout.js';
import TableLayout from './components/TableView.js';
import WatchDetails from './components/WatchDetails.js';
import ScatterPlot from './components/ScatterPlot.js';

Modal.setAppElement('#root');


function App() {
  const WATCH_SERVICE_BASE_URL = process.env.REACT_APP__WATCH_SERVICE_BASE_URL;

  const [modalIsOpen, setIsOpen] = useState(false);
  const [tableView, setTableView] = useState(false);
  
  const [masterWatches, setMasterWatches] = useState([]);
  const [watches, setWatches] = useState([]);
  const [listings, setListings] = useState([]);
  
  const [query, setQuery] = useState("");

  const [modalInfo, setModalInfo] = useState({'image_mapping': {'image_name': 'watch_icon.svg'}});

  const fetchData = async (url, callbacks = []) => {
    try {
      const dataResponse = await fetch(url);
      if (!dataResponse.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await dataResponse.json();

      callbacks.forEach(callback => {
        if (typeof callback === 'function'){
          callback(data['data']);
        }
      })
    } catch (error) {
      callbacks.forEach(callback => {
        if (typeof callback === 'function'){
          callback([])
        }
      })
      console.error('Error fetching data:', error);
    } 
  };

  useEffect(() => {
    if(query.length > 0){
      fetchData(`${WATCH_SERVICE_BASE_URL}/v1/watches/full/${query}`, [setWatches])
    } else {
      if(masterWatches.length > 0){
        setWatches(masterWatches);
      } else {
        fetchData(`${WATCH_SERVICE_BASE_URL}/v1/watches/full`, [setWatches, setMasterWatches]);
      }
    }
  }, [query, ]);

  useEffect(() => {
    if(modalIsOpen){
      fetchData(`${WATCH_SERVICE_BASE_URL}/v1/listings/${modalInfo.watch.reference_number}`, [setListings]);
    }
  }, [modalIsOpen]);


  function openModal(item) {
    setModalInfo(item);
    document.body.style.overflow = 'hidden';
    setIsOpen(true);
  }
  
  function closeModal() {
    document.body.style.overflow = 'unset';
    setIsOpen(false);
  }

  function changeView(e){
    setTableView(e.target.checked);
  }

  return (
    <div className="App">
      <header className='h-32 p-3 sticky top-0 z-10 bg-background'>
          <div className='flex flex-row justify-center'>
            <h1 className='text-4xl font-semibold m-auto'>WATCH <span className='text-accent-primary'>TRACKER</span></h1>
            <input className='w-64 pt-1 pb-1 px-3 m-auto rounded-md bg-secondary' type="text" placeholder='Search...' onChange={(e) => setQuery(e.target.value.toUpperCase())}/>
          </div>
          <div className=' flex flex-row justify-center mt-5'>
            <h1 className='text-2xl font-semibold p-2'>Showing <span className='text-accent-primary'>{watches.length}</span> Watches</h1>
            <div className='flex flex-row justify-center ml-10'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 mx-2 my-auto">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5h3m-6.75 2.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-15a2.25 2.25 0 0 0-2.25-2.25H6.75A2.25 2.25 0 0 0 4.5 4.5v15a2.25 2.25 0 0 0 2.25 2.25Z" />
              </svg>

              <label className="inline-flex items-center cursor-pointer">
                <input type="checkbox" value="table" className="sr-only peer" onChange={(e) => {changeView(e)}}/>
                <div className="relative w-11 h-6 bg-secondary peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-accent-primary rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-accent-primary"></div>
              </label>

              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 mx-2 my-auto">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 0 1-1.125-1.125M3.375 19.5h7.5c.621 0 1.125-.504 1.125-1.125m-9.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-7.5A1.125 1.125 0 0 1 12 18.375m9.75-12.75c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125m19.5 0v1.5c0 .621-.504 1.125-1.125 1.125M2.25 5.625v1.5c0 .621.504 1.125 1.125 1.125m0 0h17.25m-17.25 0h7.5c.621 0 1.125.504 1.125 1.125M3.375 8.25c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m17.25-3.75h-7.5c-.621 0-1.125.504-1.125 1.125m8.625-1.125c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h7.5m-7.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125M12 10.875v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125M12 10.875c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125M13.125 12h7.5m-7.5 0c-.621 0-1.125.504-1.125 1.125M20.625 12c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h7.5M12 14.625v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125M12 14.625c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125m0 1.5v-1.5m0 0c0-.621.504-1.125 1.125-1.125m0 0h7.5" />
              </svg>
            </div>
          </div>
      </header>

      <div className=''>
        {(tableView ? <TableLayout data={watches} onClick={openModal}/> : <CardLayout data={watches} onClick={openModal}/>)}
      </div>
      <div id='footer' className='bottom-0 sticky h-24 z-10 bg-background'>
      </div>

      {modalInfo.watch ?
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          className='bg-background m-auto w-2/3 mt-16 p-10 rounded-2xl'
          style={{overlay: {background: "rgba(255,255,255,0.1)", zIndex:"50"}}}
          contentLabel="modal">
            <div className='flex flex-row max-h-96'>
              <div className='bg-primary rounded-2xl w-1/3 p-16 justify-center mr-3'>
                <img className='m-auto justify-center max-h-64' src={require('./images/' + modalInfo.image_mapping.image_name)}/>
              </div>
              <div className='bg-primary rounded-2xl w-2/3 p-16 ml-3 flex justify-center align-middle'>
                <ScatterPlot data={listings} length={listings.length}/>
              </div>
            </div>
            <div className='flex flex-row justify-between'>
              <div className='bg-primary rounded-2xl w-1/2 mt-6 mr-3 p-3 h-max flex flex-col'>
                <div className='flex flex-row justify-between'>
                  <div className='text-accent-primary font-semibold text-l'>{modalInfo.watch.brand}</div>
                  <div className='text-sm font-bold bg-accent-secondary rounded-2xl my-auto px-2'>{modalInfo.watch.reference_number}</div>
                </div>
                <div className='flex flex-row justify-between'>
                  <div className='text-sm font-semibold'>{modalInfo.watch.model + " " + modalInfo.watch.nickname}</div>
                  <div className='text-sm font-semibold'>{modalInfo.watch.years_produced}</div>
                </div>
              </div>
              <div className=' bg-primary rounded-2xl w-1/2 mt-6 ml-3'>
                <WatchPricing details={modalInfo.watch.pricing}/>
              </div>
            </div>

            <div className='flex flex-row'>
              <div className='bg-primary rounded-2xl w-1/3 mt-6 mr-3'>
                {/* TODO: change this from bracelet info to details */}
                <WatchDetails details={modalInfo.watch.bracelet_info} dial={modalInfo.watch.dial}/>
              </div>
              <div className='bg-primary rounded-2xl w-1/3 mt-6 mx-3'>
                <WatchCaliber details={modalInfo.caliber}/>
              </div>
              <div className='bg-primary rounded-2xl w-1/3 mt-6 ml-3'>
                <WatchCase details={modalInfo.watch.case_info}/>
              </div>
            </div>
        </Modal>
      : <div></div>}
    </div>
  );
};

export default App;
