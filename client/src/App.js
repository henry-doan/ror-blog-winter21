import { Route, Routes } from 'react-router-dom';
import Home from './components/shared/Home';
import About from './components/shared/About';
import NoMatch from './components/shared/NoMatch';
import Blogs from './components/blogs/Blogs';
import Navbar from './components/shared/Navbar';
import BlogShow from './components/blogs/BlogShow';

const App = () => (
  <>
    <Navbar />
    <Routes>
      <Route exact path='/' element={<Home />} />
      <Route exact path='/home' element={<Home />} />
      <Route exact path='/about' element={<About />} />
      <Route exact path='/blogs' element={<Blogs />} />
      <Route exact path='/blogs/:blogId' element={<BlogShow />} />
      <Route path='*' element={<NoMatch />} />
    </Routes>
  </>
)

export default App;
