import React, { Suspense } from 'react';

import { Routes, Route, Link, Navigate } from 'react-router-dom'

import Comments from './components/comments/Comments'
import Layout from './components/layout/Layout';
import LoadingSpinner from './components/UI/LoadingSpinner';

//----ROUTES----//
const Quotes = React.lazy(() => import('./routes/Quotes'))
const AddQuote = React.lazy(() => import('./routes/AddQuote'))
const Quote = React.lazy(() => import('./routes/Quote'))
const NotFound = React.lazy(() => import('./routes/NotFound'))

function App() {
  return (
    <Layout>
      <Suspense fallback={<div className='centered'><LoadingSpinner /></div>}>
        <Routes>
          <Route path='/' element={<Navigate replace to='/quotes' />} />
          <Route path='/quotes/:quoteId' element={<Quote />}>
            <Route path='/quotes/:quoteId' element=
              {
                <div className='centered'>
                  <Link className='btn--flat' to={'comments'}>Load Comments</Link>
                </div>
              } 
            />
            <Route path='/quotes/:quoteId/comments' element={<Comments />} />
          </Route>
          <Route path='/quotes' element={<Quotes />} />
          <Route path='/add-quote' element={<AddQuote />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Suspense>
    </Layout>
  );
}

export default App;
