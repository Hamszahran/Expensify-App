import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import Header from '../components/Header';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/NotFoundPage';


const AppRouter = () => (
  <BrowserRouter>
       <Header/>
        <Routes>
        <Route path="/" element={<ExpenseDashboardPage />} exact={true} />
        <Route path="/edit/:id?" element={<EditExpensePage />} />
        <Route path="/create" element={<AddExpensePage />} />      
        <Route path="/help" element={<HelpPage />} />      

        <Route element={<NotFoundPage />} />      
       </Routes>
 </BrowserRouter>

);

export default AppRouter;

