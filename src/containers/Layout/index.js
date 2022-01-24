import { Fragment } from 'react';
import { Route, Routes } from 'react-router-dom';
import Footer from '../../components/layouts/Footer';
import Topbar from '../../components/layouts/Topbar';

export default function Layout(props) {
    const { children } = props;
    return (
        <Fragment>
            <Routes>
                <Route exact path="/" element={<Topbar />} />
            </Routes>
            {children}
            <Routes>
                <Route exact path="/" element={<Footer />} />
            </Routes>
        </Fragment>
    )
}