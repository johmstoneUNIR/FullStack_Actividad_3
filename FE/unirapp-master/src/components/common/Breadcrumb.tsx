
import '../../styles/Breadcrumb.css';

interface BreadcrumbProps {
  titulo: string;
}

export const Breadcrumb = (BreadcrumbProps: BreadcrumbProps) => {
  return (
    <nav className='breadcrumb-carrot' aria-label="breadcrumb">
        <ol className="breadcrumb">
        <li className="breadcrumb-item">Inicio</li>
        <li className="breadcrumb-item">{BreadcrumbProps.titulo}</li>
        </ol>
    </nav>
  )
}
