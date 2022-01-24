import MediaQuery from "react-responsive";

function Responsive({ children, size }) {
    let query = '(min-width: 768px)';
    if (size === 'desktop') query = '(min-width: 1400px) ';
    if (size === 'mobile+tablet') query = '(min-device-width: 320px) and (max-width: 767px)';
    if (size === 'tablet+desktop') query = '(min-width: 768px) and (max-width: 1399px)';
    if (size === 'tablet') query = '(min-device-width: 768px) and (max-width: 992px)';
    return (
      <MediaQuery query={query}>
        {children}
      </MediaQuery>
    );
}

export default Responsive;