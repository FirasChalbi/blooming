import Header from '../../../../component/Header2';
import Footer from '../../../../component/Footer';
import { generateMetadata } from './metadata';

export { generateMetadata };

export default function ProductLayout({ children }) {
  return (
    <div className="bg-gray-100">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
