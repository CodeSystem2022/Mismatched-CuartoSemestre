import { Link } from 'react-router-dom';
import { Card } from '../components/UI';

function NotFound() {
  return (
    <div className='h-[calc(100vh-64px)] flex items-center justify-center'>
        <Card>
            <h3 className="text-2xl font-bold text-center"> 404</h3>
            <h3 className='text x1 text-center'>Página no encontrada</h3>
            <Link to='/' className='text-blue-400 hover:underline'>Volver al inicio</Link>
        </Card>
    </div>
  )
}

export default NotFound